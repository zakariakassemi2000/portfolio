import type { Project } from './types';

export const projectsPart1: Project[] = [
  {
    id: "shifaa",
    title: "SHIFAA MAROC — Arabic Medical Assistant & Mental Support",
    titleFr: "SHIFAA MAROC — Assistant Médical & Soutien Psychologique",
    titleAr: "شفاء المغرب — مساعد طبي ذكي ودعم نفسي",
    description: "An intelligent, secure, and adapted AI medical assistant tailored for Moroccan and Arabic-speaking users. Features multimodal CNN modules (EfficientNet/DenseNet for X-Ray and dermatology) and a hybrid RAG pipeline with a custom distress detection model.",
    descriptionFr: "Un assistant médical intelligent, sécurisé et adapté aux besoins des Marocains et des arabophones. Intègre des diagnostics d'imagerie par CNN et un pipeline RAG médical hybride avec détection automatique de détresse psychologique.",
    descriptionAr: "مساعد طبي ذكي، آمن وملائم لاحتياجات المغاربة والناطقين باللغة العربية. يتضمن وحدات تشخيص الصور الطبية (CNN) وخط أنابيب RAG طبي هجين مع الكشف التلقائي عن الاضطراب النفسي.",
    longDescription: `**SHIFAA MAROC** is a comprehensive medical AI assistant designed specifically for Arabic-speaking and Moroccan patients and doctors.

**Core Components:**
- **Multimodal Diagnoses**: Utilizes custom CNN architectures (EfficientNet-B3 for dermatology, DenseNet-121 for Chest X-Ray, ResNet-50 + MONAI for Brain MRI, and Inception-V3 for mammography density) to process medical imaging, reaching over **90% accuracy**.
- **SHIFA-Mental Support**: An integrated mental health module featuring distress detection using clinical scoring (PHQ-9) and keyword matching. Under the hood, it utilizes fine-tuned Arabic medical transformers (Jais-13B, AraBERT) to provide Cognitive Behavioral Therapy (CBT) support and crisis hotlines routing.
- **Hybrid RAG Pipeline**: Combines FAISS (dense embeddings) and BM25 (lexical) with Reciprocal Rank Fusion (RRF) and cross-encoder reranking to answer questions across 16 medical domains in under 2 seconds.
- **Localization**: Tailored with verified Moroccan emergency hotlines, Arab culture nuances, and a beautiful dark-mode RTL layout.`,
    longDescriptionFr: `**SHIFAA MAROC** est un assistant médical intelligent et souverain conçu spécifiquement pour le contexte culturel et linguistique marocain et arabophone.

**Fonctionnalités Clés :**
- **Diagnostics Multimodaux** : Utilise des architectures CNN avancées (EfficientNet-B3 pour la dermatologie, DenseNet-121 pour les radiographies du thorax, ResNet-50 avec MONAI pour les IRM cérébrales, Inception-V3 pour la mammographie) avec explicabilité Grad-CAM (précision >90%).
- **Module SHIFA-Mental** : Support psychologique et détection automatique de détresse en ligne basé sur l'échelle clinique PHQ-9. Intègre des modèles affinés comme Jais-13B et AraBERT pour fournir des conseils en thérapie comportementale et cognitive (TCC) et un routage vers les numéros d'urgence marocains.
- **RAG Hybride Réactif** : Combinaison de recherche dense (FAISS) et recherche lexicale (BM25) avec fusion RRF et réordonnancement (cross-encoder) sur 16 spécialités médicales.
- **Interface Intuitive** : Interface web Streamlit en mode RTL (droite à gauche) avec un design dark mode premium.`,
    longDescriptionAr: `**شفاء المغرب** هو نظام طبي متكامل للذكاء الاصطناعي موجه خصيصاً للمستخدمين المغاربة والناطقين بالعربية.

**أهم المميزات:**
- **تشخيص طبي متعدد الوسائط**: يعتمد على شبكات تلافيفية متقدمة (CNN) مثل EfficientNet-B3 لأمراض الجلد، و DenseNet-121 للأشعة السينية للصدر، و ResNet-50 مع MONAI للرنين المغناطيسي للدماغ لدعم اتخاذ القرار الطبي بدقة تتجاوز 90%.
- **نظام الدعم النفسي (شفاء-نفس)**: محرك للكشف التلقائي عن مستويات القلق والاضطراب النفسي باستخدام مقياس PHQ-9 المعتمد إكلينيكياً، مع تقديم دعم قائم على العلاج المعرفي السلوكي (CBT) عبر نماذج معالجة لغة عربية مضبوطة بدقة مثل Jais-13B و AraBERT.
- **توجيه الطوارئ**: ربط مباشر وفوري بأرقام المساعدة الاجتماعية والطبية المغربية المعتمدة في حالات الأزمات.
- **RAG طبي هجين**: يدمج البحث الدلالي المتجهي (FAISS) مع البحث النصي (BM25) للحصول على إجابات طبية موثوقة في أقل من ثانيتين.`,
    category: ["medical", "nlp", "genai"],
    tags: ["Backend Python", "Vision: PyTorch, MONAI", "RAG: FAISS, BM25", "Déploiement Docker", "Frontend Streamlit"],
    githubUrl: "https://github.com/zakariakassemi2000/chatBot-Arab",
    featured: true,
    metrics: "90%+ Accuracy, <2s Latency",
    techStack: ["Backend Python", "Vision (PyTorch, MONAI)", "RAG (FAISS, BM25)", "Déploiement Docker", "Frontend Streamlit"]
  },
  {
    id: "agentic-swarm",
    title: "Synapse Studio V3 — Offline Agentic Swarm",
    titleFr: "Synapse Studio V3 — Agentic Swarm Asynchrone",
    titleAr: "Synapse Studio V3 — سرب وكلاء الذكاء الاصطناعي",
    description: "An advanced asynchronous multi-agent platform running 100% offline. Multiple specialized AI agents (Strategist, Architect, Engineer, Critic) collaborate and debate concurrently in real-time, managed by a mathematical cosine-similarity consensus engine.",
    descriptionFr: "Plateforme avancée de débat asynchrone multi-agents fonctionnant 100% hors-ligne. Plusieurs agents spécialisés (Architecte, Stratège, Ingénieur, Critique) collaborent en parallèle avec un moteur de convergence basé sur la similarité cosinus.",
    descriptionAr: "منصة متقدمة للنقاش غير المتزامن متعدد الوكلاء تعمل بنسبة 100% دون اتصال بالإنترنت. يتعاون وكلاء ذكاء اصطناعي متخصصون (استراتيجي، مهندس، معماري، ناقد) بالتوازي مع محرك تقارب رياضي يعتمد على تشابه جيب التمام.",
    longDescription: `**Synapse Studio V3** is a cutting-edge offline multi-agent platform designed for concurrent collaborative problem solving and software architecture design.

**Key Innovations:**
- **Asynchronous Debate Engine**: Leverages Python's \`asyncio\` to execute specialized AI agents in parallel, bypassing the limitations of traditional sequential execution (such as standard LangGraph patterns).
- **Mathematical Consensus Engine**: Integrates ChromaDB/MiniLM embeddings and scikit-learn to measure semantic consensus distance (Cosine Similarity) between agent responses. The debate automatically converges and terminates once the threshold (e.g. 0.88) is achieved.
- **Human-in-the-Loop Interaction**: A full-duplex WebSocket architecture allows real-time human intervention ("Slack-style") to steer the debate or correct agent instructions on the fly.
- **Cognitive Diversity**: Features custom system prompts for 7 specialized roles: Strategist, Architect, Engineer, Critic, Product Owner, Business Expert, and Moderator.
- **Tech Stack**: Powered by Python, FastAPI, Streamlit, WebSockets, ChromaDB, and local LLMs (via Groq/OpenRouter/Local Inference APIs).`,
    longDescriptionFr: `**Synapse Studio V3** est une plateforme de pointe pour l'orchestration de systèmes multi-agents asynchrones et concurrents, optimisée pour la résolution de problèmes complexes et le design logiciel.

**Points Forts :**
- **Moteur de Débat Concurrent** : Utilise \`asyncio.gather\` pour faire réfléchir et interagir les agents en parallèle plutôt qu'en séquence, accélérant grandement la génération de solutions d'architecture ou de code.
- **Moteur de Consensus Mathématique** : Calcule en continu la distance sémantique (similarité cosinus) entre les propositions des agents via des plongements de mots (embeddings ChromaDB/MiniLM) et scikit-learn. Le débat converge et s'arrête automatiquement dès que le consensus est établi.
- **Human-in-the-Loop (Intervention Humaine)** : Architecture WebSocket bidirectionnelle permettant à l'utilisateur d'intervenir à la façon d'un canal "Slack" pour réorienter le débat des agents à tout moment.
- **Diversité Cognitive** : Rôles experts configurés avec des prompts personnalisés : Stratège, Architecte, Ingénieur, Critique, Product Owner, Business et Modérateur.`,
    longDescriptionAr: `**Synapse Studio V3** هي منصة متطورة لإدارة وتنسيق نقاشات وكلاء الذكاء الاصطناعي المتعددة بشكل متزامن وغير متصل بالإنترنت.

**المزايا التقنية:**
- **محرك نقاش متزامن**: يعتمد على \`asyncio\` لتجاوز العقبات المتتالية التقليدية، مما يسمح للوكلاء بالتفكير والعمل معاً في نفس الوقت.
- **تقارب رياضي ذكي**: يتم حساب مستوى التوافق الإدراك الدلالي (Cosine Similarity) بين إجابات الوكلاء باستمرار باستخدام ChromaDB و scikit-learn. تنتهي حلقة النقاش تلقائياً عند الوصول إلى الحد المحدد (مثلاً 0.88).
- **التدخل البشري المباشر (Human-in-the-Loop)**: استخدام اتصال WebSockets ثنائي الاتجاه يسمح للمستخدم بالتدخل المباشر وتصحيح مسار الوكلاء أثناء جلسة النقاش.
- **التنوع المعرفي**: يضم 7 أدوار متخصصة: المعماري، الاستراتيجي، المبرمج، الناقد، مدير المنتج، مستشار الأعمال، والمنظم.`,
    category: ["agents", "genai"],
    tags: ["Multi-Agent System", "Asynchronous Systems", "FastAPI WebSockets", "Consensus Engine", "ChromaDB", "Streamlit"],
    githubUrl: "https://github.com/zakariakassemi2000/Agentic-Swarm_multi-agent",
    featured: true,
    metrics: "Cosine Similarity Consensus, Real-time WebSocket Streaming",
    techStack: ["Python", "FastAPI", "Streamlit", "asyncio", "ChromaDB", "scikit-learn", "WebSockets"]
  },
  {
    id: "knowledge-explorer",
    title: "AI Knowledge Explorer",
    titleFr: "Explorateur de Connaissances AI",
    titleAr: "مستكشف المعرفة بالذكاء الاصطناعي",
    description: "An interactive AI-powered web app utilizing the Google Gemini API to discover, test, and deepen knowledge on any academic or scientific topic. Features smart voice/text search, a 3-level adaptive evaluation system (🟢 Easy QCM, 🟠 Medium True/False, 🔴 Hard open question with semantic response assessment), and an analytical progress dashboard.",
    descriptionFr: "Une application web interactive alimentée par l’API Google Gemini, conçue pour aider à découvrir, tester et approfondir ses connaissances sur n'importe quel sujet scientifique. Intègre une recherche intelligente vocale/textuelle, un système d'évaluation adaptative à 3 niveaux (🟢 Easy QCM, 🟠 Medium True/False, 🔴 Hard question ouverte avec analyse sémantique de la réponse), et un dashboard d'apprentissage autonome.",
    descriptionAr: "تطبيق ويب تفاعلي مدعوم بالذكاء الاصطناعي (واجهة برمجة تطبيقات Google Gemini) لمساعدة المستخدمين على استكشاف واختبار وتعميق معرفتهم في أي موضوع علمي أو أكاديمي. يتميز بالبحث الذكي الصوتي والكتابي، ونظام تقييم تكيفي من 3 مستويات (🟢 سهل QCM، 🟠 متوسط صح/خطأ، 🔴 صعب سؤال مفتوح مع تحليل دلالي للإجابة)، ولوحة تحكم للمتابعة.",
    longDescription: `**AI Knowledge Explorer** is an interactive web application powered by AI (Google Gemini API), designed to help users discover, test, and deepen their understanding of any scientific or academic topic.

Imagine a smart self-evaluation tool... that is virtually infinite.

**How does it work?**
- **Smart Search (Voice or Text)**: Simply enter any topic of interest (e.g., Quantum Physics, Ancient Roman History, Artificial Intelligence). Voice recognition is integrated for fluid, natural interaction.
- **AI-Powered Concept Generation**: Using Google Gemini, the app generates 6 deep and diverse concepts covering basics, advanced technical aspects, recent discoveries, and cross-disciplinary connections.
- **3-Level Adaptive Evaluation (Interactive Cards)**: For each concept, the user faces a progressive assessment:
  - 🟢 **Easy (Multiple Choice)**: To establish foundational knowledge.
  - 🟠 **Medium (True/False)**: To validate specific details.
  - 🔴 **Hard (Open-ended)**: The user writes their own explanation, and the AI performs a semantic evaluation to grade their response accuracy (0% to 100%).
- **Analytics Dashboard**: Track overall progress, success rates by level, and export a complete PDF progression report.

**Why this project?**
It is far more than a simple quiz. It is a engine for autonomous learning that fosters curiosity through cognitive progression and direct machine-to-human semantic assessment.`,
    longDescriptionFr: `**Explorateur de Connaissances AI** est une application web interactive alimentée par l'Intelligence Artificielle (API Google Gemini), conçue pour aider les utilisateurs à découvrir, tester et approfondir leurs connaissances sur n'importe quel sujet scientifique ou académique.

Imaginez un outil d'auto-évaluation intelligent... et infini.

**Comment fonctionne l’application ?**
- **Recherche intelligente (vocale ou textuelle)** : L'utilisateur saisit un sujet qui l'intéresse (ex : Physique quantique, Histoire de la Rome antique, Intelligence Artificielle, etc.). L’application intègre également la reconnaissance vocale pour une interaction naturelle et fluide.
- **Génération de concepts via l'IA** : Grâce à Google Gemini, l'application génère automatiquement 6 concepts profonds et variés couvrant les bases, les aspects techniques avancés, les découvertes récentes, et les liens interdisciplinaires.
- **Évaluation adaptative en 3 niveaux (Système de cartes interactives)** : Pour chaque concept, l'utilisateur fait face à une question d'évaluation à 3 niveaux de difficulté :
  - 🟢 **Facile (QCM)** : Pour poser les bases.
  - 🟠 **Moyen (Vrai/Faux)** : Pour valider les détails.
  - 🔴 **Difficile (Question ouverte)** : L'utilisateur formule sa propre réponse, et l'IA analyse sémantiquement la pertinence de son explication pour lui attribuer un score de précision (de 0 à 100%).
- **Tableau de bord et analytique** : L'utilisateur suit sa progression globale et son taux de réussite par niveau, avec la possibilité d'exporter un rapport de progression.

**Pourquoi ce projet ?**
Ce n'est pas seulement un quiz. C'est un moteur d'apprentissage autonome. Il stimule la curiosité par la progression cognitive et l'évaluation sémantique directe de la pensée humaine par la machine.`,
    longDescriptionAr: `**مستكشف المعرفة بالذكاء الاصطناعي** هو تطبيق ويب تفاعلي مبتكر مدعوم بـ (Google Gemini API)، صُمم لمساعدة المستخدمين على استكشاف واختبار وتعميق معارفهم في أي موضوع علمي أو أكاديمي.

تخيل أداة تقييم ذاتي ذكية... ولانهائية.

**كيف يعمل التطبيق؟**
- **البحث الذكي (الصوتي أو النصي)**: يقوم المستخدم بإدخال الموضوع الذي يثير اهتمامه (مثل: الفيزياء الكمية، تاريخ روما القديمة، الذكاء الاصطناعي، إلخ) مع دعم كامل للتعرف على الصوت.
- **توليد مفاهيم ذكي**: بفضل Google Gemini، يقدم التطبيق تلقائياً 6 مفاهيم عميقة ومتنوعة تغطي الأساسيات، الجوانب التقنية المتقدمة، الاكتشافات الحديثة، والروابط بين التخصصات.
- **تقييم تكيفي من 3 مستويات (نظام بطاقات تفاعلية)**: لكل مفهوم، يواجه المستخدم تقييماً تدريجياً:
  - 🟢 **سهل (أسئلة متعددة الاختيارات - QCM)**: لتثبيت الأساسيات.
  - 🟠 **متوسط (صح / خطأ)**: للتحقق من التفاصيل الدقيقة.
  - 🔴 **صعب (سؤال مفتوح)**: يقوم المستخدم بصياغة الإجابة بنفسه، ويقوم الذكاء الاصطناعي بتحليل الإجابة دلالياً لتحديد دقة الشرح (من 0 إلى 100%).
- **لوحة متابعة وتحليلات**: تتبع التقدم المحرز ونسبة النجاح لكل مستوى مع إمكانية تحميل تقرير تقدم قابل للتصدير.

**لماذا هذا المشروع؟**
إنه ليس مجرد اختبار عادي، بل محرك للتعلم الذاتي يحفز الفضول المعرفي عبر التقييم الدلالي المباشر للأفكار البشرية بواسطة الآلة.`,
    category: ["nlp", "genai"],
    tags: ["Generative AI", "Adaptive Learning", "Speech Recognition", "Semantic Assessment", "Interactive UI"],
    githubUrl: "https://github.com/zakariakassemi2000/Explorateur-de-Connaissances_AI",
    featured: true,
    metrics: "Semantic Answer Scoring, Infinite AI Concept Generation",
    techStack: ["React", "Vite", "Google Gemini API", "Web Speech API", "Tailwind CSS", "TypeScript"]
  }
];
