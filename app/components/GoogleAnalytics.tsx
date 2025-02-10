import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    {/* Google Analytics Script */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-7G80QZJXP5`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7G80QZJXP5', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;