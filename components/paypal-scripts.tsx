import Script from "next/script";

export function PayPalScripts() {
  // todo change IMS url based on environment through env variables

  return (
    <>
      <Script src="https://ims.zettletest.com/static/sdk/storefront-sdk.js" />
    </>
  );
}
