import Link from "next/link";

import { footerLinks, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-coffee-charcoal"
    >
      <div className="cinematic-grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-xl font-black tracking-[0.24em] text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Instagram / WhatsApp / Condet</p>
          <p>Copyright 2026 JALANI KOPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
