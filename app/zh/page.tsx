import type { Metadata } from "next";
import { content } from "../content";
import Landing from "../landing";

const zh = content.zh.meta;

export const metadata: Metadata = {
  title: zh.title,
  description: zh.description,
  alternates: {
    canonical: "/zh",
    languages: { th: "/", "zh-Hans": "/zh" },
  },
  openGraph: {
    title: zh.title,
    description: zh.description,
    siteName: "FWM Future Mark Industrial Park",
    locale: zh.locale,
    type: "website",
    url: "/zh",
  },
  twitter: { card: "summary_large_image", title: zh.title, description: zh.description },
};

export default function ChinesePage() {
  return <Landing lang="zh" />;
}
