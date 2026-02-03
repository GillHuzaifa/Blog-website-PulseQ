import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import m from "../marketing.module.css";

export default function PartnersPage() {
  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.heroGrid}>
            <div>
              <h1 className="h1">Partner With PulseQ</h1>
              <p className="lead">
                Join Pakistan&apos;s healthcare ecosystem in revolutionizing patient queue
                management and delivering exceptional healthcare experiences.
              </p>
              <div className={m.heroActions}>
                <Link className="btn btnPrimary" href="/contact">
                  Become a Partner →
                </Link>
              </div>
            </div>

            <div className={m.heroMedia}>
              <div className={m.heroMediaInner}>
                <Image
                  src="/images/handshake.jpeg"
                  alt="Partnership"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Our Trusted Partners</h2>
            <div className={m.sectionSub}>Organizations across Pakistan trust PulseQ</div>
          </div>

          <div className={m.cardsGrid}>
            {[
              { n: "GDG ISLAMABAD", c: "Islamabad" },
              { n: "BIC ISLAMABAD", c: "Islamabad" },
              { n: "SSBC ISLAMABAD", c: "Islamabad" },
              { n: "OPAL TECHNOLOGIES", c: "Pakistan" },
            ].map((p) => (
              <div key={p.n} className={`card ${m.cardItem}`} style={{ textAlign: "center" }}>
                <div className={m.cardIcon} style={{ margin: "0 auto 14px" }}>
                  🏥
                </div>
                <div style={{ fontWeight: 900 }}>{p.n}</div>
                <div className={m.mutedCenter} style={{ fontSize: 13 }}>
                  {p.c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Partnership Benefits</h2>
            <div className={m.sectionSub}>Why leaders choose to partner with PulseQ</div>
          </div>

          <div className={m.cardsGrid}>
            {[
              { i: "📈", t: "Growth Opportunities", d: "Expand your reach and attract more clients with our innovative technology" },
              { i: "🏅", t: "Brand Recognition", d: "Join an elite network of forward-thinking organizations" },
              { i: "🤝", t: "Collaborative Support", d: "Access dedicated resources and ongoing strategic guidance" },
              { i: "✅", t: "Quality Assurance", d: "Maintain the highest standards of service and satisfaction" },
            ].map((c) => (
              <div key={c.t} className={`card ${m.cardItem}`}>
                <div className={m.cardIcon}>{c.i}</div>
                <div className={m.cardTitle}>{c.t}</div>
                <div className={m.cardText}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Partnership Opportunities</h2>
            <div className={m.sectionSub}>Flexible partnership models to suit your needs</div>
          </div>

          <div className={m.cardsGrid3}>
            {[
              {
                t: "Healthcare Provider",
                d: "Hospitals, clinics, and centers looking to modernize their queue management",
                bullets: ["Complete digital queue solution", "Customized implementation", "Ongoing support and training", "Analytics and reporting"],
              },
              {
                t: "Technology Partner",
                d: "Software companies and system integrators interested in collaboration",
                bullets: ["API access and documentation", "Joint development opportunities", "Co-marketing initiatives", "Revenue sharing programs"],
              },
              {
                t: "Strategic Partner",
                d: "Organizations wanting to bring PulseQ to new markets or sectors",
                bullets: ["Exclusive territorial rights", "White-label opportunities", "Dedicated account management", "Marketing and sales support"],
              },
            ].map((o) => (
              <div key={o.t} className={`card ${m.cardItem}`}>
                <div className={m.cardTitle}>{o.t}</div>
                <div className={m.cardText}>{o.d}</div>
                <div className={m.bullets} style={{ marginTop: 14 }}>
                  {o.bullets.map((b) => (
                    <div key={b} className={m.bullet}>
                      <span className={m.check}>✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Partner Success Stories</h2>
            <div className={m.sectionSub}>Real results from our partners</div>
          </div>

          <div className={m.cardsGrid3}>
            {[
              {
                k: "45%",
                t: "reduction in wait times",
                q: '"PulseQ has transformed our patient experience and operational efficiency."',
                a: "City Medical Center",
              },
              {
                k: "92%",
                t: "patient satisfaction",
                q: '"Our patients love the real-time updates and transparency."',
                a: "General Hospital",
              },
              {
                k: "30%",
                t: "increase in daily patients",
                q: '"We can now serve more patients without compromising quality."',
                a: "Metro Health Clinic",
              },
            ].map((s) => (
              <div key={s.k} className={`card ${m.cardItem}`}>
                <div style={{ fontSize: 34, fontWeight: 900, color: "var(--primary)" }}>{s.k}</div>
                <div style={{ fontWeight: 800, marginTop: 6 }}>{s.t}</div>
                <div className={m.cardText} style={{ marginTop: 12, fontStyle: "italic" }}>
                  {s.q}
                </div>
                <div style={{ marginTop: 16, fontWeight: 800, fontSize: 13 }}>{s.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        ctaTitle="Ready to Partner With Us?"
        ctaSubtitle="Let’s discuss how we can work together to transform healthcare in Pakistan"
        ctaPrimaryLabel="Get in Touch"
        ctaSecondaryLabel="Schedule a Call"
      />
    </>
  );
}
