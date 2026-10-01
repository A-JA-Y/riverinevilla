import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ModalProvider } from "@/components/ModalContext";
import { SITE_URL } from "@/data/project";

// Inter for everything, headings included, matching the reference layout
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#12302a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Embassy Riverine | 4 & 5 BHK Villas in North Bangalore",
  description:
    "Embassy Riverine offers 217 luxury 4, 4.5 & 5 BHK villas across 85 acres at Embassy Origins, North Bangalore. Prices from Rs 14.10 Cr. RERA approved. Book a site visit.",

  keywords: [
    "Embassy Riverine",
    "Embassy Riverine villas",
    "Embassy Origins Bangalore",
    "luxury villas North Bangalore",
    "5 BHK villas Yelahanka",
    "Embassy villas near airport",
    "Embassy Riverine price",
    "Embassy Riverine floor plan",
    "villa projects North Bangalore",
    "Embassy Developments new launch",
    "Tarahunise villas",
  ],

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Embassy Riverine | 217 Luxury Villas at Embassy Origins, North Bangalore",
    description:
      "A riverine corridor, 4,000 trees and 217 villas across 85 acres. 4, 4.5 and 5 BHK homes from Rs 14.10 Cr in North Bangalore's airport corridor.",
    url: "/",
    siteName: "Embassy Riverine",
    images: [
      {
        url: "/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Embassy Riverine — luxury villas at Embassy Origins, North Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Embassy Riverine | 217 Luxury Villas, North Bangalore",
    description:
      "4, 4.5 and 5 BHK villas from Rs 14.10 Cr across the 85-acre Embassy Origins township at Tarahunise, North Bangalore.",
    images: ["/og-cover.webp"],
  },

  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} h-full antialiased light`}
    >
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>

      {/* horizontal overflow is clipped in globals.css (html + body) */}
      <body className="min-h-full flex flex-col bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ModalProvider>{children}</ModalProvider>

        <Analytics />

        <Script
          id="google-ads-gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18344445987"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18344445987');`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
        </Script>
      </body>
    </html>
  );
}
