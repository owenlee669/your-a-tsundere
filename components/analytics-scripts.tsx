import Script from "next/script";

export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-1WT8612RW1";
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "180f0e01-ef4d-44bb-b636-d02a316a1b6b";
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC || "https://umami.jinbai.online/script.js";
  const umamiRecorderSrc = process.env.NEXT_PUBLIC_UMAMI_RECORDER_SRC || "https://umami.jinbai.online/recorder.js";
  const umamiReplaySampleRate = process.env.NEXT_PUBLIC_UMAMI_REPLAY_SAMPLE_RATE || "0.15";
  const umamiReplayMaskLevel = process.env.NEXT_PUBLIC_UMAMI_REPLAY_MASK_LEVEL || "moderate";
  const umamiReplayMaxDuration = process.env.NEXT_PUBLIC_UMAMI_REPLAY_MAX_DURATION || "300000";
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || "x1azmjkk74";

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
      {umamiId && umamiSrc && (
        <Script
          defer
          src={umamiSrc}
          data-website-id={umamiId}
          strategy="afterInteractive"
        />
      )}
      {umamiId && umamiRecorderSrc && (
        <Script
          defer
          src={umamiRecorderSrc}
          data-website-id={umamiId}
          data-sample-rate={umamiReplaySampleRate}
          data-mask-level={umamiReplayMaskLevel}
          data-max-duration={umamiReplayMaxDuration}
          strategy="afterInteractive"
        />
      )}
      {clarityId && (
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
