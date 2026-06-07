import { siteConfig } from "@/config/site";

/**
 * robots.txt — also AIEO-aware.
 *
 * Explicitly welcomes AI engine crawlers so that ChatGPT, Claude,
 * Perplexity, Gemini, Google AI Overviews, Bing Copilot and friends
 * can index our content for citation. Each AI bot gets its own rule
 * so changes (e.g. opting one out) are simple later.
 */
export default function robots() {
  const base = siteConfig.url.replace(/\/$/, "");

  const baseRules = [
    { userAgent: "*", allow: "/", disallow: ["/api/"] },
  ];

  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "Applebot-Extended",
    "Bingbot",
    "Amazonbot",
    "Bytespider",
    "Meta-ExternalAgent",
    "FacebookBot",
    "DuckAssistBot",
    "YouBot",
    "cohere-ai",
    "Diffbot",
    "PetalBot",
    "Kagibot",
    "Timpibot",
    "ImagesiftBot",
    "Omgili",
    "CCBot",
  ];

  const aiRules = aiBots.map((ua) => ({
    userAgent: ua,
    allow: "/",
    disallow: ["/api/"],
  }));

  return {
    rules: [...baseRules, ...aiRules],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}
