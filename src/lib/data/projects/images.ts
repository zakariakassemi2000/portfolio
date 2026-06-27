export interface ProjectImage {
  src: string;
  caption: string;
}

export const projectImages: Record<string, ProjectImage[]> = {
  "shifaa": [
    { src: "/projects/shifaa/cover.png", caption: "SHIFAA MAROC — Architecture médicale et soutien psychologique en arabe" }
  ],
  "agentic-swarm": [
    { src: "/projects/agentic-swarm/cover.png", caption: "Synapse Studio V3 — Débats asynchrones multi-agents et consensus sémantique" }
  ],
  "knowledge-explorer": [
    { src: "/projects/knowledge-explorer/cover.png", caption: "Explorateur de Connaissances — Recherche sémantique vectorielle et Q&A interactif" }
  ],
  "legal-assistant": [
    { src: "/projects/legal-assistant/cover.png", caption: "Legal Assistant — Chatbot juridique RAG pour le droit marocain" }
  ],
  "brain-tumor-detection": [
    { src: "/projects/brain-tumor-detection/cover.png", caption: "Brain Tumor Detection — Classification de tumeurs cérébrales avec Grad-CAM" }
  ],
  "don-du-sang": [
    { src: "/projects/don-du-sang/cover.png", caption: "Don Du Sang — Plateforme logistique de gestion des dons de sang au Maroc" }
  ]
};
