import type { Metadata } from "next";
import { ContextProvider } from "@/provider";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Settla - Cross-Border Payments for the African Diaspora & Minority Businesses",
  description:
    "Empowering the African Diaspora and minority-owned businesses with secure, fast, and transparent cross-border payment solutions. Connect to global opportunities, send, convert, and grow with Settla.",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  keywords: [
    "cross-border payments",
    "African Diaspora payments",
    "minority-owned businesses",
    "global payments",
    "secure payments",
    "transparent transactions",
    "currency conversion",
    "financial growth",
    "community-driven payments",
    "Settla",
  ],
  authors: [
    {
      name: "Settla Team",
      // url: "https://www.settla.com",
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title:
      "Settla - Cross-Border Payments for the African Diaspora & Minority Businesses",
    description:
      "From the heart of the African Diaspora to the world stage, Settla strengthens communities by fueling financial growth and shared success with fast, secure, and transparent payment solutions.",
    url: "https://www.settla.com",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Settla - Empowering Global Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Settla - Cross-Border Payments for the African Diaspora",
    description:
      "Secure, fast, and transparent payment solutions for the African Diaspora and minority-owned businesses. Empower your community with Settla.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
