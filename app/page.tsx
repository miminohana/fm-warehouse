import type { ReactNode } from "react";

/* ===== ข้อมูลติดต่อ แก้ที่นี่ที่เดียว ===== */
const CONTACT = {
  phone: "0983374719",
  phoneDisplay: "098-337-4719",
  email: "fm.warehouses@gmail.com",
  // ใส่ LINE ID (เช่น "@fmwarehouse") แล้วปุ่ม LINE จะขึ้นเอง ถ้าเว้นว่างไว้ปุ่มจะซ่อน
  lineId: "",
  company: "บริษัท เพ็ชรเจริญอินเตอร์เนชั่นแนล จำกัด (สาขา)",
  address: "54/9 หมู่ที่ 5 ต.นาดี อ.เมืองสมุทรสาคร จ.สมุทรสาคร 74000",
};

const telHref = `tel:${CONTACT.phone}`;
const mailHref = `mailto:${CONTACT.email}`;
const lineHref = CONTACT.lineId
  ? `https://line.me/R/ti/p/${encodeURIComponent(CONTACT.lineId)}`
  : "";
const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "FWM Future Mark Industrial Park " + CONTACT.address,
)}`;

/* ===== ไอคอน ===== */
function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  ruler: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M6 8v3M10 8v4M14 8v3M18 8v4" />
    </>
  ),
  road: (
    <>
      <path d="M5 21 9 3M19 21 15 3M12 6v2M12 11v2M12 16v2" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M7 21v-8h10v8M7 17h10" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l5 3v-3l5 3V7h3l1-4h2l1 4v14z" />
      <path d="M7 17h2M12 17h2" />
    </>
  ),
  land: (
    <>
      <path d="M3 20h18M5 20l4-9 3 5 2-3 5 7" />
      <circle cx="17" cy="6" r="2" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chat: (
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.8L3 20.5l1.5-4.3A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
  ),
  quote: (
    <path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6" />
  ),
};

/* ===== เนื้อหา ===== */
const stats = [
  { value: "24+ ปี", label: "ประสบการณ์" },
  { value: "400+ ไร่", label: "พื้นที่โครงการ" },
  { value: "20–2,000", label: "ตร.ม. เลือกขนาดได้" },
  { value: "24 ชม.", label: "รักษาความปลอดภัย" },
];

const highlights = [
  {
    icon: icons.ruler,
    title: "ขนาดพอดีกับธุรกิจ SME",
    text: "มีโกดังและโรงงานพร้อมใช้ตั้งแต่ 20 ถึง 2,000 ตร.ม. เริ่มเล็กได้ แล้วขยายต่อในโครงการเดียวกันเมื่อธุรกิจโต",
  },
  {
    icon: icons.shield,
    title: "ปลอดภัยตลอด 24 ชั่วโมง",
    text: "กล้องวงจรปิดทั่วโครงการ มีเจ้าหน้าที่รักษาความปลอดภัย ระบบป้องกันอัคคีภัย และตรวจตราภายในสม่ำเสมอ",
  },
  {
    icon: icons.road,
    title: "ทำเลมหาชัย ขนส่งสะดวก",
    text: "ติดถนนหลัก รถใหญ่เข้าออกง่าย ใกล้กรุงเทพฯ ไม่อยู่ในพื้นที่น้ำท่วมซ้ำซาก รอบข้างมีธนาคาร โรงพยาบาล และแหล่งแรงงาน",
  },
];

const services = [
  {
    icon: icons.warehouse,
    name: "โกดัง / คลังสินค้าให้เช่า",
    size: "20 – 2,000 ตร.ม.",
    points: ["อาคารมาตรฐาน ออกแบบโดยวิศวกร", "พื้นที่ใช้สอยกว้าง คุ้มค่า", "ที่จอดรถเพียงพอ"],
  },
  {
    icon: icons.factory,
    name: "โรงงานให้เช่า",
    size: "พร้อมสำนักงานในตัว",
    points: ["อาคารสำเร็จรูป หรือออกแบบตามความต้องการ", "สาธารณูปโภคครบ น้ำ–ไฟพร้อม", "ช่วยเรื่องเอกสารและใบอนุญาต"],
    featured: true,
  },
  {
    icon: icons.land,
    name: "ที่ดินเปล่าให้เช่า",
    size: "สำหรับสร้างอาคารเอง",
    points: ["บริการเช่าที่ดินเพื่อก่อสร้าง", "เข้าถึงถนนหลักหลายเส้นทาง", "อยู่ในโครงการที่มีระบบดูแลครบ"],
  },
];

const testimonials = [
  {
    text: "อาคารโรงงานและโกดังของ FWM ได้มาตรฐาน ภายในโครงการดูดีและได้รับการดูแลอย่างดี สนับสนุนบริษัทที่เพิ่งเริ่มต้นอย่างเราได้มาก และทำเลเหมาะกับการกระจายสินค้าในประเทศ",
    who: "ประธานบริษัท",
  },
  {
    text: "เราเป็นธุรกิจ SME โครงการให้การสนับสนุนและคำแนะนำดีมาก ตัวโครงการดูน่าประทับใจ ระบบรักษาความปลอดภัย 24 ชั่วโมงทำให้อุ่นใจ",
    who: "ผู้ก่อตั้งบริษัท SME",
  },
];

const faqs = [
  {
    q: "โครงการตั้งอยู่ที่ไหน เดินทางสะดวกไหม?",
    a: "โครงการอยู่ที่ ต.นาดี อ.เมืองสมุทรสาคร (โซนมหาชัย) ใกล้กรุงเทพฯ และศูนย์กลางการคมนาคม เชื่อมต่อถนนหลักหลายสาย รถบรรทุกขนาดใหญ่เข้าออกได้สะดวก",
  },
  {
    q: "โกดังและคลังสินค้ามีขนาดเท่าไรบ้าง?",
    a: "มีให้เลือกตั้งแต่ 20 ตร.ม. ไปจนถึง 2,000 ตร.ม. และมีโรงงานพร้อมสำนักงาน รวมถึงที่ดินเปล่าสำหรับสร้างอาคารตามแบบที่ต้องการ",
  },
  {
    q: "โครงการน้ำท่วมไหม?",
    a: "ตัวโครงการไม่ได้อยู่ในพื้นที่น้ำท่วมซ้ำซาก และตั้งอยู่ในพื้นที่ร่มรื่น มีต้นไม้ล้อมรอบ",
  },
  {
    q: "ค่าเช่า ค่าส่วนกลาง และค่าน้ำไฟคิดอย่างไร?",
    a: "ราคาขึ้นอยู่กับขนาดและประเภทพื้นที่ โทรหรืออีเมลมาขอใบเสนอราคาได้เลย ฝ่ายขายมีโปรโมชันประจำปีและทำราคาพิเศษให้ได้",
  },
];

/* ===== ส่วนประกอบ ===== */
function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "line" | "outline";
  external?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-accent text-navy hover:bg-accent-dark shadow-lg shadow-accent/25",
    ghost: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20",
    line: "bg-line text-white hover:brightness-95",
    outline: "bg-white text-navy ring-1 ring-border hover:ring-brand hover:text-brand-dark",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold tracking-wide text-brand-dark">{eyebrow}</p>
      <h2 className="text-title font-semibold text-balance text-navy">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <svg viewBox="0 0 480 360" className="h-auto w-full" role="img" aria-label="ภาพประกอบโกดังสินค้า">
      <defs>
        <linearGradient id="roof" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4aa3d8" />
          <stop offset="1" stopColor="#328cc1" />
        </linearGradient>
        <linearGradient id="wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#dbe8f2" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <ellipse cx="240" cy="318" rx="220" ry="22" fill="#000" opacity="0.18" />
      {/* โกดังหลัง */}
      <path d="M250 120 360 70l110 50v190H250z" fill="#1d4a75" />
      <path d="M250 120 360 70l110 50" fill="none" stroke="#4aa3d8" strokeWidth="6" />
      <rect x="300" y="200" width="120" height="110" fill="#163a5e" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="300" y={208 + i * 17} width="120" height="3" fill="#2b5c8a" />
      ))}
      {/* โกดังหน้า */}
      <path d="M20 160 150 100l130 60v150H20z" fill="url(#wall)" />
      <path d="M10 165 150 98l140 67" fill="none" stroke="url(#roof)" strokeWidth="12" strokeLinejoin="round" />
      <rect x="60" y="210" width="90" height="100" rx="3" fill="#0b2540" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="60" y={220 + i * 18} width="90" height="3" fill="#1f4a73" />
      ))}
      <rect x="175" y="215" width="70" height="40" rx="3" fill="#bcd6ea" />
      <path d="M210 215v40M175 235h70" stroke="#fff" strokeWidth="3" />
      <rect x="132" y="128" width="36" height="14" rx="3" fill="#f2a32c" />
      {/* รถบรรทุก */}
      <g transform="translate(250 262)">
        <rect x="0" y="0" width="120" height="44" rx="4" fill="#ffffff" />
        <rect x="0" y="0" width="120" height="8" rx="3" fill="#f2a32c" />
        <path d="M120 12h30l20 18v14h-50z" fill="#f2a32c" />
        <rect x="128" y="17" width="20" height="12" rx="2" fill="#0b2540" />
        <circle cx="28" cy="48" r="11" fill="#0b2540" />
        <circle cx="28" cy="48" r="4" fill="#cbd5e1" />
        <circle cx="145" cy="48" r="11" fill="#0b2540" />
        <circle cx="145" cy="48" r="4" fill="#cbd5e1" />
      </g>
      {/* ต้นไม้ */}
      <circle cx="455" cy="270" r="22" fill="#2f9e6e" />
      <rect x="452" y="285" width="6" height="25" fill="#1e6b49" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== ส่วนหัว ===== */}
      <header className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/40 blur-3xl"
        />

        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand font-heading text-lg font-bold">
              F
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-semibold">FWM</span>
              <span className="block text-xs text-white/70">Future Mark Industrial Park</span>
            </span>
          </a>
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 sm:inline-flex"
          >
            <Icon className="h-4 w-4">{icons.phone}</Icon>
            {CONTACT.phoneDisplay}
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-2 md:pb-24 md:pt-12">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <Icon className="h-4 w-4 text-accent">{icons.pin}</Icon>
              มหาชัย · สมุทรสาคร
            </p>
            <h1 className="text-display font-semibold">
              <span className="whitespace-nowrap">โกดัง</span> <span className="whitespace-nowrap">โรงงาน</span>{" "}
              <span className="whitespace-nowrap">ให้เช่า</span>
              <span className="block text-[#7cc4ee]">
                <span className="whitespace-nowrap">ฐานที่มั่นคง</span>{" "}
                <span className="whitespace-nowrap">ให้ธุรกิจ SME เติบโต</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lead text-white/80">
              พื้นที่พร้อมใช้ตั้งแต่ 20–2,000 ตร.ม. ทำเลติดถนนหลัก ใกล้กรุงเทพฯ ดูแลความปลอดภัย 24 ชั่วโมง
              จากผู้พัฒนาที่มีประสบการณ์กว่า 24 ปี
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref}>
                <Icon className="h-5 w-5">{icons.phone}</Icon>
                โทรนัดเยี่ยมชมโครงการ
              </Button>
              <Button href="#services" variant="ghost">
                ดูพื้นที่ให้เช่า
                <Icon className="h-5 w-5">{icons.arrow}</Icon>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <HeroVisual />
          </div>
        </div>
      </header>

      <main>
        {/* ===== ตัวเลข ===== */}
        <section aria-label="ข้อมูลโครงการ" className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-xl shadow-navy/10 ring-1 ring-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-white px-4 py-5 text-center md:py-7">
                <dt className="order-2 text-sm text-muted">{s.label}</dt>
                <dd className="font-heading text-2xl font-semibold text-navy md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===== จุดเด่น 3 ข้อ ===== */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead
            eyebrow="ทำไมต้อง FWM"
            title="ออกแบบมาเพื่อธุรกิจขนาดกลางและเล็ก"
            text="เราสร้างโกดัง โรงงาน และคลังสินค้าที่ขนาดพอดี ราคาคุ้มค่า และพร้อมให้ธุรกิจขยายต่อได้อย่างมั่นใจ"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon>{h.icon}</Icon>
                </div>
                <h3 className="text-xl font-semibold text-navy">{h.title}</h3>
                <p className="mt-3 text-muted">{h.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== บริการ / ราคา ===== */}
        <section id="services" className="scroll-mt-6 bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead
              eyebrow="พื้นที่ให้เช่า"
              title="เลือกพื้นที่ที่เหมาะกับงานของคุณ"
              text="ราคาขึ้นอยู่กับขนาดและทำเลในโครงการ ติดต่อเพื่อขอใบเสนอราคาและโปรโมชันประจำปีได้เลย"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.name}
                  className={`relative flex flex-col rounded-2xl p-7 ${
                    s.featured
                      ? "bg-navy text-white shadow-2xl shadow-navy/30 md:-my-4 md:py-11"
                      : "border border-border bg-white"
                  }`}
                >
                  {s.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">
                      ยอดนิยม
                    </span>
                  )}
                  <div
                    className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${
                      s.featured ? "bg-white/10 text-[#7cc4ee]" : "bg-brand/10 text-brand"
                    }`}
                  >
                    <Icon>{s.icon}</Icon>
                  </div>
                  <h3 className={`text-xl font-semibold ${s.featured ? "" : "text-navy"}`}>{s.name}</h3>
                  <p className={`mt-1 text-sm ${s.featured ? "text-white/70" : "text-muted"}`}>{s.size}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <Icon className={`mt-1 h-5 w-5 shrink-0 ${s.featured ? "text-accent" : "text-brand"}`}>
                          {icons.check}
                        </Icon>
                        <span className={s.featured ? "text-white/90" : ""}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-7 border-t pt-5 ${s.featured ? "border-white/15" : "border-border"}`}>
                    <p className={`text-sm ${s.featured ? "text-white/70" : "text-muted"}`}>ค่าเช่า</p>
                    <p className="font-heading text-2xl font-semibold">สอบถามราคาพิเศษ</p>
                  </div>
                  <div className="mt-5">
                    <Button href={telHref} variant={s.featured ? "primary" : "outline"} className="w-full">
                      ขอใบเสนอราคา
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== เสียงลูกค้า ===== */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead eyebrow="เสียงจากผู้เช่า" title="ลูกค้าพูดถึงเราอย่างไร" />
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.who} className="rounded-2xl border border-border bg-white p-7 md:p-9">
                <Icon className="h-9 w-9 text-brand">{icons.quote}</Icon>
                <blockquote className="mt-4 text-lg text-ink">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-brand">
                    <Icon className="h-5 w-5">{icons.warehouse}</Icon>
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{t.who}</span>
                    <span className="block text-sm text-muted">ลูกค้าของโครงการ</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ===== คำถามที่พบบ่อย ===== */}
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead eyebrow="คำถามที่พบบ่อย" title="มีข้อสงสัย? เรามีคำตอบ" />
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-xl border border-border bg-white p-5 open:shadow-md open:shadow-navy/5 md:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Icon className="h-5 w-5 shrink-0 text-brand transition group-open:rotate-180">
                      {icons.chevron}
                    </Icon>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ติดต่อเรา ===== */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="overflow-hidden rounded-3xl bg-navy text-white md:grid md:grid-cols-5">
            <div className="p-8 md:col-span-3 md:p-12">
              <p className="mb-3 text-sm font-semibold tracking-wide text-[#7cc4ee]">ติดต่อเรา</p>
              <h2 className="text-title font-semibold text-balance">นัดเยี่ยมชมโครงการ หรือขอใบเสนอราคา</h2>
              <p className="mt-4 text-white/75">
                คุยกับฝ่ายขายได้โดยตรง เราช่วยแนะนำพื้นที่ที่เหมาะกับธุรกิจ และทำราคาพิเศษให้คุณได้
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={telHref}>
                  <Icon className="h-5 w-5">{icons.phone}</Icon>
                  โทร {CONTACT.phoneDisplay}
                </Button>
                {lineHref && (
                  <Button href={lineHref} variant="line" external>
                    <Icon className="h-5 w-5">{icons.chat}</Icon>
                    แอด LINE
                  </Button>
                )}
                <Button href={mailHref} variant="ghost">
                  <Icon className="h-5 w-5">{icons.mail}</Icon>
                  ส่งอีเมล
                </Button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-navy-soft p-8 md:col-span-2 md:border-l md:border-t-0 md:p-12">
              <ul className="space-y-6 text-white/85">
                <li className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent">{icons.pin}</Icon>
                  <span>
                    <span className="block font-semibold text-white">{CONTACT.company}</span>
                    {CONTACT.address}
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1 font-medium text-[#7cc4ee] hover:underline"
                    >
                      เปิดแผนที่ Google Maps
                      <Icon className="h-4 w-4">{icons.arrow}</Icon>
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent">{icons.phone}</Icon>
                  <a href={telHref} className="hover:underline">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent">{icons.mail}</Icon>
                  <a href={mailHref} className="break-all hover:underline">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* ===== ส่วนท้าย ===== */}
      <footer className="border-t border-border pb-24 pt-10 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-brand font-heading font-bold text-white">
              F
            </span>
            <span>FWM Future Mark Industrial Park</span>
          </div>
          <p>© 2026 {CONTACT.company}</p>
        </div>
      </footer>

      {/* ===== ปุ่มลอยบนมือถือ ===== */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={telHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-navy"
        >
          <Icon className="h-5 w-5">{icons.phone}</Icon>
          โทรสอบถาม {CONTACT.phoneDisplay}
        </a>
      </div>
    </>
  );
}
