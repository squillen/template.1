"use client"

import { useState } from "react"
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING
} from '@paypal/react-paypal-js'
import { Button } from "@/components/ui/button"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
  originalPrice?: number
}

interface PayPalCheckoutProps {
  cartItems: CartItem[]
  formData: {
    email: string
    firstName: string
    lastName: string
    company?: string
    address: string
    city: string
    country: string
    zipCode: string
    specialRequests?: string
  }
  onSuccess?: (orderData: any) => void
  onError?: (error: any) => void
  onCancel?: () => void
}

export function PayPalCheckout({
  cartItems,
  formData,
  onSuccess,
  onError,
  onCancel
}: PayPalCheckoutProps) {
  const [loading, setLoading] = useState(false)

  // Calculate total
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Create order via server API
  const createOrder = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            name: item.name,
            description: item.description || item.name,
            quantity: item.quantity,
            unit_amount: item.price
          })),
          customer: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            address: {
              address_line_1: formData.address,
              admin_area_2: formData.city,
              country_code: formData.country,
              postal_code: formData.zipCode
            }
          },
          total: totalPrice
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const orderData = await response.json()
      return orderData.id
    } catch (error) {
      console.error('Error creating order:', error)
      if (onError) onError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Handle PayPal approval
  const handleApprove = async (data: any) => {
    setLoading(true)
    try {
      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderID: data.orderID,
          orderDetails: {
            items: cartItems,
            customer: formData
          }
        })
      })

      if (!response.ok) {
        throw new Error('Failed to capture order')
      }

      const orderData = await response.json()

      // Call success callback if provided
      if (onSuccess) onSuccess(orderData)

      return orderData
    } catch (error) {
      console.error('Error capturing order:', error)
      if (onError) onError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Configure PayPal Script options
  const paypalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
    currency: 'USD',
    intent: 'capture',
    components: 'buttons,funding-eligibility',
    'enable-funding': 'paylater,venmo,card'
  }

  return (
    <div className="w-full space-y-4">
      {loading && (
        <div className="flex justify-center py-2">
          <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
          <span className="ml-2 text-sm">Processing payment...</span>
        </div>
      )}

      <div id="paypal-button-container" className="w-full">
        <PayPalScriptProvider options={paypalScriptOptions}>
          {/* Standard PayPal Button */}
          <PayPalButtons
            disabled={loading}
            style={{
              layout: 'vertical',
              shape: 'rect',
              color: 'blue'
            }}
            createOrder={createOrder}
            onApprove={handleApprove}
            onError={(error) => {
              console.error('PayPal error:', error)
              if(onError) onError(error)
            }}
            onCancel={() => {
              console.log('Payment cancelled')
              if(onCancel) onCancel()
            }}
          />

          {/* Venmo Button */}
          <PayPalButtons
            disabled={loading}
            fundingSource={FUNDING.VENMO}
            style={{
              layout: 'vertical',
              shape: 'rect',
            }}
            createOrder={createOrder}
            onApprove={handleApprove}
            onError={(error) => {
              console.error('PayPal error:', error)
              if(onError) onError(error)
            }}
            onCancel={() => {
              console.log('Payment cancelled')
              if(onCancel) onCancel()
            }}
          />

          {/* Pay Later Button */}
          <PayPalButtons
            disabled={loading}
            fundingSource={FUNDING.PAYLATER}
            style={{
              layout: 'vertical',
              shape: 'rect',
            }}
            createOrder={createOrder}
            onApprove={handleApprove}
            onError={(error) => {
              console.error('PayPal error:', error)
              if(onError) onError(error)
            }}
            onCancel={() => {
              console.log('Payment cancelled')
              if(onCancel) onCancel()
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}