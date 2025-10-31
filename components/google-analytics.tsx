"use client"

import Script from "next/script"

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// To use this component:
// 1. Get your GA4 Measurement ID from analytics.google.com
// 2. Add to app/layout.tsx:
//    import { GoogleAnalytics } from "@/components/google-analytics"
//    <GoogleAnalytics measurementId="G-XXXXXXXXXX" />

