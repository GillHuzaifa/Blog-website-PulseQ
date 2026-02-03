import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import m from "./marketing.module.css";

const BOOK_DEMO_HREF = "/contact#contact-form";

export default function HomePage() {
  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.heroGrid}>
            <div>
              <h1 className="h1">Pakistan&apos;s First Live Digital Queue System</h1>
              <p className="lead">
                Transform your healthcare facility with real-time queue management.
                Reduce wait times, improve patient satisfaction, and streamline operations.
              </p>
              <div className={m.heroActions}>
                <Link className="btn btnPrimary" href={BOOK_DEMO_HREF}>
                  Book a Demo →
                </Link>
                <Link className="btn btnOutline" href="/solution">
                  Learn More
                </Link>
              </div>
            </div>

            <div className={m.heroMedia}>
              <div className={m.heroMediaInner}>
                <Image
                  src="/images/waiting-room.jpeg"
                  alt="PulseQ"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={m.heroBadge}>
                <span className={m.heroBadgeDot}>👤</span>
                <div>
                  <div style={{ fontWeight: 900 }}>50K+</div>
                  <div style={{ fontSize: 12, color: "rgba(100,116,139,.95)" }}>
                    Happy Patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={m.statsBar}>
        <div className="container">
          <div className={m.statsGrid}>
            <div>
              <div className={m.statNum}>50K+</div>
              <div className={m.statLabel}>Patients Served</div>
            </div>
            <div>
              <div className={m.statNum}>25+</div>
              <div className={m.statLabel}>Partner Hospitals</div>
            </div>
            <div>
              <div className={m.statNum}>40%</div>
              <div className={m.statLabel}>Wait Time Reduced</div>
            </div>
            <div>
              <div className={m.statNum}>98%</div>
              <div className={m.statLabel}>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.sectionHead}>
            <h2 className="h2">Why Choose PulseQ?</h2>
            <div className={m.sectionSub}>
              Our comprehensive digital queue management system is designed to revolutionize
              healthcare experiences
            </div>
          </div>

          <div className={m.cardsGrid}>
            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>⏱</div>
              <div className={m.cardTitle}>Real-Time Updates</div>
              <div className={m.cardText}>Live queue status and wait time predictions.</div>
            </div>
            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>📱</div>
              <div className={m.cardTitle}>Mobile-First Design</div>
              <div className={m.cardText}>Smooth experience for patients on any device.</div>
            </div>
            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>📊</div>
              <div className={m.cardTitle}>Analytics Dashboard</div>
              <div className={m.cardText}>Track performance and optimize operations.</div>
            </div>
            <div className={`card ${m.cardItem}`}>
              <div className={m.cardIcon}>🛡</div>
              <div className={m.cardTitle}>Secure & Reliable</div>
              <div className={m.cardText}>Built for healthcare-grade reliability.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.split}>
            <div>
              <h2 className="h2">Streamline Your Healthcare Operations</h2>
              <p className="lead">
                PulseQ provides a complete solution for managing patient queues in real-time,
                reducing wait times, and improving overall patient experience.
              </p>
              <div className={m.bullets}>
                {["Reduce patient wait times significantly", "Improve operational efficiency", "Enhance patient satisfaction", "Real-time queue monitoring", "Data-driven decision making", "Seamless integration with existing systems"].map(
                  (t) => (
                    <div key={t} className={m.bullet}>
                      <span className={m.check}>✓</span>
                      <span>{t}</span>
                    </div>
                  )
                )}
              </div>
              <div className={m.heroActions}>
                <Link className="btn btnPrimary" href="/solution">
                  Explore Our Solution →
                </Link>
              </div>
            </div>

            <div className={m.mediaCard}>
              <div className={m.mediaCardInner}>
                <Image
                  src="/images/waiting-room.jpeg"
                  alt="Hospital"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
