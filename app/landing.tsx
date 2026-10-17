import Image from "next/image";
import type { ReactNode } from "react";
import { CONTACT, content, type Lang } from "./content";

import heroBg from "@/public/images/hero-bg.webp";
import building from "@/public/images/building.webp";
import aerial from "@/public/images/aerial.webp";
import warehouse from "@/public/images/warehouse.webp";
import factory from "@/public/images/factory.webp";
import logo from "@/public/images/logo.jpg";

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
  road: <path d="M5 21 9 3M19 21 15 3M12 6v2M12 11v2M12 16v2" />,
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
  quote: <path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

const highlightIcons = [icons.ruler, icons.shield, icons.road];
const serviceVisuals = [
  { icon: icons.warehouse, image: warehouse },
  { icon: icons.factory, image: factory },
  { icon: icons.land, image: aerial },
];
const FEATURED_SERVICE = 1;

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

function Phrases({ parts, sep }: { parts: readonly string[]; sep: string }) {
  return parts.map((p, i) => (
    <span key={p}>
      {i > 0 && sep}
      <span className="whitespace-nowrap">{p}</span>
    </span>
  ));
}

function Logo({ alt, size }: { alt: string; size: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1"
      style={{ width: size, height: size }}
    >
      <Image src={logo} alt={alt} className="h-full w-auto object-contain" sizes={`${size}px`} />
    </span>
  );
}

