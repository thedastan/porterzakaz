import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service/service-page";
import { getService, SERVICES } from "@/constants/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!getService(params.slug)) notFound();
  return <ServicePage slug={params.slug} />;
}
