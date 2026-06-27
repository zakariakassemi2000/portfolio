import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const T: Record<string, { title: string; sub: string; primary: string; secondary: string }> = {
  en: {
    title: "Need a Data Scientist or AI Engineer?",
    sub: "I build custom ML models, RAG chatbots, data pipelines, and production APIs — from analysis to deployment.",
    primary: "Get in touch",
    secondary: "View services",
  },
  fr: {
    title: "Besoin d'un Data Scientist ou Ingénieur IA ?",
    sub: "Je construis des modèles ML sur mesure, des chatbots RAG, des pipelines de données et des APIs en production — de l'analyse au déploiement.",
    primary: "Me contacter",
    secondary: "Voir les services",
  },
};

/** Reusable, localized hire-me call to action. */
export default function HireCTA({ locale }: { locale: string }) {
  const t = T[locale] ?? T.en;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 text-center"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--primary) 12%, transparent), color-mix(in srgb, var(--secondary) 12%, transparent))",
          }}
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.sub}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all group"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Mail size={16} />
              {t.primary}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all"
              style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
