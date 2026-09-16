import type { Project } from './types';

export const projectsPart3: Project[] = [
  {
    id: "adventureworks-sales",
    title: "AdventureWorks Sales Analytics Dashboard",
    titleFr: "Tableau de Bord — Analyse des Ventes AdventureWorks",
    titleAr: "لوحة تحليلات مبيعات AdventureWorks",
    description: "End-to-end data analytics project using Excel, SQL Server and Power BI to analyze AdventureWorks sales, customers, products and geographic regions across 6 interactive dashboard pages.",
    descriptionFr: "Projet d'analyse de données de bout en bout avec Excel, SQL Server et Power BI pour analyser les ventes, clients, produits et régions géographiques d'AdventureWorks à travers 6 pages de tableau de bord interactives.",
    descriptionAr: "مشروع تحليل بيانات متكامل باستخدام Excel وSQL Server وPower BI لتحليل مبيعات AdventureWorks والعملاء والمنتجات والمناطق الجغرافية عبر 6 صفحات تفاعلية.",
    longDescription: `**AdventureWorks Sales Analytics** is a comprehensive end-to-end data analytics project showcasing the full data pipeline from raw data to actionable business insights.

**Workflow:** Raw Data → Excel Cleaning → SQL Analysis → Power BI Dashboard → Business Decision

**Project Phases:**
- **Phase 1 — Excel**: Data cleaning, duplicate removal, pivot tables & charts
- **Phase 2 — SQL Server**: Joins, CTEs, window functions, sales / customer / product / geographic analysis
- **Phase 3 — Power BI**: 6 interactive pages (Executive, Sales, Customers, Products, Geography, Detail Report) with DAX measures

**Key Insights:**
- Bikes drive the majority of total sales and profit
- USA and Australia are the highest-revenue markets
- A small group of customers contributes significantly to total revenue
- Interactive dashboards enable faster and smarter business decisions`,
    longDescriptionFr: `**AdventureWorks Sales Analytics** est un projet d'analyse de données de bout en bout illustrant le pipeline complet des données brutes aux décisions business.

**Flux de travail :** Données Brutes → Nettoyage Excel → Analyse SQL → Dashboard Power BI → Décision Métier

**Phases du projet :**
- **Phase 1 — Excel** : Nettoyage des données, suppression des doublons, tableaux croisés dynamiques et graphiques
- **Phase 2 — SQL Server** : Jointures, CTE, fonctions fenêtrées, analyse ventes / clients / produits / géographique
- **Phase 3 — Power BI** : 6 pages interactives (Exécutif, Ventes, Clients, Produits, Géographie, Rapport Détail) avec mesures DAX

**Insights clés :**
- Les vélos génèrent la majorité des ventes et bénéfices
- USA et Australie sont les marchés les plus rentables
- Un petit groupe de clients contribue significativement au CA`,
    longDescriptionAr: `**تحليلات مبيعات AdventureWorks** هو مشروع تحليل بيانات شامل يعرض خط أنابيب البيانات الكامل من البيانات الخام إلى رؤى الأعمال.

**مراحل المشروع:**
- **المرحلة 1 — Excel**: تنظيف البيانات وإزالة التكرارات وجداول Pivot
- **المرحلة 2 — SQL Server**: الوصلات وCTEs ودوال النوافذ وتحليل المبيعات
- **المرحلة 3 — Power BI**: 6 صفحات تفاعلية مع قياسات DAX`,
    category: ["dataanalytics"],
    tags: ["Excel", "SQL Server", "Power BI", "DAX", "Data Cleaning", "Business Intelligence"],
    githubUrl: "https://github.com/zakariakassemi2000/Sales-Analytics-AdventureWorks-",
    featured: false,
    metrics: "6 Dashboard Pages, Full BI Pipeline",
    techStack: ["Microsoft Excel", "SQL Server", "Power BI", "DAX"],
    dataset: "AdventureWorks (Microsoft sample database)",
    datasetFr: "AdventureWorks (base de données exemple Microsoft)",
    datasetAr: "AdventureWorks (قاعدة بيانات نموذج Microsoft)",
    approach: "ETL pipeline: Excel cleaning → SQL analysis → Power BI visualization",
    approachFr: "Pipeline ETL : Excel → SQL → Power BI",
    approachAr: "خط أنابيب ETL: Excel للتنظيف ← SQL للتحليل ← Power BI للتصور",
  },
  {
    id: "marketpulse-dashboard",
    title: "MarketPulse — Market Analytics Dashboard (Excel)",
    titleFr: "MarketPulse — Tableau de Bord d'Analyse de Marché (Excel)",
    titleAr: "MarketPulse — لوحة تحليلات السوق (Excel)",
    description: "Interactive Excel dashboard for market analytics, transforming raw market data into clear, actionable business intelligence with dynamic charts and slicers to support strategic decision-making.",
    descriptionFr: "Tableau de bord Excel interactif pour l'analyse de marché, transformant les données brutes en intelligence business claire et actionnable avec des graphiques dynamiques et des segments pour la prise de décision stratégique.",
    descriptionAr: "لوحة تحكم Excel تفاعلية لتحليلات السوق، تحوّل البيانات الخام إلى ذكاء أعمال واضح مع مخططات ديناميكية ومقسّمات لدعم اتخاذ القرار الاستراتيجي.",
    longDescription: `**MarketPulse** is a comprehensive Excel-based market analytics dashboard built to transform raw market data into clear, actionable business intelligence.

**Key Features:**
- Dynamic charts and pivot tables for market trend analysis
- Interactive slicers for multi-dimensional data exploration
- KPI tracking and performance monitoring
- Geographic market segmentation visualizations
- Automated data refresh and calculation pipelines

The project showcases advanced Excel skills including complex formulas, Power Query, dynamic named ranges, and conditional formatting.`,
    longDescriptionFr: `**MarketPulse** est un tableau de bord d'analyse de marché complet basé sur Excel.

**Fonctionnalités clés :**
- Graphiques dynamiques et tableaux croisés dynamiques pour l'analyse des tendances de marché
- Segments interactifs pour l'exploration des données multidimensionnelles
- Suivi des KPI et monitoring des performances
- Visualisations de segmentation géographique du marché
- Pipeline de données automatisé avec Power Query`,
    longDescriptionAr: `**MarketPulse** هو لوحة تحليلات سوق شاملة مبنية على Excel.

**الميزات الرئيسية:**
- مخططات ديناميكية وجداول Pivot لتحليل اتجاهات السوق
- مقسّمات تفاعلية لاستكشاف البيانات متعددة الأبعاد
- تتبع مؤشرات الأداء الرئيسية
- تصورات التجزئة الجغرافية للسوق`,
    category: ["dataanalytics"],
    tags: ["Excel", "Power Query", "Pivot Tables", "Market Analytics", "KPI", "Business Intelligence"],
    githubUrl: "https://github.com/zakariakassemi2000/Marketpulse-Analytics-Dashboard-Excel",
    featured: false,
    metrics: "Interactive KPI Dashboard",
    techStack: ["Microsoft Excel", "Power Query", "Pivot Tables", "Dynamic Charts"],
    dataset: "Market data (sales, customers, geographic regions)",
    datasetFr: "Données de marché (ventes, clients, régions géographiques)",
    datasetAr: "بيانات السوق (المبيعات، العملاء، المناطق الجغرافية)",
    approach: "Advanced Excel: Power Query for ETL, Pivot Tables, dynamic slicers",
    approachFr: "Excel avancé : Power Query pour l'ETL, tableaux croisés dynamiques, segments dynamiques",
    approachAr: "Excel المتقدم: Power Query لعمليات ETL والجداول المحورية والمقسّمات الديناميكية",
  },
  {
    id: "callcenter-dashboard",
    title: "Call Center Performance Dashboard (Excel)",
    titleFr: "Tableau de Bord de Performance Centre d'Appels (Excel)",
    titleAr: "لوحة أداء مركز الاتصال (Excel)",
    description: "Comprehensive Excel dashboard for call center analytics tracking 11 KPIs: agent performance, satisfaction rates, call resolution, daily call counts and dynamic filtering by month and resolution status.",
    descriptionFr: "Tableau de bord Excel complet pour les analyses de centre d'appels avec 11 KPI : performances des agents, taux de satisfaction, résolution des appels, nombre d'appels quotidiens et filtrage dynamique par mois et statut de résolution.",
    descriptionAr: "لوحة تحكم Excel شاملة لتحليلات مركز الاتصال تتتبع 11 مؤشر أداء: أداء الوكلاء، معدلات الرضا، حل المكالمات، أعداد المكالمات اليومية وتصفية ديناميكية حسب الشهر وحالة الحل.",
    longDescription: `**Call Center Performance Dashboard** is a professional Excel analytics solution monitoring 11 comprehensive KPIs.

**KPIs tracked:**
1. Calls and satisfaction per agent
2. Top-performing agents identification
3. Call answer rate percentage
4. Average customer satisfaction level
5. Answered calls breakdown (Yes/No)
6. Total call volume
7. Average conversation duration
8. Average call response time
9. Daily resolved call count
10. Calls by topic with satisfaction correlation
11. Dynamic month and resolution status filters

**Features:**
- Interactive Slicers: filter by month, agent, call topic, or resolution status
- Dynamic charts updating in real-time based on slicer selections
- KPI cards for quick metric visualization
- Full pipeline: data verification → cleaning → transformation → analysis → visualization`,
    longDescriptionFr: `**Tableau de Bord Centre d'Appels** est une solution d'analyse Excel professionnelle suivant 11 KPI complets.

**KPI suivis :**
1. Nombre d'appels et satisfaction par agent
2. Identification des meilleurs agents
3. Pourcentage d'appels reçus
4. Niveau moyen de satisfaction client
5. Analyse appels répondus (Oui/Non)
6. Volume total d'appels
7. Durée moyenne des conversations
8. Temps moyen de réponse
9. Appels résolus par jour
10. Appels par sujet avec corrélation satisfaction
11. Filtres dynamiques par mois et statut de résolution

**Fonctionnalités :**
- Segments interactifs : mois, agent, sujet, statut
- Graphiques dynamiques mis à jour en temps réel
- Fiches KPI visuelles`,
    longDescriptionAr: `**لوحة أداء مركز الاتصال** هو حل تحليلي Excel احترافي يتتبع 11 مؤشر أداء رئيسي شامل.

**المؤشرات المُتتبَّعة:**
1. عدد المكالمات ومستوى الرضا لكل وكيل
2. تحديد أفضل الوكلاء
3. نسبة المكالمات المستجاب لها
4. متوسط رضا العملاء
5. تحليل المكالمات المُجابة (نعم/لا)
6. إجمالي حجم المكالمات
7. متوسط مدة المحادثة
8. متوسط وقت الاستجابة
9. المكالمات المحلولة يومياً
10. المكالمات حسب الموضوع مع الرضا
11. فلاتر ديناميكية حسب الشهر وحالة الحل`,
    category: ["dataanalytics"],
    tags: ["Excel", "KPI Dashboard", "Call Center Analytics", "Slicers", "Data Visualization", "Business Intelligence"],
    githubUrl: "https://github.com/zakariakassemi2000/Call-Center-Dashboard-Excel-",
    featured: false,
    metrics: "11 KPIs, Dynamic Filtering",
    techStack: ["Microsoft Excel", "Pivot Tables", "Slicers", "Dynamic Charts", "Conditional Formatting"],
    dataset: "Call Center Dataset (agent performance, call logs, satisfaction scores)",
    datasetFr: "Dataset Centre d'Appels (performance agents, journaux d'appels, scores satisfaction)",
    datasetAr: "مجموعة بيانات مركز الاتصال (أداء الوكلاء وسجلات المكالمات ودرجات الرضا)",
    approach: "Full data pipeline: verification → cleaning → transformation → analysis → visualization with interactive slicers",
    approachFr: "Pipeline complet : vérification → nettoyage → transformation → analyse → visualisation avec segments interactifs",
    approachAr: "خط أنابيب كامل: التحقق ← التنظيف ← التحويل ← التحليل ← التصور مع مقسّمات تفاعلية",
  },
];

