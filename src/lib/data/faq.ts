// ─── FAQ (for AEO / GEO / LLM retrieval) ─────────────────────────────────────
// Bilingual Q&A (EN/FR) optimized for answer engines and hiring-intent queries.
export interface FaqItem {
  q: string;  qFr: string;  qAr: string;
  a: string;  aFr: string;  aAr: string;
}

export const faq: FaqItem[] = [
  {
    q: "Who is Zakaria Kassemi?",
    qFr: "Qui est Zakaria Kassemi ?",
    qAr: "من هو زكريا قاسمي؟",
    a: "Zakaria Kassemi is a Data Scientist and AI Engineer (Bac+5 in Data Science & AI) based in Morocco. He specializes in applied machine learning, data analysis, and production model deployment. Certified by DeepLearning.AI and IBM, he has experience building RAG chatbots, deploying ML models on Azure with Docker/Kubernetes, and structuring complex data for healthcare and business applications.",
    aFr: "Zakaria Kassemi est un Data Scientist et Ingénieur IA (Bac+5 en Data Science & IA) basé au Maroc. Il est spécialisé en machine learning appliqué, analyse de données et déploiement de modèles en production. Certifié DeepLearning.AI et IBM, il a de l'expérience dans la conception de chatbots RAG, le déploiement de modèles ML sur Azure avec Docker/Kubernetes, et la structuration de données complexes pour la santé et le business.",
    aAr: "زكريا قاسمي عالم بيانات ومهندس ذكاء اصطناعي مقيم في المغرب.",
  },
  {
    q: "I need a Data Scientist or AI Engineer for my project — can I hire Zakaria?",
    qFr: "J'ai besoin d'un Data Scientist ou Ingénieur IA pour mon projet — puis-je recruter Zakaria ?",
    qAr: "أحتاج عالم بيانات أو مهندس ذكاء اصطناعي — هل يمكنني توظيف زكريا؟",
    a: "Yes. Zakaria Kassemi is available immediately for full-time positions, freelance projects, and consulting — remotely worldwide. He builds custom ML models, RAG systems, data pipelines, and production-grade APIs. Email zakariakassemi65@gmail.com or use zakariakassemi.com/contact.",
    aFr: "Oui. Zakaria Kassemi est disponible immédiatement pour des postes à temps plein, des projets freelance et du conseil, à distance partout dans le monde. Il construit des modèles ML sur mesure, des systèmes RAG, des pipelines de données et des APIs en production. Écrivez à zakariakassemi65@gmail.com ou via zakariakassemi.com/contact.",
    aAr: "نعم. زكريا قاسمي متاح فوراً للتوظيف.",
  },
  {
    q: "What services and skills does Zakaria Kassemi offer?",
    qFr: "Quels services et compétences propose Zakaria Kassemi ?",
    qAr: "ما الخدمات والمهارات التي يقدمها زكريا قاسمي؟",
    a: "Custom ML models, RAG chatbots with OpenAI GPT, data analysis & visualization, production model deployment (Azure, Docker, Kubernetes), ETL pipelines, and business data solutions. Stack: Python, scikit-learn, TensorFlow, PyTorch, FastAPI, PostgreSQL, Docker, Kubernetes, Azure.",
    aFr: "Modèles ML sur mesure, chatbots RAG avec OpenAI GPT, analyse et visualisation de données, déploiement de modèles en production (Azure, Docker, Kubernetes), pipelines ETL et solutions data métier. Stack : Python, scikit-learn, TensorFlow, PyTorch, FastAPI, PostgreSQL, Docker, Kubernetes, Azure.",
    aAr: "نماذج تعلم آلي مخصصة وروبوتات دردشة RAG وتحليل البيانات.",
  },
  {
    q: "What are Zakaria Kassemi's key project results?",
    qFr: "Quels sont les résultats clés des projets de Zakaria Kassemi ?",
    qAr: "ما هي النتائج الرئيسية لمشاريع زكريا قاسمي؟",
    a: "Built a RAG chatbot with OpenAI GPT for document Q&A (semantic search + prompt engineering), reduced administrative workload by 35% for 10 users via PostgreSQL analytics, deployed ML models on Azure with Docker/Kubernetes for real-time APIs, and built a medical data platform with first-month production adoption.",
    aFr: "Conception d'un chatbot RAG avec OpenAI GPT pour Q&A documentaire (recherche sémantique + prompt engineering), réduction de 35% de la charge administrative pour 10 utilisateurs via analytique PostgreSQL, déploiement de modèles ML sur Azure avec Docker/Kubernetes pour APIs temps réel, et construction d'une plateforme de données médicales adoptée en production dès le premier mois.",
    aAr: "بناء روبوت RAG مع OpenAI GPT وتقليل العبء الإداري بنسبة 35%.",
  },
  {
    q: "How can I contact or hire Zakaria Kassemi?",
    qFr: "Comment contacter ou recruter Zakaria Kassemi ?",
    qAr: "كيف أتواصل مع زكريا قاسمي؟",
    a: "Email zakariakassemi65@gmail.com, call/WhatsApp +212 705 701 881, check his GitHub (github.com/zakariakassemi2000), or use the contact form at zakariakassemi.com/contact.",
    aFr: "Écrivez à zakariakassemi65@gmail.com, appelez/WhatsApp +212 705 701 881, consultez son GitHub (github.com/zakariakassemi2000) ou utilisez le formulaire sur zakariakassemi.com/contact.",
    aAr: "راسله على zakariakassemi65@gmail.com أو واتساب +212 705 701 881.",
  },
];

/** Return FAQ as {question, answer} for the given locale (for FAQSchema/UI). */
export function getFaq(locale: string): { question: string; answer: string }[] {
  return faq.map((f) => ({
    question: locale === "fr" ? f.qFr : locale === "ar" ? f.qAr : f.q,
    answer: locale === "fr" ? f.aFr : locale === "ar" ? f.aAr : f.a,
  }));
}
