import SiteFooter from "@/components/SiteFooter";
import m from "../marketing.module.css";

const BOOK_DEMO_HREF = "/contact#contact-form";

export default function SolutionPage() {
  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.sectionHead}>
            <h1 className="h1">Our Solution</h1>
            <div className={m.sectionSub}>
              A comprehensive digital queue management system designed to transform healthcare
              experiences and optimize hospital operations
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">How PulseQ Works</h2>
            <div className={m.sectionSub}>
              A simple, seamless process from check-in to consultation
            </div>
          </div>

          <div className={m.stepsGrid}>
            {[
              {
                n: 1,
                t: "Patient Registration",
                d: "Patients check in digitally via mobile app, web portal, or kiosk",
              },
              {
                n: 2,
                t: "Queue Assignment",
                d: "System automatically assigns patients to appropriate queues based on department and priority",
              },
              {
                n: 3,
                t: "Real-Time Updates",
                d: "Patients receive live updates on their position and estimated wait time",
              },
              {
                n: 4,
                t: "Smart Notifications",
                d: "Automated alerts notify patients when it's their turn to see the doctor",
              },
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

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Powerful Features</h2>
            <div className={m.sectionSub}>Everything you need to manage queues efficiently</div>
          </div>

          <div className={m.cardsGrid3}>
            {[
              {
                i: "⏱",
                t: "Real-Time Queue Tracking",
                d: "Live updates on queue status, position, and estimated wait times accessible from any device.",
                bullets: [
                  "Instant notifications",
                  "Live position tracking",
                  "Accurate wait time predictions",
                ],
              },
              {
                i: "📱",
                t: "Mobile-First Experience",
                d: "Patients can join queues, track their position, and receive notifications on their smartphones.",
                bullets: ["iOS & Android apps", "Web-based interface", "SMS notifications"],
              },
              {
                i: "📊",
                t: "Analytics & Insights",
                d: "Comprehensive dashboard with real-time analytics to optimize operations and reduce bottlenecks.",
                bullets: ["Performance metrics", "Custom reports", "Trend analysis"],
              },
              {
                i: "🔔",
                t: "Smart Notifications",
                d: "Automated alerts keep patients informed about their queue status and appointment times.",
                bullets: ["Push notifications", "SMS alerts", "Email updates"],
              },
              {
                i: "👥",
                t: "Patient Management",
                d: "Efficiently manage patient flow with intelligent queue algorithms and priority handling.",
                bullets: ["Priority queues", "Appointment scheduling", "Walk-in management"],
              },
              {
                i: "⚙️",
                t: "Easy Integration",
                d: "Seamlessly integrates with your existing hospital management systems and workflows.",
                bullets: ["API access", "Custom integrations", "EMR compatibility"],
              },
            ].map((c) => (
              <div key={c.t} className={`card ${m.cardItem}`}>
                <div className={m.cardIcon}>{c.i}</div>
                <div className={m.cardTitle}>{c.t}</div>
                <div className={m.cardText}>{c.d}</div>
                <div className={m.bullets} style={{ marginTop: 14 }}>
                  {c.bullets.map((b) => (
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
            <h2 className="h2">Benefits for Everyone</h2>
            <div className={m.sectionSub}>
              PulseQ creates value for both patients and healthcare providers
            </div>
          </div>

          <div className={m.cardsGrid2}>
            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>⚡</div>
              <div className={m.cardTitle}>For Patients</div>
              <div className={m.bullets} style={{ marginTop: 14 }}>
                {["Reduced waiting time", "Better planning & flexibility", "Less crowded waiting rooms", "Real-time status updates"].map(
                  (t) => (
                    <div key={t} className={m.bullet}>
                      <span className={m.check}>✓</span>
                      <span>{t}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>✅</div>
              <div className={m.cardTitle}>For Hospitals</div>
              <div className={m.bullets} style={{ marginTop: 14 }}>
                {["Improved operational efficiency", "Better resource allocation", "Enhanced patient satisfaction", "Data-driven decision making"].map(
                  (t) => (
                    <div key={t} className={m.bullet}>
                      <span className={m.check}>✓</span>
                      <span>{t}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28, textAlign: "center" }}>
            <a className="btn btnPrimary" href={BOOK_DEMO_HREF}>
              Book a Demo →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter
        ctaTitle="Ready to Experience PulseQ?"
        ctaSubtitle="Schedule a personalized demo to see how PulseQ can transform your healthcare facility"
        ctaPrimaryLabel="Book a Demo"
        ctaSecondaryLabel="Contact Us"
      />
    </>
  );
}
