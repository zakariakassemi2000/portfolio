import type { Project } from './types';

export const projectsPart2: Project[] = [
  {
    id: "legal-assistant",
    title: "Moroccan Legal Assistant — Custom RAG Chatbot",
    titleFr: "Assistant Juridique Marocain — Chatbot RAG Personnalisé",
    titleAr: "المساعد القانوني المغربي — روبوت محادثة RAG مخصص",
    description: "An innovative legal AI assistant leveraging RAG (Retrieval-Augmented Generation) to provide personalized legal guidance based on Moroccan law. Covers 5+ legislative corpuses with document ingestion, vector retrieval (FAISS), and context-aware response generation.",
    descriptionFr: "Une application innovante exploitant la technologie RAG (Retrieval-Augmented Generation) pour fournir des conseils et un accompagnement juridiques personnalisés basés sur le droit marocain. Couvre plus de 5 corpus législatifs.",
    descriptionAr: "تطبيق مبتكر يعتمد على تقنية RAG لتقديم استشارات وتوجيهات قانونية مخصصة بناءً على القانون المغربي، يغطي أكثر من 5 مجموعات تشريعية مع استرجاع متجهي دلالي.",
    longDescription: `**Moroccan Legal Assistant** is a specialized legal AI assistant powered by Retrieval-Augmented Generation (RAG) to provide contextual advice aligned with Moroccan law.

**Key Technical Details:**
- **Moroccan Law Coverage**: Ingests and indexes over 5 legislative corpuses (Family Code, Penal Code, Labor Law, etc.).
- **RAG Pipeline**: End-to-end processing pipeline including document chunking, semantic vectorization using FAISS, relevant snippet retrieval, and structured response generation.
- **Accurate Grounding**: Restricts generation to retrieved contexts to eliminate hallucinations of legal statutes.`,
    longDescriptionFr: `**Assistant Juridique Marocain** est un outil innovant exploitant la technologie RAG (Retrieval-Augmented Generation) pour fournir des conseils juridiques conformes au droit marocain.

**Détails Techniques :**
- **Couverture du Droit Marocain** : Ingestion et indexation de plus de 5 corpus législatifs clés (Code de la famille, Code pénal, Droit du travail, etc.).
- **Pipeline RAG End-to-End** : Ingestion des documents juridiques ➔ Vectorisation FAISS ➔ Récupération sémantique ➔ Génération de réponses contextualisées.
- **Anti-Hallucination** : Limite la génération de texte aux articles de loi extraits pour garantir la conformité juridique.`,
    longDescriptionAr: `**المساعد القانوني المغربي** هو تطبيق مبتكر يستعين بتقنية RAG لتقديم نصائح واستشارات قانونية متوافقة تماماً مع القانون المغربي.

**المزايا التقنية:**
- **تغطية تشريعية واسعة**: استيراد وفهرسة أكثر من 5 مجموعات قانونية مغربية (مدونة الأسرة، القانون الجنائي، مدونة الشغل، إلخ).
- **خط معالجة RAG متكامل**: استيراد النصوص ➔ تحويلها لمتجهات عبر FAISS ➔ استرجاع دلالي سياقي ➔ توليد إجابات دقيقة وموثقة.
- **الحد من الهلوسة**: ربط الإجابات بالنصوص القانونية المسترجعة فقط لضمان الموثوقية والدقة.`,
    category: ["nlp", "genai"],
    tags: ["RAG", "LangChain", "FAISS", "Legal Tech", "Moroccan Law", "Python"],
    githubUrl: "https://github.com/zakariakassemi2000/LegalAssistant",
    featured: true,
    metrics: "5+ Legislative Corpuses Ingested, FAISS Semantic Ingestion",
    techStack: ["Python", "LangChain", "FAISS", "HuggingFace", "OpenAI API"]
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection — Medical Computer Vision",
    titleFr: "Détection de Tumeurs Cérébrales — Vision par Ordinateur Médicale",
    titleAr: "الكشف عن أورام الدماغ — الرؤية الحاسوبية الطبية",
    description: "A Deep Learning medical imaging system for automated brain tumor classification from MRI scans. Reached over 95% accuracy in 4-class multi-class classification, featuring data preprocessing, augmentation, and Grad-CAM explainability heatmaps.",
    descriptionFr: "Un système de Deep Learning appliqué à l'imagerie médicale pour la classification automatique de tumeurs cérébrales à partir d'IRM. Atteint plus de 95% de précision sur 4 classes avec heatmaps Grad-CAM.",
    descriptionAr: "نظام تعلم عميق للصور الطبية لتصنيف أورام الدماغ تلقائياً من صور الرنين المغناطيسي، حقق دقة تتجاوز 95% في تصنيف 4 فئات مع خرائط Grad-CAM التفسيرية.",
    longDescription: `**Brain Tumor Detection** is an explainable deep learning system designed for the automatic classification of brain tumors from MRI scans.

**Key Technical Details:**
- **High Classification Accuracy**: Reached over **95% accuracy** on 4 different classes of MRI scans (glioma, meningioma, pituitary tumor, and no tumor).
- **Computer Vision Pipeline**: Custom preprocessing, data augmentation (OpenCV, Albumentations), model training (TensorFlow/Keras), and validation.
- **Grad-CAM Explainability**: Generates visual heatmaps to highlight the exact regions the CNN model focused on for classification, supporting clinicians.`,
    longDescriptionFr: `**Détection de Tumeurs Cérébrales** est un système de Deep Learning explicable conçu pour classer automatiquement les tumeurs cérébrales à partir d'images IRM.

**Détails Techniques :**
- **Haute Précision** : Atteint plus de **95% de précision** sur 4 classes de tumeurs cérébrales (gliome, méningiome, tumeur pituitaire et absence de tumeur).
- **Pipeline de Vision** : Prétraitement, augmentation des données (OpenCV), entraînement (TensorFlow/Keras) et inférence.
- **Explicabilité Grad-CAM** : Génère des cartes thermiques d'explicabilité pour mettre en évidence les zones sur lesquelles le modèle CNN a fondé sa décision.`,
    longDescriptionAr: `**الكشف عن أورام الدماغ** هو نظام تعلم عميق طبي مصمم لتصنيف أورام الدماغ تلقائياً وبدقة من صور الرنين المغناطيسي (MRI).

**المزايا التقنية:**
- **دقة تصنيف عالية**: حقق دقة تتجاوز **95%** في تصنيف 4 فئات (ورم دبقي، ورم سحائي، ورم نخامي، وغياب الأورام).
- **معالجة الصور**: معالجة مسبقة للصور، تكبير البيانات (OpenCV)، تدريب النماذج (TensorFlow/Keras) والتحقق.
- **خرائط Grad-CAM التفسيرية**: توليد خرائط حرارية لتوضيح الأجزاء التي ركز عليها النموذج التلافيفي (CNN) لاتخاذ القرار.`,
    category: ["cv", "medical"],
    tags: ["Deep Learning", "CNN", "TensorFlow", "Medical Imaging", "OpenCV", "Explainable AI"],
    githubUrl: "https://github.com/zakariakassemi2000/Detection-Brain-Tumors",
    featured: true,
    metrics: "95%+ Classification Accuracy, 4-Class Classification",
    techStack: ["TensorFlow", "Keras", "OpenCV", "Python", "Grad-CAM"]
  },
  {
    id: "don-du-sang",
    title: "Don Du Sang — Blood Donation Management Platform",
    titleFr: "Don Du Sang — Plateforme de Gestion des Dons de Sang",
    titleAr: "تبرع بالدم — منصة إدارة التبرع بالدم بالمغرب",
    description: "A modern web platform optimizing blood donation management in Morocco. Connects donors, recipients, blood banks, and hospitals in real-time with live inventory tracking and analytical dashboards.",
    descriptionFr: "Une application innovante visant à moderniser et optimiser la gestion des dons de sang au Maroc en facilitant la mise en relation entre donneurs, receveurs, banques de sang et hôpitaux, avec tableaux de bord analytiques.",
    descriptionAr: "منصة ويب لتحديث وتحسين إدارة التبرع بالدم في المغرب، تسهل عملية الربط بين المتبرعين، والمحتاجين، وبنوك الدم، والمستشفيات مع تتبع المخزون في الوقت الفعلي.",
    longDescription: `**Don Du Sang** is an innovative web application aimed at modernizing and optimizing blood donation management in Morocco.

**Key Technical Details:**
- **Real-Time Logistics**: Connects donors, recipients, blood banks, and hospitals to query real-time stock levels of blood types.
- **Interactive Dashboards**: Deployed custom analytics dashboards utilizing Chart.js to help staff visualize donation trends.
- **Database Architecture**: Relies on a robust database to ensure secure tracking of donor records, eligibility, and requests.`,
    longDescriptionFr: `**Don Du Sang** est une application web innovante visant à moderniser et optimiser la gestion des dons de sang au Maroc.

**Détails Techniques :**
- **Logistique en Temps Réel** : Facilite la mise en relation entre donneurs, receveurs, banques de sang et hôpitaux pour suivre le stock par groupe sanguin en temps réel.
- **Tableaux de Bord** : Tableaux de bord dynamiques (Chart.js) permettant au personnel médical de piloter les tendances de dons de sang.
- **Base de Données Robuste** : Gestion sécurisée des dossiers des donneurs, de l'éligibilité et des demandes de transfusion.`,
    longDescriptionAr: `**تبرع بالدم** هو تطبيق ويب مبتكر يهدف إلى تحديث وتحسين عملية إدارة وتوزيع التبرع بالدم في المغرب.

**المزايا التقنية:**
- **تتبع لوجستي في الوقت الفعلي**: تسهيل التواصل والربط الفوري بين المتبرعين، والمستفيدين، وبنوك الدم، والمستشفيات.
- **لوحات تحكم تفاعلية**: إدماج لوحات تحكم مرئية باستخدام Chart.js لمتابعة نسب وجداول التبرع وتنبؤات الطلب.
- **قاعدة بيانات آمنة**: إدارة السجلات الطبية للمتبرعين، وأهليتهم للتبرع، وطلبات التبرع الواردة بأمان.`,
    category: ["backend"],
    tags: ["Web Development", "Chart.js", "Real-time Tracking", "Healthcare Systems", "Database", "JavaScript"],
    githubUrl: "https://github.com/zakariakassemi2000/DonDuSang",
    featured: true,
    metrics: "Real-time Stock Inquiries, Installed in Healthcare Center",
    techStack: ["JavaScript", "HTML5", "CSS3", "Chart.js", "PostgreSQL", "Node.js"]
  }
];
