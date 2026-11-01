import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes: { route: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/work", priority: 0.9, changeFrequency: "weekly" },
    { route: "/services", priority: 0.9, changeFrequency: "weekly" },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" },
    { route: "/process", priority: 0.8, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const mainPages: MetadataRoute.Sitemap = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-01T00:00:00.000Z"),
    changeFrequency,
    priority,
  }));

  const projectPages: MetadataRoute.Sitemap = siteConfig.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date("2026-11-01T00:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...mainPages, ...projectPages];
}
