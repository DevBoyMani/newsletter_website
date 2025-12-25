import PolicyClient from "../../../components/policyClient/policyClient";
import { POLICY_SEO } from "../seoConfig";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  const seo = POLICY_SEO[slug];
  if (!seo) {
    return {
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.houseofsummary.com/policy/${slug}`;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical,
    },
  };
}

export default function PolicySlug() {
  return <PolicyClient />;
}
