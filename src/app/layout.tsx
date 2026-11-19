
import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://thefutureaudacious.org";
const siteName = "De Future Audacious";
const siteDescription =
  "De Future Audacious is committed to empowering individuals, developing people and strengthening communities through capacity building, mindset transformation and leadership development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "De Future Audacious | People. Purpose. Impact.",
    template: "%s | De Future Audacious",
  },

  description: siteDescription,

  applicationName: siteName,

  authors: [
    {
      name: "De Future Audacious",
      url: siteUrl,
    },
  ],

  creator: "De Future Audacious",
  publisher: "De Future Audacious",

  keywords: [
    "De Future Audacious",
    "People Purpose Impact",
    "community development",
    "leadership development",
    "youth empowerment",
    "capacity building",
    "mindset transformation",
    "mentorship",
    "personal development",
    "community impact",
    "Africa NGO",
    "non-governmental organisation",
    "social development",
  ],

  category: "Nonprofit Organization",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: "De Future Audacious | People. Purpose. Impact.",
    description: siteDescription,
    images: [
      {
        url: "/De%20Future%20Audacious.png",
        width: 1200,
        height: 630,
        alt: "De Future Audacious. People. Purpose. Impact.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "De Future Audacious | People. Purpose. Impact.",
    description: siteDescription,
    images: ["/De%20Future%20Audacious.png"],
  },

  icons: {
    icon: "/De%20Future%20Audacious.svg",
    shortcut: "/De%20Future%20Audacious.svg",
    apple: "/De%20Future%20Audacious.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
