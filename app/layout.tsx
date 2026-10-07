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
  title: "Embassy Riverine Villas | Price, Floor Plan, North Bangalore",
  description:
    "Embassy Riverine villas at Embassy Origins, North Bangalore. 217 RERA-approved 4, 4.5 & 5 BHK villas from Rs 14.10 Cr. Get price, floor plan & site visit.",

  keywords: [
    "Embassy Riverine",
    "Embassy Riverine villas",
    "Embassy Riverine price",
    "Embassy Riverine floor plan",
    "Embassy Riverine master plan",
    "Embassy Riverine amenities",
    "Embassy Riverine location",
    "Embassy Riverine RERA number",
    "Embassy Origins",
    "luxury villas in North Bangalore",
    "4 BHK villa for sale near Bangalore airport",
    "5 BHK villa for sale in North Bangalore",
    "villas near Devanahalli airport",
    "villas for sale in Bettahalsur",
    "villas for sale on IVC Road",
    "villas near Yelahanka",
    "Embassy villas in North Bangalore",
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
    title: "Embassy Riverine Villas | Price, Floor Plan, North Bangalore",
    description:
      "Embassy Riverine villas at Embassy Origins, North Bangalore. 217 RERA-approved 4, 4.5 & 5 BHK villas from Rs 14.10 Cr. Get price, floor plan & site visit.",
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
    title: "Embassy Riverine Villas | Price, Floor Plan, North Bangalore",
    description:
      "Embassy Riverine villas at Embassy Origins, North Bangalore. 217 RERA-approved 4, 4.5 & 5 BHK villas from Rs 14.10 Cr. Get price, floor plan & site visit.",
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
