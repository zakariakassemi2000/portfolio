import { PERSON, SITE_URL, EMAIL, GITHUB_URL } from "@/lib/data";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    alternateName: [],
    jobTitle: ["Data Scientist", "AI Engineer", "Machine Learning Engineer"],
    description: PERSON.description,
    url: SITE_URL,
    mainEntityOfPage: `${SITE_URL}/about`,
    email: EMAIL,
    telephone: "+212705701881",
    image: `${SITE_URL}/og-image.png`,
    sameAs: [GITHUB_URL].filter(Boolean),
    nationality: { "@type": "Country", name: "Morocco" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
    },
    homeLocation: { "@type": "Place", name: "Morocco" },
    knowsLanguage: [
      { "@type": "Language", name: "French" },
      { "@type": "Language", name: "Arabic" },
      { "@type": "Language", name: "English" },
    ],
    worksFor: { "@type": "Organization", name: "Freelance / Independent Data Scientist" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "SUPMTI Rabat" },
      { "@type": "CollegeOrUniversity", name: "SUPMTI Meknès" },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Data Scientist & AI Engineer",
      occupationalCategory: "15-2051.00", // Data Scientists (O*NET)
      skills: "Machine Learning, Deep Learning, RAG, NLP, MLOps, Data Analysis, Python",
    },
    seeks: {
      "@type": "Demand",
      name: "Data Scientist/AI Engineer roles, freelance ML projects, and consulting",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Natural Language Processing",
      "Deep Learning",
      "Generative AI",
      "RAG",
      "MLOps",
      "Large Language Models",
      "PyTorch",
      "TensorFlow",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Engineer in Data Science & AI (Bac+5)",
        credentialCategory: "degree",
        educationalLevel: "Master",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Zakaria Kassemi | Data Scientist & AI Engineer",
    description:
      "Data Scientist & AI Engineer specializing in ML, RAG chatbots, and production deployment. Based in Morocco.",
    author: { "@id": `${SITE_URL}/#person` },
    inLanguage: ["en", "fr"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/en/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  title,
  description,
  slug,
  date,
  tags,
  locale = "en",
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  locale?: string;
}) {
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: date,
    dateModified: date,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    keywords: tags.join(", "),
    image: `${SITE_URL}/og-image.png`,
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Organization entity — strengthens brand/knowledge-graph signals. */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zakaria Kassemi",
    url: SITE_URL,
    email: EMAIL,
    logo: `${SITE_URL}/og-image.png`,
    image: `${SITE_URL}/og-image.png`,
    founder: { "@id": `${SITE_URL}/#person` },
    sameAs: [GITHUB_URL].filter(Boolean),
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressCountry: "MA" },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/** Breadcrumb trail for a page. Pass localized {name, url} items in order. */
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/** ProfilePage wrapper for the About page. */
export function ProfilePageSchema({ url }: { url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/** Generic ItemList (for collection pages like /projects, /blog, /games). */
export function ItemListSchema({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/** LearningResource / Course for a learning topic. */
export function LearningResourceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name,
    description,
    url,
    learningResourceType: "Visual guide",
    educationalLevel: "Beginner to Advanced",
    inLanguage: ["en", "fr"],
    provider: { "@id": `${SITE_URL}/#person` },
    isAccessibleForFree: true,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: "Worldwide",
    serviceType: "AI Engineering",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
