// app/careers/[slug]/page.js
import CareersSlugClient from "@/components/careersSlugClient/careersSlugClient";
import { CAREERS_SEO } from "../seoConfig";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  const seo = CAREERS_SEO[slug];
  if (!seo) {
    return {
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.houseofsummary.com/careers/${slug}`;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical,
    },
  };
}

export default function CareersSlug() {
  return <CareersSlugClient />;
}
