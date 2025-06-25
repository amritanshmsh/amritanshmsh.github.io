import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";
import { BASE_URL } from "@/util";

export const metadata: Metadata = {
  appleWebApp: {
    title: "Amritansh Mishra",
  },
  applicationName: "Amritansh Mishra",
  authors: [{ name: "Amritansh Mishra", url: "https://github.com/amritanshmsh" }],
  category: "Personal Site",
  creator: "Amritansh Mishra",
  description: "Personal website of Amritansh Mishra.",
  icons: {
    apple: [
      "/apple-touch-icon.png",
      {
        url: "/safari-pinned-tab.svg",
        rel: "mask-icon",
      },
    ],
    other: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "amritanshmsh",
    "Amritansh Mishra",
    "Amritansh",
    "Mishra",
    "Website",
    "Portfolio",
    "Projects",
    "Conatus Bharat",
    "Conatus",
    "Bharat",
    "Education",
  ],
  manifest: "/site.webmanifest",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    description: "Personal website of Amritansh Mishra.",
    siteName: "Amritansh Mishra",
    title: "Amritansh Mishra",
    type: "website",
    url: new URL(BASE_URL),
  },
  other: {
    "msapplication-TileColor": "#e4717a",
  },
  title: {
    default: "Amritansh Mishra",
    template: "%s | Amritansh Mishra",
  },
};

export const viewport = {
  colorScheme: "dark light",
  initialScale: 1,
  minimumScale: 1,
  themeColor: [
    { color: "e4717a" },
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#1c1b22",
    },
  ],
  width: "device-width",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-white bg-gradient-to-br dark:bg-black dark:from-black dark:via-(--charcoal) dark:to-black">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
