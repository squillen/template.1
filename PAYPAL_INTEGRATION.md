# PayPal Integration

This document provides instructions on how to set up and use the PayPal integration in this business template.

## Environment Variables

Before using the PayPal integration, you need to set up the following environment variables:

1. Copy the `.env.example` file to a new file named `.env.local`:
   ```
   cp .env.example .env.local
   ```

2. Edit the `.env.local` file and add your PayPal credentials:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here
   NEXT_PUBLIC_PAYPAL_API_URL=https://api-m.sandbox.paypal.com
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

   - For development, use the sandbox URL (`https://api-m.sandbox.paypal.com`)
   - For production, use the live URL (`https://api-m.paypal.com`)
   - Set `NEXT_PUBLIC_APP_URL` to your application's URL

## Getting PayPal Credentials

1. Create a PayPal Developer account at [developer.paypal.com](https://developer.paypal.com/)
2. Navigate to the Dashboard
3. Create a new app in the REST API apps section
4. Copy the Client ID and Secret to your `.env.local` file

## Testing the Integration

For testing in development mode:

1. Use the sandbox environment
2. Log in to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
3. Go to Sandbox > Accounts to find test accounts
4. Use these accounts to test the payment flow

## Customizing the PayPal Checkout

The PayPal checkout component can be customized in `components/paypal-checkout.tsx`:

- Edit the `paypalScriptOptions` object to change currency, funding sources, etc.
- Modify button styles in the `PayPalButtons` component
- Customize the order creation and capture process

## Implementing Webhooks (Optional)

For advanced use cases, you may want to implement PayPal webhooks:

1. Create a new API route at `app/api/paypal/webhooks/route.ts`
2. Set up webhook listeners in the PayPal Developer Dashboard
3. Configure your webhook to point to your API route
4. Implement webhook event handling for events like payment.capture.completed

## Order Processing

After a successful payment:

1. The `onSuccess` callback in `PayPalCheckout` component is triggered
2. The order details are available in the callback data
3. The checkout-modal moves to the success state
4. You can add custom order processing logic in the `capture-order` API route

## Troubleshooting

- Check browser console for errors
- Verify environment variables are correctly set
- Ensure PayPal API credentials have the correct permissions
- Test with sandbox accounts before going live