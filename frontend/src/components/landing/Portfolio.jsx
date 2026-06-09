import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SITE } from "@/constants/site";

const projects = [
  {
    name: "Aurelia Interiors",
    category: "Premium Studio Website",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "FitForge Gym",
    category: "Local Business + Booking",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cravings Café",
    category: "Restaurant Landing Page",
    image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1200&auto=format&fit=crop",
  },
];

export const Portfolio = () => (
  <section id="portfolio" data-testid="portfolio-section" className="border-y-2 border-[#0A0A0A] bg-[#F0EEE9] py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF3333]">Our Work</p>
        <h2 data-testid="portfolio-headline" className="font-heading text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          Don't Just Take Our Word For It.
          <br />
          <span className="text-[#0A0A0A]/40">See What We've Built.</span>
        </h2>
        <p className="mt-5 text-base text-[#0A0A0A]/70 md:text-lg">
          Real websites designed for real businesses.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={SITE.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            data-testid={`portfolio-card-${i + 1}`}
            className={`group block border-2 border-[#0A0A0A] bg-white transition-all hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] ${
              i === 1 ? "md:translate-y-10" : ""
            }`}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 flex-1 truncate bg-white px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/40">
                {p.name.toLowerCase().replace(/[^a-z]/g, "")}.in
              </span>
            </div>
            {/* Scrolling mockup */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} website mockup`}
                loading="lazy"
                className="h-[150%] w-full object-cover object-top transition-transform duration-[2500ms] ease-in-out group-hover:-translate-y-1/3"
              />
            </div>
            <div className="flex items-center justify-between border-t-2 border-[#0A0A0A] p-5">
              <div>
                <h3 className="font-heading text-lg font-black tracking-tight">{p.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/50">{p.category}</p>
              </div>
              <ArrowUpRight
                size={22}
                strokeWidth={2.5}
                className="transition-all group-hover:rotate-45 group-hover:text-[#FF3333]"
              />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center md:mt-24"
      >
        <a
          href={SITE.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="portfolio-browse-cta"
          className="group inline-flex items-center gap-2 border-2 border-[#0A0A0A] bg-[#FF3333] px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_#0a0a0a]"
        >
          Browse Full Interactive Portfolio
          <ExternalLink size={18} strokeWidth={2.5} />
        </a>
      </motion.div>
    </div>
  </section>
);
