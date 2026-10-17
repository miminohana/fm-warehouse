import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Kanit, Noto_Sans_SC } from "next/font/google";
import { content, SITE_URL } from "./content";
import "./globals.css";

const body = IBM_Plex_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const head = Kanit({
  variable: "--font-head",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
});

// ฟอนต์จีน: โหลดเฉพาะตอนมีตัวอักษรจีนบนหน้า (ไม่ preload ให้หน้าไทยช้า)
const zh = Noto_Sans_SC({
  variable: "--font-zh",
  weight: ["400", "500", "700"],
  preload: false,
});

const th = content.th.meta;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: th.title,
  description: th.description,
  alternates: {
    canonical: "/",
    languages: { th: "/", "zh-Hans": "/zh" },
  },
  openGraph: {
    title: th.title,
    description: th.description,
    siteName: "FWM Future Mark Industrial Park",
    locale: th.locale,
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: th.title, description: th.description },
};

export const viewport: Viewport = {
  themeColor: "#0b2540",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${body.variable} ${head.variable} ${zh.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
