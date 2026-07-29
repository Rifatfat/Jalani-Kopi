"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Handshake, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FinalCtaSection() {
  return (
    <section
      id="order"
      className="relative isolate overflow-hidden bg-background py-24 sm:py-28 lg:py-40"
    >
      <div className="cinematic-divider" />
      <div className="cinematic-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(244,223,189,0.14),transparent_28%),radial-gradient(circle_at_78%_40%,rgba(196,122,55,0.22),transparent_30%),linear-gradient(180deg,rgba(9,8,6,0.08),rgba(9,8,6,0.92)_86%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[80vw] -translate-x-1/2 rounded-full bg-coffee-brown/25 blur-3xl" />

      <motion.div
        className="container relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.34em] text-primary"
            variants={revealVariants}
          >
            Pesan lewat WhatsApp
          </motion.p>
          <motion.h2
            className="mt-7 text-balance font-display text-[clamp(3.6rem,12vw,9rem)] font-black uppercase leading-[0.84] tracking-normal"
            variants={revealVariants}
          >
            Mau Minum
            <span className="block bg-gradient-to-r from-foreground via-coffee-cream to-primary bg-clip-text text-transparent">
              Apa Hari
            </span>
            <span className="block">Ini?</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
            variants={revealVariants}
          >
            Pilih minuman dari menu kami, lalu kirim pesanan melalui WhatsApp. Tim Jalani
            akan membantu proses selanjutnya.
          </motion.p>

          <motion.div
            className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row"
            variants={revealVariants}
          >
            <Button
              asChild
              size="lg"
              className="group h-14 w-full bg-coffee-cream px-7 text-coffee-charcoal shadow-[0_18px_60px_rgba(196,122,55,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Pesan via WhatsApp
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-14 w-full border-white/16 bg-white/[0.04] px-7 text-foreground backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.08] sm:w-auto"
            >
              <Link href={siteConfig.franchiseUrl} target="_blank" rel="noreferrer">
                <Handshake className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Info Franchise
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
