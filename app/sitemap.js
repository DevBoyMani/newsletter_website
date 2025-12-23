export default function sitemap() {
  const baseUrl = "https://houseofsummary.com";

  /* -----------------------
     Main static pages
  ------------------------ */
  const mainPages = [
    "about",
    "advertise",
    "readers",
    "careers",
    "contact",
    "analytics",
    "privacy-policy",
    "terms-of-use",
    "cookie-policy",
    "refund-policy",
  ];

  const mainPagesUrl = mainPages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  /* -----------------------
     Careers pages (dynamic)
  ------------------------ */
  const careerSlugs = [
    "marketing-social",
    "python-developer",
    "content-writer-london-summary",
    "seo-manager",
    "head-of-sales",
    "legal-compliance-officer",
    "brand-partnerships-manager",
    "video-editor",
    "assistant-to-the-coo",
  ];

  const careerPagesUrl = careerSlugs.map((slug) => ({
    url: `${baseUrl}/careers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /* -----------------------
     Final sitemap
  ------------------------ */
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...mainPagesUrl,
    ...careerPagesUrl,
  ];
}
