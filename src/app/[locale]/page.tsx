import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata, pick } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsSection from "@/components/sections/SkillsSection";
import GamesTeaser from "@/components/sections/GamesTeaser";
import ServicesCTA from "@/components/sections/ServicesCTA";
import FAQSection from "@/components/sections/FAQSection";
import { FAQSchema } from "@/components/seo/JsonLd";
import { getFaq } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "",
    title: pick(locale, {
      en: "Zakaria Kassemi — Data Scientist & AI Engineer",
      fr: "Zakaria Kassemi — Data Scientist & Ingénieur IA",
    }),
    description: pick(locale, {
      en: "Data Scientist & AI Engineer specializing in machine learning, RAG chatbots, data analysis, and production model deployment. Based in Morocco — available immediately worldwide.",
      fr: "Data Scientist & Ingénieur IA spécialisé en machine learning, chatbots RAG, analyse de données et déploiement de modèles en production. Basé au Maroc — disponible immédiatement.",
    }),
    keywords: [
      "Data Scientist",
      "AI Engineer",
      "Machine Learning",
      "RAG",
      "NLP",
      "Deep Learning",
      "MLOps",
      "Morocco",
      "Zakaria Kassemi",
    ],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FAQSchema items={getFaq(locale)} />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <SkillsSection />
      <GamesTeaser locale={locale} />
      <ServicesCTA />
      <FAQSection locale={locale} />
    </>
  );
}
