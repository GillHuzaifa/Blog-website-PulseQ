import Link from "next/link";

import styles from "./SiteFooter.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqlnpow";

const SOCIAL = {
  facebook: "https://www.facebook.com/share/17tgDEYCnH/",
  instagram: "https://www.instagram.com/pulse.queue?igsh=MXcwd2h6MWd5dzdkdQ==",
  tiktok: "https://www.tiktok.com/@pulseq4?_r=1&_t=ZS-93bjxNrE1WE",
  linkedin: "https://www.linkedin.com/company/pulse-q/",
  x: "https://x.com/pulse_queue",
  youtube: "https://youtube.com/@pulsequeue-q4k?si=5ZgygW_wfEf1rC6A",
} as const;

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (isInternalHref(href)) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

type Props = {
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
};

export default function SiteFooter({
  ctaTitle = "Ready to Transform Your Healthcare Facility?",
  ctaSubtitle = "Join the leading hospitals in Pakistan already using PulseQ",
  ctaPrimaryLabel = "Book a Demo",
  ctaPrimaryHref = "/contact#contact-form",
  ctaSecondaryLabel = "Contact Us",
  ctaSecondaryHref = "/contact#contact-form",
}: Props) {
  return (
    <footer className={styles.wrap}>
      <section className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaTitle}>{ctaTitle}</div>
          <div className={styles.ctaSub}>{ctaSubtitle}</div>
          <div className={styles.ctaActions}>
            <CtaLink className={styles.ctaPrimary} href={ctaPrimaryHref}>
              {ctaPrimaryLabel}
            </CtaLink>
            <CtaLink className={styles.ctaSecondary} href={ctaSecondaryHref}>
              {ctaSecondaryLabel}
            </CtaLink>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.brand}>
              <span className={styles.logo}>P</span>
              <span>PulseQ</span>
            </div>
            <p className={styles.small}>
              Pakistan&apos;s first live digital queue management system, revolutionizing
              healthcare experiences.
            </p>
          </div>

          <div>
            <div className={styles.title}>Quick Links</div>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/solution">Our Solution</Link>
              <Link href="/hospitals">For Hospitals</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <div className={styles.title}>Contact</div>
            <div className={styles.contact}>
              <div>
                Email: <a href="mailto:pulseq.co@gmail.com">pulseq.co@gmail.com</a>
              </div>
              <div>
                Phone:{" "}
                <a href="https://wa.me/923268666776" target="_blank" rel="noreferrer">
                  +92 326 8666776
                </a>
              </div>
              <div>Institute of Space Technology, Islamabad</div>
            </div>
          </div>

          <div className={styles.newsletter}>
            <div className={styles.title}>Newsletter</div>
            <div className={styles.newsText}>
              Subscribe to get the latest updates and news.
            </div>
            <form className={styles.form} action={FORMSPREE_ENDPOINT} method="post">
              <input type="hidden" name="type" value="newsletter" />
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Email"
                required
              />
              <button className={styles.button} type="submit" aria-label="Subscribe">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.5h16c.828 0 1.5.672 1.5 1.5v8c0 .828-.672 1.5-1.5 1.5H4c-.828 0-1.5-.672-1.5-1.5V8c0-.828.672-1.5 1.5-1.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 8.5 12 13.5l7.5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.social}>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              f
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              x
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              ig
            </a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              tt
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              yt
            </a>
          </div>
          <div> 2026 PulseQ. All rights reserved.</div>
        </div>
      </section>
    </footer>
  );
}