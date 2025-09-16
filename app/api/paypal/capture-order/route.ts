import { NextResponse } from 'next/server';

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || '';
const PAYPAL_API_URL = process.env.NEXT_PUBLIC_PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com';

// Generate an access token for PayPal API
async function generateAccessToken() {
  try {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
    const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error(`PayPal token request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Failed to generate PayPal access token:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const { orderID, orderDetails } = await request.json();

    if (!orderID) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    try {
      const accessToken = await generateAccessToken();
      const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('PayPal API error:', errorData);
        return NextResponse.json({ error: 'Failed to capture PayPal order' }, { status: 500 });
      }

      const captureData = await response.json();

      // Here you would typically store the order in your database
      // For example, you can use the orderDetails to save customer and product information
      // You can also send confirmation emails, update inventory, etc.

      // Mock database save (replace with actual implementation)
      console.log('Order details saved:', {
        paypalOrderId: orderID,
        orderStatus: captureData.status,
        customerInfo: orderDetails.customer,
        items: orderDetails.items,
        transactionDetails: captureData,
        orderDate: new Date().toISOString(),
      });

      return NextResponse.json(captureData);
    } catch (error) {
      console.error('Error capturing PayPal order:', error);
      return NextResponse.json({ error: 'Failed to capture PayPal order' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in capture-order API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}