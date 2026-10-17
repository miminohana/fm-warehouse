import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Kanit } from "next/font/google";
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

const title = "FWM Future Mark Industrial Park | โกดัง โรงงาน ที่ดินให้เช่า มหาชัย สมุทรสาคร";
const description =
  "โกดัง คลังสินค้า โรงงาน และที่ดินเปล่าให้เช่า ขนาด 20–2,000 ตร.ม. สำหรับธุรกิจ SME ทำเลมหาชัย ใกล้กรุงเทพฯ รปภ. 24 ชม. ประสบการณ์กว่า 24 ปี";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "FWM Future Mark Industrial Park",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b2540",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${body.variable} ${head.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
