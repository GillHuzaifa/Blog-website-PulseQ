import Image from "next/image";

import SiteFooter from "@/components/SiteFooter";
import m from "../marketing.module.css";

const BOOK_DEMO_HREF = "/contact#contact-form";

export default function HospitalsPage() {
  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.heroGrid}>
            <div>
              <h1 className="h1">Transform Your Hospital Operations</h1>
              <p className="lead">
                Join Pakistan&apos;s leading hospitals in revolutionizing patient queue
                management with PulseQ&apos;s intelligent digital solution.
              </p>
              <div className={m.heroActions}>
                <a className="btn btnPrimary" href={BOOK_DEMO_HREF}>
                  Book a Demo →
                </a>
              </div>
            </div>

            <div className={m.heroMedia}>
              <div className={m.heroMediaInner}>
                <Image
                  src="/images/dashboard.jpeg"
                  alt="Hospital dashboard"
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
            <h2 className="h2">Why Hospitals Choose PulseQ</h2>
            <div className={m.sectionSub}>Proven benefits that drive measurable results</div>
          </div>

          <div className={m.cardsGrid3}>
            {[
              {
                i: "⏱",
                t: "Reduce Wait Times by 40%",
                d: "Optimize patient flow and significantly decrease average waiting times",
              },
              {
                i: "👥",
                t: "Improve Patient Satisfaction",
                d: "Enhance patient experience with real-time updates and reduced crowding",
              },
              {
                i: "📊",
                t: "Data-Driven Insights",
                d: "Make informed decisions with comprehensive analytics and reporting",
              },
              {
                i: "📈",
                t: "Increase Operational Efficiency",
                d: "Streamline workflows and optimize resource allocation",
              },
              {
                i: "💲",
                t: "Cost Effective",
                d: "Reduce operational costs while improving service quality",
              },
              {
                i: "🛡",
                t: "HIPAA Compliant",
                d: "Enterprise-grade security and full compliance with healthcare regulations",
              },
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
          <div className={m.split}>
            <div>
              <h2 className="h2">Powerful Dashboard</h2>
              <p className="lead">
                Get complete visibility into your hospital&apos;s queue performance with our
                intuitive dashboard designed for healthcare administrators.
              </p>
              <div className={m.bullets}>
                {[
                  "Real-time queue monitoring across all departments",
                  "Patient flow analytics and bottleneck identification",
                  "Staff performance metrics and workload distribution",
                  "Custom reports and data exports",
                  "Predictive analytics for better planning",
                  "Multi-location management from single dashboard",
                ].map((t) => (
                  <div key={t} className={m.bullet}>
                    <span className={m.check}>✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: "grid", gap: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ color: "var(--muted)", fontSize: 13 }}>Total Patients Today</div>
                  <div style={{ fontWeight: 900, fontSize: 26, color: "var(--primary)" }}>247</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ color: "var(--muted)", fontSize: 13 }}>Average Wait Time</div>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "#16a34a" }}>18 min</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ color: "var(--muted)", fontSize: 13 }}>Active Queues</div>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "#7c3aed" }}>12</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted)" }}>
                    <div>Efficiency Score</div>
                    <div style={{ fontWeight: 800, color: "var(--text)" }}>92%</div>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: "rgba(15,23,42,0.08)", marginTop: 10 }}>
                    <div style={{ width: "92%", height: "100%", borderRadius: 999, background: "var(--primary)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Easy Integration</h2>
            <div className={m.sectionSub}>Designed to work seamlessly with your existing systems</div>
          </div>

          <div className={m.cardsGrid2}>
            {[
              {
                t: "Seamless Integration",
                d: "Works with your existing Hospital Management System (HMS) and Electronic Medical Records (EMR)",
              },
              { t: "Easy Setup", d: "Quick implementation with minimal disruption to your current operations" },
              { t: "Custom API", d: "RESTful API for custom integrations and third-party applications" },
              { t: "Multi-Platform", d: "Access from any device - desktop, tablet, or smartphone" },
            ].map((c) => (
              <div key={c.t} className={`card ${m.cardItem}`}>
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
            <h2 className="h2">Simple Implementation Process</h2>
            <div className={m.sectionSub}>Get started in just 4 easy steps</div>
          </div>

          <div className={m.stepsGrid}>
            {[
              { n: 1, t: "Consultation", d: "We assess your needs and customize the solution" },
              { n: 2, t: "Setup", d: "Quick installation and system configuration" },
              { n: 3, t: "Training", d: "Comprehensive staff training and onboarding" },
              { n: 4, t: "Go Live", d: "Launch with full support and monitoring" },
            ].map((s) => (
              <div key={s.n}>
                <div className={m.stepCircle}>{s.n}</div>
                <div style={{ fontWeight: 900 }}>{s.t}</div>
                <div className={m.mutedCenter} style={{ fontSize: 13, lineHeight: 1.55 }}>
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        ctaTitle="Ready to Get Started?"
        ctaSubtitle="Schedule a personalized demo and see how PulseQ can transform your hospital"
        ctaPrimaryLabel="Book a Demo"
        ctaSecondaryLabel="Contact Sales"
      />
    </>
  );
}
