import { navigation, siteUrl } from "@/lib/site";

export default function sitemap() {
  return [{ href: "/" }, ...navigation].map((item) => ({
    url: new URL(item.href, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
