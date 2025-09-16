"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, CheckCircle } from "lucide-react"
import type { CartItem } from "./cart-sidebar"
import { PayPalCheckout } from "./paypal-checkout"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onOrderComplete: () => void
}

export function CheckoutModal({ isOpen, onClose, cartItems, onOrderComplete }: CheckoutModalProps) {
  const [step, setStep] = useState<"details" | "payment" | "paypal" | "success">("details")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    specialRequests: "",
  })

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = totalPrice * 0.1 // 10% tax for template
  const finalTotal = totalPrice + tax

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step === "details") {
      setStep("payment")
    } else if (step === "payment") {
      // Simulate payment processing
      setTimeout(() => {
        setStep("success")
        onOrderComplete()
      }, 2000)
    }
  }

  const handleClose = () => {
    setStep("details")
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
      specialRequests: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {step === "details" && "Contact & Billing Information"}
            {step === "payment" && "Payment Details"}
            {step === "success" && "Order Confirmed!"}
          </DialogTitle>
          <DialogDescription>
            {step === "details" && "Please provide your contact and billing information"}
            {step === "payment" && "Enter your payment information to complete the order"}
            {step === "success" && "Thank you for your order! We'll be in touch soon."}
          </DialogDescription>
        </DialogHeader>

        {step === "details" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your Company"
              />
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="New York"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Select onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="10001"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Any special requirements or notes..."
                rows={3}
              />
            </div>

            <Button onClick={handleNextStep} className="w-full">
              Continue to Payment
            </Button>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h3 className="font-semibold">Payment Methods</h3>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  onClick={() => setStep("paypal")}
                  variant="outline"
                  className="h-16 flex justify-start items-center gap-2"
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    alt="PayPal"
                    className="h-8 w-auto"
                  />
                  <div className="text-left">
                    <div className="font-medium">PayPal</div>
                    <div className="text-xs text-muted-foreground">Pay with PayPal or credit/debit card</div>
                  </div>
                </Button>

                <Button
                  onClick={handleNextStep}
                  variant="outline"
                  className="h-16 flex justify-start items-center gap-2"
                >
                  <CreditCard className="h-8 w-8" />
                  <div className="text-left">
                    <div className="font-medium">Credit Card</div>
                    <div className="text-xs text-muted-foreground">Pay with credit or debit card</div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>

            <Button variant="outline" onClick={() => setStep("details")} className="w-full">
              Back to Contact Information
            </Button>
          </div>
        )}

        {step === "paypal" && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* PayPal Checkout */}
            <div className="space-y-4">
              <PayPalCheckout
                cartItems={cartItems}
                formData={{
                  email: formData.email,
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  company: formData.company,
                  address: formData.address,
                  city: formData.city,
                  country: formData.country,
                  zipCode: formData.zipCode,
                  specialRequests: formData.specialRequests
                }}
                onSuccess={(orderData) => {
                  console.log('PayPal payment successful:', orderData);
                  setStep("success");
                  onOrderComplete();
                }}
                onError={(error) => {
                  console.error('PayPal payment error:', error);
                }}
                onCancel={() => {
                  console.log('PayPal payment cancelled');
                }}
              />
            </div>

            <Button variant="outline" onClick={() => setStep("payment")} className="w-full">
              Back to Payment Options
            </Button>
          </div>
        )}

        {step === "success" && (
          <div className="text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Order Confirmed!</h3>
              <p className="text-muted-foreground">
                Thank you for your order. We've sent a confirmation email to {formData.email}
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Order Total</p>
              <p className="text-2xl font-bold">${finalTotal.toFixed(2)}</p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
