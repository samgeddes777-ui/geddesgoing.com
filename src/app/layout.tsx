import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geddesgoing.com"),
  title: {
    default: "GeddesGoing | AI Strategy & Implementation for Wisconsin Businesses",
    template: "%s | GeddesGoing",
  },
  description:
    "Practical AI consulting for Madison and Wisconsin businesses. We help you identify high-ROI AI opportunities, build custom solutions, and train your team. Book a free discovery call.",
  keywords: [
    "AI consulting",
    "Madison WI",
    "Wisconsin",
    "artificial intelligence",
    "AI strategy",
    "AI implementation",
    "business automation",
    "AI training",
    "machine learning consulting",
    "GeddesGoing",
  ],
  authors: [{ name: "Sam Geddes", url: "https://geddesgoing.com" }],
  creator: "GeddesGoing LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geddesgoing.com",
    siteName: "GeddesGoing",
    title: "GeddesGoing | AI Strategy & Implementation for Wisconsin Businesses",
    description:
      "Practical AI consulting for Madison and Wisconsin businesses. Custom solutions, strategy, and training that drive real results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeddesGoing - AI Consulting for Wisconsin Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeddesGoing | AI Strategy & Implementation for Wisconsin Businesses",
    description:
      "Practical AI consulting for Madison and Wisconsin businesses.",
    creator: "@SamGedd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Analytics placeholder - replace GA_MEASUREMENT_ID with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
            });
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