export default function Landing({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <div lang={t.htmlLang} className={lang === "zh" ? "lang-zh" : undefined}>
      {/* ===== ส่วนหัว ===== */}
      <header className="relative overflow-hidden bg-navy text-white">
        <Image
          src={heroBg}
          alt=""
          fill
          preload
          sizes="100vw"
          placeholder="blur"
          className="object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/60"
        />

        <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <Logo alt={t.logoAlt} size={44} />
            <span className="min-w-0 leading-tight">
              <span className="block font-heading text-lg font-semibold">FWM</span>
              <span className="block truncate text-xs text-white/70">Future Mark Industrial Park</span>
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={telHref}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 sm:inline-flex"
            >
              <Icon className="h-4 w-4">{icons.phone}</Icon>
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={t.switchLang.href}
              hrefLang={lang === "th" ? "zh-Hans" : "th"}
              aria-label={t.switchLang.aria}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/10"
            >
              <Icon className="h-4 w-4">{icons.globe}</Icon>
              {t.switchLang.label}
            </a>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-6 md:grid-cols-2 md:pb-28 md:pt-12">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <Icon className="h-4 w-4 text-accent">{icons.pin}</Icon>
              {t.hero.badge}
            </p>
            <h1 className="text-display font-semibold">
              <Phrases parts={t.hero.line1} sep={t.sep} />
              <span className="block text-[#7cc4ee]">
                <Phrases parts={t.hero.line2} sep={t.sep} />
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lead text-white/80">{t.hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref}>
                <Icon className="h-5 w-5">{icons.phone}</Icon>
                {t.hero.ctaCall}
              </Button>
              <Button href="#services" variant="ghost">
                {t.hero.ctaServices}
                <Icon className="h-5 w-5">{icons.arrow}</Icon>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15">
              <Image
                src={building}
                alt={t.hero.imageAlt}
                preload
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <p className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-xl">
              <Icon className="h-5 w-5 text-brand">{icons.land}</Icon>
              {t.hero.imageBadge}
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* ===== ตัวเลข ===== */}
        <section aria-label={t.statsLabel} className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-xl shadow-navy/10 ring-1 ring-border md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-white px-4 py-5 text-center md:py-7">
                <dt className="order-2 text-sm text-muted">{s.label}</dt>
                <dd className="font-heading text-2xl font-semibold text-navy md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===== จุดเด่น 3 ข้อ ===== */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead {...t.highlightsHead} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.highlights.map((h, i) => (
              <article
                key={h.title}
                className="rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon>{highlightIcons[i]}</Icon>
                </div>
                <h3 className="text-xl font-semibold text-navy">{h.title}</h3>
                <p className="mt-3 text-muted">{h.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== ภาพจริงจากโครงการ ===== */}
        <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <figure className="relative overflow-hidden rounded-3xl">
            <Image
              src={aerial}
              alt={t.aerial.imageAlt}
              placeholder="blur"
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[16/9]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-6 pt-24 text-white md:p-10 md:pt-32">
              <p className="mb-2 text-sm font-semibold tracking-wide text-[#7cc4ee]">{t.aerial.eyebrow}</p>
              <p className="font-heading text-title font-semibold text-balance">{t.aerial.title}</p>
              <p className="mt-2 text-white/80">{t.aerial.text}</p>
            </figcaption>
          </figure>
        </section>

        {/* ===== บริการ / ราคา ===== */}
        <section id="services" className="scroll-mt-6 bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead {...t.servicesHead} />
            <div className="grid gap-5 md:grid-cols-3">
              {t.services.map((s, i) => {
                const featured = i === FEATURED_SERVICE;
                const visual = serviceVisuals[i];
                return (
                  <article
                    key={s.name}
                    className={`relative flex flex-col overflow-hidden rounded-2xl ${
                      featured
                        ? "bg-navy text-white shadow-2xl shadow-navy/30 md:-my-4"
                        : "border border-border bg-white"
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={visual.image}
                        alt={s.imageAlt}
                        placeholder="blur"
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="aspect-[16/10] h-auto w-full object-cover grayscale"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-brand/30 mix-blend-multiply" />
                      {featured && (
                        <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">
                          {t.popular}
                        </span>
                      )}
                      <div
                        className={`absolute -bottom-6 left-7 grid h-12 w-12 place-items-center rounded-xl shadow-lg ${
                          featured ? "bg-brand text-white" : "bg-white text-brand"
                        }`}
                      >
                        <Icon>{visual.icon}</Icon>
                      </div>
                    </div>
                    <div className={`flex flex-1 flex-col p-7 pt-10 ${featured ? "md:pb-11" : ""}`}>
                      <h3 className={`text-xl font-semibold ${featured ? "" : "text-navy"}`}>{s.name}</h3>
                      <p className={`mt-1 text-sm ${featured ? "text-white/70" : "text-muted"}`}>{s.size}</p>
                      <ul className="mt-6 flex-1 space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-3">
                            <Icon className={`mt-1 h-5 w-5 shrink-0 ${featured ? "text-accent" : "text-brand"}`}>
                              {icons.check}
                            </Icon>
                            <span className={featured ? "text-white/90" : ""}>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-7 border-t pt-5 ${featured ? "border-white/15" : "border-border"}`}>
                        <p className={`text-sm ${featured ? "text-white/70" : "text-muted"}`}>{t.priceLabel}</p>
                        <p className="font-heading text-2xl font-semibold">{t.priceValue}</p>
                      </div>
                      <div className="mt-5">
                        <Button href={telHref} variant={featured ? "primary" : "outline"} className="w-full">
                          {t.quoteBtn}
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== เสียงลูกค้า ===== */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHead {...t.testimonialsHead} />
          <div className="grid gap-5 md:grid-cols-2">
            {t.testimonials.map((r) => (
              <figure key={r.who} className="rounded-2xl border border-border bg-white p-7 md:p-9">
                <Icon className="h-9 w-9 text-brand">{icons.quote}</Icon>
                <blockquote className="mt-4 text-lg text-ink">“{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-brand">
                    <Icon className="h-5 w-5">{icons.warehouse}</Icon>
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{r.who}</span>
                    <span className="block text-sm text-muted">{t.testimonialSub}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ===== คำถามที่พบบ่อย ===== */}
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead {...t.faqHead} />
            <div className="space-y-3">
              {t.faqs.map((f, i) => (
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
              <p className="mb-3 text-sm font-semibold tracking-wide text-[#7cc4ee]">{t.contact.eyebrow}</p>
              <h2 className="text-title font-semibold text-balance">{t.contact.title}</h2>
              <p className="mt-4 text-white/75">{t.contact.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={telHref}>
                  <Icon className="h-5 w-5">{icons.phone}</Icon>
                  {t.contact.call} {CONTACT.phoneDisplay}
                </Button>
                {lineHref && (
                  <Button href={lineHref} variant="line" external>
                    <Icon className="h-5 w-5">{icons.chat}</Icon>
                    {t.contact.line}
                  </Button>
                )}
                <Button href={mailHref} variant="ghost">
                  <Icon className="h-5 w-5">{icons.mail}</Icon>
                  {t.contact.email}
                </Button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-navy-soft p-8 md:col-span-2 md:border-l md:border-t-0 md:p-12">
              <ul className="space-y-6 text-white/85">
                <li className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent">{icons.pin}</Icon>
                  <span lang="th">
                    <span className="block font-semibold text-white">{CONTACT.company}</span>
                    {CONTACT.address}
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      lang={t.htmlLang}
                      className="mt-2 flex items-center gap-1 font-medium text-[#7cc4ee] hover:underline"
                    >
                      {t.contact.map}
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
            <Logo alt={t.logoAlt} size={36} />
            <span>FWM Future Mark Industrial Park</span>
          </div>
          <p lang="th">© 2026 {CONTACT.company}</p>
        </div>
      </footer>

      {/* ===== ปุ่มลอยบนมือถือ ===== */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={telHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-navy"
        >
          <Icon className="h-5 w-5">{icons.phone}</Icon>
          {t.stickyCall} {CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
