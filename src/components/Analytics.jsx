import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * All analytics scripts in one file.
 * Each script only renders when its env var / config ID is set.
 *
 *   NEXT_PUBLIC_GA_ID              — Google Analytics 4
 *   NEXT_PUBLIC_GTM_ID             — Google Tag Manager
 *   NEXT_PUBLIC_META_PIXEL_ID      — Meta (Facebook) Pixel
 *   NEXT_PUBLIC_LINKEDIN_PARTNER_ID— LinkedIn Insight Tag
 *
 * See ANALYTICS_GUIDE.md for setup.
 */
export default function Analytics() {
  const { ga4, gtm, metaPixel, linkedIn } = siteConfig.analytics;
  return (
    <>
      {gtm && (
        <>
          <Script id="gtm" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtm}');
          `}</Script>
        </>
      )}

      {ga4 && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {metaPixel && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixel}');
          fbq('track', 'PageView');
        `}</Script>
      )}

      {linkedIn && (
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          _linkedin_partner_id = "${linkedIn}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script"); b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}</Script>
      )}
    </>
  );
}

/** Optional GTM noscript fallback (place inside <body> via children render) */
export function GtmNoScript() {
  const { gtm } = siteConfig.analytics;
  if (!gtm) return null;
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
