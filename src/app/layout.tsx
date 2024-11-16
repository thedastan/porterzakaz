import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import LayoutPage from "./provider";
import { SITE_NAME } from "@/constants/seo/seo.constants";


export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Быстрая услуга портера!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutPage> 
        {children}
        </LayoutPage>
        </body>
    </html>
  );
}
