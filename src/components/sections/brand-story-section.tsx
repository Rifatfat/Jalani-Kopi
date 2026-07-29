"use client";

import { motion, type Variants } from "framer-motion";
import { storyPrinciples } from "@/data/site";

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
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function BrandStorySection() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-background py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-coffee-charcoal to-transparent" />
      <div className="cinematic-grain pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-screen" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-coffee-brown/20 blur-3xl" />

      <motion.div
        className="container relative z-10 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
        variants={containerVariants}
      >
        <div className="relative">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.34em] text-primary"
            variants={revealVariants}
          >
            Tentang Jalani
          </motion.p>

          <motion.div
            className="mt-10 max-w-sm border-l border-primary/50 pl-6"
            variants={revealVariants}
          >
            <p className="text-xl leading-9 text-coffee-cream/82">
              Buat pagi sebelum kerja, waktu istirahat, atau ngobrol santai bareng teman.
            </p>
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -12, 0] }}
            className="absolute -bottom-10 right-0 hidden h-36 w-36 rounded-full border border-primary/20 bg-primary/10 blur-[1px] lg:block"
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div>
          <motion.h2
            className="text-balance font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-normal"
            variants={revealVariants}
          >
            Kopi Enak,
            <span className="block bg-gradient-to-r from-coffee-cream via-foreground to-primary bg-clip-text text-transparent">
              Tanpa Banyak
            </span>
            <span className="block">Ribet.</span>
          </motion.h2>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
            variants={revealVariants}
          >
            Jalani Kopi menyajikan pilihan kopi dan non-kopi dengan rasa yang familiar dan
            mudah dinikmati. Pilih minuman yang kamu suka, pesan lewat WhatsApp, lalu lanjutkan
            harimu.
          </motion.p>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            variants={containerVariants}
          >
            {storyPrinciples.map((item) => (
              <motion.article
                key={item.label}
                className="group relative overflow-hidden border-t border-white/12 pt-6"
                variants={revealVariants}
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                  {item.label}
                </p>
                <h3 className="mt-5 font-display text-3xl font-black uppercase text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
