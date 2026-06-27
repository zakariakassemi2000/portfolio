import type { Metadata } from "next";
import { buildMetadata, pick } from "@/lib/seo";
import { projects, SITE_URL } from "@/lib/data";
import { BreadcrumbSchema, ItemListSchema } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/projects",
    title: pick(locale, {
      en: "AI & Machine Learning Projects Portfolio — Zakaria Kassemi",
      fr: "Portfolio de projets IA & Machine Learning — Zakaria Kassemi",
      ar: "معرض مشاريع الذكاء الاصطناعي والتعلم الآلي — زكرياء قاسمي",
    }),
    description: pick(locale, {
      en: "Production-grade AI/ML projects by Zakaria Kassemi across medical AI, multi-agent systems, and generative AI — fully documented with code and results.",
      fr: "Projets IA/ML de niveau production par Zakaria Kassemi : IA médicale, systèmes multi-agents, et IA générative — documentés avec code et résultats.",
      ar: "مشاريع ذكاء اصطناعي وتعلم آلي بمستوى إنتاجي من زكرياء قاسمي تغطي الذكاء الاصطناعي الطبي، الأنظمة متعددة الوكلاء، والذكاء الاصطناعي التوليدي — موثقة بالكود والنتائج.",
    }),
    keywords: [
      "machine learning projects",
      "AI portfolio",
      "computer vision projects",
      "NLP projects",
      "Kaggle projects",
      "Zakaria Kassemi",
    ],
  });
}

export default async function ProjectsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home", url: `${SITE_URL}/${locale}` },
          { name: locale === "fr" ? "Projets" : locale === "ar" ? "المشاريع" : "Projects", url: `${SITE_URL}/${locale}/projects` },
        ]}
      />
      <ItemListSchema
        name="AI & Machine Learning projects"
        items={projects.slice(0, 30).map((p) => ({
          name: locale === "fr" ? (p.titleFr ?? p.title) : locale === "ar" ? (p.titleAr ?? p.title) : p.title,
          url: `${SITE_URL}/${locale}/projects/${p.id}`,
        }))}
      />
      {children}
    </>
  );
}
