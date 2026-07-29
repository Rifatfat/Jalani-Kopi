"use client";

import Link from "next/link";

import { motion, type Variants } from "framer-motion";
import { Coffee, MessageCircle } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const visualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 36 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.22 },
  },
};

function CoffeeVisual() {
  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_38%,rgba(196,122,55,0.3),transparent_35%),linear-gradient(145deg,rgba(244,223,189,0.08),rgba(9,8,6,0.92))] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
      variants={visualVariants}
    >
      <Image
        src="/images/menu/americano.webp"
        alt="Es americano Jalani Coffee"
        fill
        priority
        sizes="(min-width: 1024px) 17vw, 34vw"
        className="z-10 -translate-x-[23%] translate-y-[12%] -rotate-6 scale-[0.72] object-contain opacity-80 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)]"
      />
      <Image
        src="/images/menu/matcha.webp"
        alt="Es matcha Jalani Coffee"
        fill
        priority
        sizes="(min-width: 1024px) 17vw, 34vw"
        className="z-10 translate-x-[24%] translate-y-[12%] rotate-6 scale-[0.72] object-contain opacity-80 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)]"
      />
      <Image
        src="/images/menu/kopi-susu-gula-aren.webp"
        alt="Es kopi susu gula aren Jalani Coffee"
        fill
        priority
        sizes="(min-width: 1024px) 25vw, 58vw"
        className="z-20 -translate-y-[2%] scale-[1.06] object-contain drop-shadow-[0_30px_38px_rgba(0,0,0,0.6)]"
      />
      <div className="cinematic-grain absolute inset-0 z-20 opacity-[0.08] mix-blend-screen" />
      <div className="absolute inset-x-6 bottom-6 z-30 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">8 pilihan minuman</p>
        <p className="mt-1 text-sm text-coffee-cream/80">Pilih kopi atau non-kopi sesuai selera.</p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-coffee-charcoal"
    >
      <div className="cinematic-grain pointer-events-none absolute inset-0 z-10 opacity-[0.16] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(196,122,55,0.24),transparent_28%),radial-gradient(circle_at_18%_68%,rgba(244,223,189,0.12),transparent_26%),linear-gradient(135deg,rgba(9,8,6,0.3),rgba(9,8,6,0.96)_72%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-36 bottom-12 h-80 w-80 rounded-full bg-coffee-brown/35 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-20 grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-24">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.h1
            className="text-balance font-display text-[clamp(4.4rem,20vw,10.5rem)] font-black uppercase leading-[0.78] tracking-normal text-foreground"
            variants={revealVariants}
          >
            <span className="block">JALANI</span>
            <span className="block bg-gradient-to-r from-foreground via-coffee-cream to-primary bg-clip-text text-transparent">
              KOPI
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-balance text-lg leading-8 text-coffee-cream/88 sm:text-2xl sm:leading-10"
            variants={revealVariants}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            variants={revealVariants}
          >
            Tersedia pilihan kopi susu, americano, matcha, cokelat, dan minuman segar.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            variants={revealVariants}
          >
            <Button
              asChild
              size="lg"
              className="group h-14 bg-coffee-cream px-6 text-coffee-charcoal shadow-[0_18px_50px_rgba(196,122,55,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Link href="#menu">
                <Coffee className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Lihat Menu
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-14 border-white/16 bg-white/[0.04] px-6 text-foreground backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.08]"
            >
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Pesan via WhatsApp
              </Link>
            </Button>
          </motion.div>

        </motion.div>

        <motion.div
          className="relative min-h-[18rem] lg:min-h-[38rem]"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-primary/14 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-40 w-40 rounded-full border border-coffee-cream/15 bg-coffee-cream/5" />
          <CoffeeVisual />
        </motion.div>
      </div>
    </section>
  );
}
