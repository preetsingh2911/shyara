import { motion } from "framer-motion";
import { Search, FileText, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    text: "Free consultation. We map out your goals and technical requirements before recommending a single thing.",
  },
  {
    icon: FileText,
    title: "Strategy & Scope",
    text: "You receive clear deliverables, wireframes, timelines, and pricing in writing.",
  },
  {
    icon: Hammer,
    title: "Build & Execute",
    text: "We design, develop, and launch. You stay in the loop with regular WhatsApp updates.",
  },
  {
    icon: TrendingUp,
    title: "Review & Grow",
    text: "Your site is live. Now we track the data, launch campaigns, and adjust based on real feedback.",
  },
];

export const Process = () => (
  <section id="process" data-testid="process-section" className="py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF3333]">The Process</p>
        <h2 data-testid="process-headline" className="font-heading text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          How We Take Your Project{" "}
          <span className="text-[#0A0A0A]/40">From Vision to Launch.</span>
        </h2>
      </motion.div>

      <div className="grid border-2 border-[#0A0A0A] bg-white md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            data-testid={`process-step-${i + 1}`}
            className="group relative border-b-2 border-[#0A0A0A] p-8 transition-colors last:border-b-0 hover:bg-[#0A0A0A] hover:text-white md:border-b-0 md:border-r-2 md:last:border-r-0 md:p-10"
          >
            <span className="font-heading block text-5xl font-black tracking-tighter text-[#0A0A0A]/10 transition-colors group-hover:text-[#FF3333]">
              0{i + 1}
            </span>
            <s.icon size={26} strokeWidth={2} className="mt-6 text-[#FF3333]" />
            <h3 className="font-heading mt-4 text-xl font-black tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0A0A0A]/60 transition-colors group-hover:text-white/70">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
