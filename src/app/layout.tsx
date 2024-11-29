import type { Metadata } from "next";
import { ContextProvider } from "@/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Settla",
  description: "Generated by BOSS Global",
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
