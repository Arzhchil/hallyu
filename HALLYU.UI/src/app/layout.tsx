import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SFlight = localFont({
  src: "./fonts/SFMono-Light.woff",
  variable: "--font-sf-mono-light",
  weight: "300",
});

const SFregular = localFont({
  src: "./fonts/SFMono-Regular.woff",
  variable: "--font-sf-mono-regular",
  weight: "400",
});
const SFbold = localFont({
  src: "./fonts/SFMono-Bold.woff",
  variable: "--font-sf-mono-bold",
  weight: "700",
});

const SegoiRegular = localFont({
  src: "./fonts/Segoe-UI.woff",
  variable: "--font-segoe-ui-regular",
  weight: "400",
});

const SegoiBold = localFont({
  src: "./fonts/Segoe-UI-Bold.woff",
  variable: "--font-segoe-ui-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "HALLYÜ DANCE STUDIO",
  description: "HALLYÜ - Студия танцев в Казани",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${SFregular.variable} ${SFbold.variable} ${SFlight.variable} ${SegoiRegular.variable} ${SegoiBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
