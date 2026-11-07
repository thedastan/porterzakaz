import type { Metadata } from "next";
import PricesPage from "@/components/service/prices-page";

export const metadata: Metadata = {
  title: "Цены на портер и грузчиков в Бишкеке",
  description:
    "Цены: грузчики 350 сом/час, вывоз мусора от 1500 сом, грузоперевозки, переезд и сборка мебели — по договорённости.",
  alternates: { canonical: "/ceny" },
};

export default function Page() {
  return <PricesPage />;
}
