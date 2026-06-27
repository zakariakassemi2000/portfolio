import type { Metadata } from "next";
import { buildMetadata, pick } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/contact",
    title: pick(locale, {
      en: "Contact Zakaria Kassemi — Data Scientist & AI Engineer",
      fr: "Contacter Zakaria Kassemi — Data Scientist & Ingénieur IA",
      ar: "تواصل مع زكرياء قاسمي — مهندس بيانات وذكاء اصطناعي",
    }),
    description: pick(locale, {
      en: "Get in touch with Zakaria Kassemi for Data Science and AI/ML engineering roles, freelance machine learning projects, AI automation, and consulting. Based in Morocco, available worldwide and remote.",
      fr: "Contactez Zakaria Kassemi pour des postes en Data Science et IA/ML, des projets freelance de machine learning, l'automatisation IA et du conseil. Basé au Maroc, disponible à distance partout dans le monde.",
      ar: "تواصل مع زكرياء قاسمي لوظائف هندسة البيانات والذكاء الاصطناعي، ومشاريع التعلم الآلي الحرة، وأتمتة الذكاء الاصطناعي والاستشارات. مقيم في المغرب ومتاح للعمل عن بُعد.",
    }),
    keywords: [
      "contact AI engineer",
      "hire ML engineer Morocco",
      "freelance machine learning",
      "AI consulting Morocco",
      "Zakaria Kassemi contact",
    ],
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
