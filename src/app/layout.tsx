import type { Metadata } from "next";
import "@/styles/globals.scss";
import LayoutPage from "./provider";
import { SITE_NAME } from "@/constants/seo/seo.constants";
import { inter } from "@/constants/fonts/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Быстрая услуга портера!",
  themeColor: "#ffffff",
  verification: {
    google: "fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY",
  },
  openGraph: {
    title: SITE_NAME,
    description: "Быстрая услуга портера!",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FT4V71V5R5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FT4V71V5R5');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
