import type { Metadata } from "next";
import "@/styles/globals.scss";
import LayoutPage from "./provider";
import { SITE_NAME } from "@/constants/seo/seo.constants";
import Head from "./Head";
import { inter } from "@/constants/fonts/fonts";

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
      <Head />
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
