"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { franchiseMetrics, siteConfig } from "@/data/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.12,
    },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.84, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FranchiseSection() {
  return (
    <section
      id="franchise"
      className="relative isolate overflow-hidden bg-coffee-charcoal py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(244,223,189,0.13),transparent_28%),radial-gradient(circle_at_78%_64%,rgba(196,122,55,0.22),transparent_32%)]" />
      <div className="cinematic-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />

      <motion.div
        className="container relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={containerVariants}
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div variants={containerVariants}>
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.34em] text-primary"
              variants={revealVariants}
            >
              Kemitraan Jalani
            </motion.p>
            <motion.h2
              className="mt-6 text-balance font-display text-[clamp(3.4rem,10vw,8.2rem)] font-black uppercase leading-[0.84] tracking-normal"
              variants={revealVariants}
            >
              Buka
              <span className="block bg-gradient-to-r from-foreground via-coffee-cream to-primary bg-clip-text text-transparent">
                Jalani
              </span>
              <span className="block">Di Kotamu.</span>
            </motion.h2>
            <motion.p
              className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
              variants={revealVariants}
            >
              Tertarik membuka Jalani Kopi? Hubungi kami untuk mendapatkan informasi
              mengenai konsep, kebutuhan awal, dan proses kerja sama.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              variants={revealVariants}
            >
              <Button
                asChild
                size="lg"
                className="group h-14 bg-coffee-cream px-7 text-coffee-charcoal shadow-[0_18px_50px_rgba(196,122,55,0.25)] hover:bg-white"
              >
                <Link href={siteConfig.franchiseUrl} target="_blank" rel="noreferrer">
                  <Handshake className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Tanya Franchise
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative min-h-[32rem] overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
            variants={revealVariants}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,rgba(244,223,189,0.24),transparent_22%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(0,0,0,0.52)_64%)]" />
            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-coffee-brown/45 blur-3xl" />

            <div className="relative z-10 flex min-h-[28rem] flex-col justify-between">
              <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/85">
                    Tentang Kerja Sama
                  </p>
                  <p className="mt-5 text-2xl font-semibold leading-9 text-coffee-cream">
                    Kami akan menjelaskan konsep gerai, pilihan menu, dan kebutuhan
                    operasional secara langsung.
                  </p>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  className="relative mx-auto h-64 w-full max-w-[13rem]"
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
                  <Image
                    src="/images/menu/kopi-susu-gula-aren.webp"
                    alt="Es kopi susu gula aren Jalani Coffee"
                    fill
                    sizes="(min-width: 640px) 208px, 55vw"
                    className="object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute inset-x-2 bottom-1 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-coffee-cream/75 backdrop-blur-lg">
                    Produk Jalani
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {franchiseMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-t border-white/12 pt-4"
                  >
                    <p className="font-display text-3xl font-black uppercase text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
