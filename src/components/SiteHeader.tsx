"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./SiteHeader.module.css";

const BOOK_DEMO_HREF = "/contact#contact-form";

const nav = [
  { label: "Home", href: "/" },
  { label: "Our Solution", href: "/solution" },
  { label: "For Hospitals", href: "/hospitals" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>P</span>
          <span>PulseQ</span>
        </Link>

        <nav className={styles.nav}>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={BOOK_DEMO_HREF} className={styles.cta}>
          Book a Demo
        </Link>
      </div>
    </header>
  );
}
