"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { featuredMenu, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturedMenuSection() {
  return (
    <section
      id="menu"
      className="relative isolate overflow-hidden bg-coffee-charcoal py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(244,223,189,0.1),transparent_27%),radial-gradient(circle_at_86%_68%,rgba(196,122,55,0.18),transparent_30%)]" />
      <div className="cinematic-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />

      <motion.div
        className="container relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={containerVariants}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div variants={revealVariants}>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-primary">
              Menu Jalani
            </p>
            <h2 className="mt-6 text-balance font-display text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.88] tracking-normal">
              Pilih
              <span className="block bg-gradient-to-r from-foreground via-coffee-cream to-primary bg-clip-text text-transparent">
                Minumanmu
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="relative max-w-xl lg:ml-auto"
            variants={revealVariants}
          >
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              Delapan pilihan kopi dan non-kopi. Tinggal pilih yang sesuai selera, lalu pesan
              langsung melalui WhatsApp.
            </p>
            <Button
              asChild
              className="mt-7 bg-coffee-cream text-coffee-charcoal hover:bg-white"
            >
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Pesan via WhatsApp
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
        >
          {featuredMenu.map((item, index) => (
            <motion.article
              key={item.name}
              className={cn(
                "group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.06]",
                index % 2 === 1 ? "sm:mt-8 xl:mt-0" : "",
              )}
              variants={revealVariants}
            >
              <div
                className={cn(
                  "absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br opacity-35 blur-3xl transition duration-500 group-hover:opacity-65",
                  item.accent,
                )}
              />

              <div className="relative z-10 flex min-h-[26rem] flex-col">
                <div className="relative mx-auto h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1280px) 45vw, 24vw"
                    className="object-contain drop-shadow-[0_22px_30px_rgba(0,0,0,0.45)] transition duration-700 ease-out group-hover:scale-[1.06] group-hover:-rotate-1"
                  />
                </div>
                <div className="mt-2 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/85">
                    {item.tone}
                  </p>
                  <h3 className="mt-3 max-w-[15rem] font-display text-3xl font-black uppercase leading-none text-foreground">
                    {item.name}
                  </h3>
                </div>
                <p className="mt-4 max-w-[18rem] text-sm leading-6 text-coffee-cream/72">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
