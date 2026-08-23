import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { WatchlistProvider } from "@/context/WatchlistContext";
import { ContinueWatchingProvider } from "@/context/ContinueWatchingContext";
import { HistoryProvider } from "@/context/HistoryContext";

export const metadata = {
  metadataBase: new URL("https://cineby.gdn"),
  title: "Cineby - Watch Free Movies & TV Shows Online",
  description:
    "Watch free movies and TV shows online in HD on Cineby. Stream the latest films, series and anime for free on Cineby, no signup required.",
  keywords:
    "cineby, cineby.at, watch free movies, free movies to watch online, watch movies online free, free movies streaming, free movies full, free movies download, watch movies hd, movies to watch, plus, ver, assistir,filmes, series, seriados, online, gratis, torrent, legendado, dublados, Series, HD, 720p, 1080p, 4k, cinema",
  authors: [{ name: "Cineby" }],
  creator: "Cineby",
  publisher: "Cineby",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cineby.gdn",
    siteName: "Cineby",
    title: "Cineby - Watch Free Movies & TV Shows Online",
    description:
      "Watch free movies and TV shows online in HD on Cineby. Stream the latest films, series and anime for free on Cineby, no signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cineby - Watch Free Movies & TV Shows Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cineby - Watch Free Movies & TV Shows Online",
    description:
      "Watch free movies and TV shows online in HD on Cineby. Stream the latest films, series and anime for free on Cineby, no signup required.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e50914",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <WatchlistProvider>
          <ContinueWatchingProvider>
            <HistoryProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Header />
            <main
              id="main-content"
              style={{
                minHeight: "100vh",
                paddingTop: "var(--space-1)",
                paddingBottom: "var(--space-0)",
              }}
            >
              {children}
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics />
            </HistoryProvider>
          </ContinueWatchingProvider>
        </WatchlistProvider>
      </body>
    </html>
  );
}
