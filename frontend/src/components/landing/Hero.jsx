import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/constants/site";

const ticker = [
  "Custom Websites",
  "Landing Pages",
  "E-Commerce",
  "Local SEO",
  "Ads Management",
  "Social Media",
  "App Development",
];

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-block border-2 border-[#0A0A0A] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
        data-testid="hero-badge"
      >
        Web Development Studio + Growth Marketing
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        data-testid="hero-headline"
        className="font-heading max-w-5xl text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl"
      >
        We Build Websites
        <br />
        That <span className="text-[#FF3333]">Work.</span>
        <span className="mt-3 block text-xl font-bold tracking-tight text-[#0A0A0A]/60 sm:text-2xl lg:text-3xl">
          (And Market Them So People See Them.)
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-testid="hero-subheadline"
        className="mt-8 max-w-2xl text-base leading-relaxed text-[#0A0A0A]/70 md:text-lg"
      >
        Fast, custom-designed websites tailored to convert clicks into clients.
        Once your digital storefront is perfect, our targeted ads and social
        media management drive the traffic you need to scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <a
          href="#portfolio"
          data-testid="hero-primary-cta"
          className="group inline-flex items-center justify-center gap-2 border-2 border-[#0A0A0A] bg-[#FF3333] px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_#0a0a0a]"
        >
          View Our Website Portfolio
          <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-secondary-cta"
          className="inline-flex items-center justify-center gap-2 border-2 border-[#0A0A0A] bg-transparent px-8 py-4 font-bold uppercase tracking-wide transition-all hover:bg-[#0A0A0A] hover:text-white"
        >
          <Phone size={18} strokeWidth={2.5} /> Book a Free Discovery Call
        </a>
      </motion.div>
    </div>

    {/* Ticker strip */}
    <div className="overflow-hidden border-y-2 border-[#0A0A0A] bg-white py-3" data-testid="hero-ticker">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[...ticker, ...ticker].map((item, i) => (
          <span key={i} className="flex items-center text-sm font-bold uppercase tracking-widest">
            <span className="px-6">{item}</span>
            <span className="text-[#FF3333]">✱</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);
