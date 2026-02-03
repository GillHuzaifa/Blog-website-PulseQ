"use client";

import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";

import SiteFooter from "@/components/SiteFooter";
import m from "../marketing.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqlnpow";
const BOOK_DEMO_HREF = "/contact#contact-form";
const OFFICE_MAPS_HREF =
  "https://www.google.com/maps?q=Institute%20of%20Space%20Technology%20Islamabad";

const SOCIAL = {
  facebook: "https://www.facebook.com/share/17tgDEYCnH/",
  instagram: "https://www.instagram.com/pulse.queue?igsh=MXcwd2h6MWd5dzdkdQ==",
  tiktok: "https://www.tiktok.com/@pulseq4?_r=1&_t=ZS-93bjxNrE1WE",
  linkedin: "https://www.linkedin.com/company/pulse-q/",
  x: "https://x.com/pulse_queue",
  youtube: "https://youtube.com/@pulsequeue-q4k?si=5ZgygW_wfEf1rC6A",
} as const;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className={m.hero}>
        <div className="container">
          <div className={m.sectionHead}>
            <h1 className="h1">Get in Touch</h1>
            <div className={m.sectionSub}>
              Have questions about PulseQ? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </div>
          </div>

          <div className={m.cardsGrid} style={{ marginTop: 30 }}>
            {[
              { t: "Email", v: "pulseq.co@gmail.com", i: "✉" },
              { t: "Phone", v: "+92 326 8666776", i: "☎" },
              { t: "Office", v: "Institute of Space Technology, Islamabad", i: "📍" },
              { t: "Working Hours", v: "Mon - Fri: 9:00 AM - 6:00 PM", i: "🕒" },
            ].map((c) => (
              <div key={c.t} className={`card ${m.cardItem}`} style={{ textAlign: "center" }}>
                <div className={m.cardIcon} style={{ margin: "0 auto 14px" }}>
                  {c.i}
                </div>
                <div style={{ fontWeight: 900 }}>{c.t}</div>
                <div className={m.mutedCenter} style={{ fontSize: 13 }}>
                  {c.t === "Email" ? (
                    <a href="mailto:pulseq.co@gmail.com">pulseq.co@gmail.com</a>
                  ) : c.t === "Phone" ? (
                    <a
                      href="https://wa.me/923268666776"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +92 326 8666776
                    </a>
                  ) : c.t === "Office" ? (
                    <a href={OFFICE_MAPS_HREF} target="_blank" rel="noreferrer">
                      Institute of Space Technology, Islamabad
                    </a>
                  ) : (
                    c.v
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={m.split}>
            <div className="card" style={{ padding: 22 }}>
              <h2 className="h2" style={{ fontSize: 24 }}>
                Send us a Message
              </h2>
              <form
                id="contact-form"
                onSubmit={onSubmit}
                style={{ marginTop: 16, display: "grid", gap: 14 }}
              >
                <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700 }}>
                  Full Name *
                  <input
                    name="name"
                    style={inputStyle}
                    placeholder="Enter your name"
                    required
                    type="text"
                    autoComplete="name"
                  />
                </label>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700 }}>
                    Email Address *
                    <input
                      name="email"
                      style={inputStyle}
                      placeholder="your@email.com"
                      required
                      type="email"
                      autoComplete="email"
                    />
                  </label>
                  <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700 }}>
                    Phone Number
                    <input
                      name="phone"
                      style={inputStyle}
                      placeholder="+92 ..."
                      type="tel"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700 }}>
                  Subject *
                  <select name="subject" style={inputStyle} defaultValue="" required>
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>Book a Demo</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </label>

                <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700 }}>
                  Message *
                  <textarea
                    name="message"
                    style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </label>

                <button
                  className="btn btnPrimary"
                  type="submit"
                  style={{ width: "100%" }}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" ? (
                  <div style={{ fontSize: 13, color: "#16a34a", fontWeight: 700, textAlign: "center" }}>
                    Message sent successfully. We&apos;ll get back to you soon.
                  </div>
                ) : null}
                {status === "error" ? (
                  <div style={{ fontSize: 13, color: "#dc2626", fontWeight: 700, textAlign: "center" }}>
                    Something went wrong. Please try again.
                  </div>
                ) : null}
              </form>
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              <div className="card" style={{ padding: 22 }}>
                <h2 className="h2" style={{ fontSize: 24 }}>
                  Our Location
                </h2>
                <div style={{ marginTop: 14, borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
                  <iframe
                    title="PulseQ Location"
                    src="https://www.google.com/maps?q=Institute%20of%20Space%20Technology%20Islamabad&output=embed"
                    width="100%"
                    height="240"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>
                  📍 Institute of Space Technology, Islamabad
                </div>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <h2 className="h2" style={{ fontSize: 24 }}>
                  Connect With Us
                </h2>
                <div className={m.sectionSub}>
                  Follow us on social media for the latest updates, news, and insights about PulseQ.
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                  {[
                    { label: "f", href: SOCIAL.facebook, aria: "Facebook" },
                    { label: "x", href: SOCIAL.x, aria: "X (Twitter)" },
                    { label: "in", href: SOCIAL.linkedin, aria: "LinkedIn" },
                    { label: "ig", href: SOCIAL.instagram, aria: "Instagram" },
                    { label: "tt", href: SOCIAL.tiktok, aria: "TikTok" },
                    { label: "yt", href: SOCIAL.youtube, aria: "YouTube" },
                  ].map((x) => (
                    <a
                      key={x.aria}
                      href={x.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={x.aria}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(15,23,42,0.06)",
                        color: "var(--text)",
                        fontWeight: 900,
                        textDecoration: "none",
                      }}
                    >
                      {x.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 22, background: "linear-gradient(135deg, rgba(37,99,235,.12), rgba(37,99,235,0))" }}>
                <h2 className="h2" style={{ fontSize: 24 }}>
                  Need Quick Answers?
                </h2>
                <div className={m.sectionSub}>
                  Check out our frequently asked questions or schedule a demo to see PulseQ in action.
                </div>
                <div style={{ marginTop: 14 }}>
                  <a className="btn btnPrimary" href={BOOK_DEMO_HREF}>
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter ctaTitle="Ready to talk?" ctaSubtitle="We typically respond within 24 hours." />
    </>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  marginTop: 8,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  outline: "none",
  background: "rgba(255,255,255,.9)",
};
