import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zakaria Kassemi | Data Scientist & AI Engineer",
    short_name: "zakariakassemi.com",
    description:
      "Data Scientist & AI Engineer specializing in ML, RAG chatbots, data analysis, and production deployment. Based in Morocco.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#6c63ff",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
