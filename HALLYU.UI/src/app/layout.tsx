import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playFair = localFont({
  src: "./fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair-regular",
  weight: "400",
});
const playFairBold = localFont({
  src: "./fonts/PlayfairDisplay-Bold.woff",
  variable: "--font-playfair-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "HALLYÜ",
  description: "HALLYÜ - Kazan dance studion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFair.variable} ${playFairBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

