"use client";

import { useMemo, useState } from "react";

import SiteFooter from "@/components/SiteFooter";
import m from "../marketing.module.css";

const MEDIUM_PROFILE = "https://medium.com/@pulseq.co";

const BOOK_DEMO_HREF = "/contact#contact-form";

const categories = [
  "All",
  "Healthcare Innovation",
  "Queue Management",
  "Patient Experience",
  "Technology",
  "Case Studies",
] as const;

const featured = [
  {
    tag: "Healthcare Innovation",
    title: "How Digital Queue Management is Transforming Healthcare in Pakistan",
    excerpt:
      "Discover how innovative queue management systems are revolutionizing patient experience and hospital operations.",
  },
  {
    tag: "Queue Management",
    title: "Reducing Patient Wait Times: Best Practices for Hospitals",
    excerpt:
      "Learn effective strategies to minimize wait times and improve operational efficiency in healthcare facilities.",
  },
  {
    tag: "Patient Experience",
    title: "The Future of Patient Experience: Real-Time Updates and Transparency",
    excerpt:
      "Explore how real-time communication is shaping the future of patient satisfaction and trust.",
  },
  {
    tag: "Technology",
    title: "Understanding Queue Management Technology: A Practical Guide",
    excerpt:
      "A simple breakdown of the technology behind modern queue management and why it matters.",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return featured.filter((a) => {
      const categoryOk = activeCategory === "All" ? true : a.tag === activeCategory;
      if (!categoryOk) return false;

      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.sectionHead}>
            <h1 className="h1">PulseQ Blog</h1>
            <div className={m.sectionSub}>
              Insights, news, and best practices in healthcare queue management and patient
              experience
            </div>

            <div className={m.search}>
              <input
                className={m.searchInput}
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
              <div className={m.pillsRow}>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`${m.pill} ${activeCategory === c ? m.pillActive : ""}`}
                    onClick={() => setActiveCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
            <h2 className="h2">Featured Articles</h2>
            <a className="btn btnOutline" href={MEDIUM_PROFILE} target="_blank" rel="noreferrer">
              View all on Medium →
            </a>
          </div>

          <div style={{ marginTop: 18 }} className={m.articleGrid2}>
            {filtered.slice(0, 2).map((a) => (
              <a
                key={a.title}
                className={`card ${m.articleCard}`}
                href={MEDIUM_PROFILE}
                target="_blank"
                rel="noreferrer"
              >
                <div className={m.articleMedia} />
                <div className={m.articleBody}>
                  <div className={m.articleTag}>🏷 {a.tag}</div>
                  <div className={m.articleTitle}>{a.title}</div>
                  <div className={m.articleExcerpt}>{a.excerpt}</div>
                  <div className={m.smallMeta}>
                    <span>Read on Medium</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 34, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
            <h2 className="h2">Latest Articles</h2>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>{filtered.length} articles</div>
          </div>

          <div style={{ marginTop: 18 }} className={m.articleGrid3}>
            {filtered.slice(1, 4).map((a) => (
              <a
                key={a.title}
                className={`card ${m.articleCard}`}
                href={MEDIUM_PROFILE}
                target="_blank"
                rel="noreferrer"
              >
                <div className={m.articleMedia} />
                <div className={m.articleBody}>
                  <div className={m.articleTag}>🏷 {a.tag}</div>
                  <div className={m.articleTitle}>{a.title}</div>
                  <div className={m.articleExcerpt}>{a.excerpt}</div>
                  <div className={m.smallMeta}>
                    <span>Read on Medium</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <a className="btn btnPrimary" href={MEDIUM_PROFILE} target="_blank" rel="noreferrer">
              Visit PulseQ on Medium →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter
        ctaTitle="Stay Updated"
        ctaSubtitle="Read our latest insights on Medium"
        ctaPrimaryLabel="Open Medium"
        ctaPrimaryHref={MEDIUM_PROFILE}
        ctaSecondaryLabel="Book a Demo"
        ctaSecondaryHref={BOOK_DEMO_HREF}
      />
    </>
  );
}
