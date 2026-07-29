import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { navigationItems, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/65 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="#hero"
          className="font-display text-sm font-black tracking-[0.24em] text-foreground transition-colors hover:text-coffee-cream"
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-coffee-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="shrink-0 bg-coffee-cream text-coffee-charcoal hover:-translate-y-0.5 hover:bg-white"
        >
          <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Pesan
          </Link>
        </Button>
      </div>
    </header>
  );
}
