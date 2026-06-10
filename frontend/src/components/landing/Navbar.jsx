import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

const links = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
];

// Breaker-style rolling letter hover: text slides up, red copy slides in
const RollingText = ({ text }) => (
  <span className="relative block overflow-hidden">
    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
      {text}
    </span>
    <span
      aria-hidden="true"
      className="absolute inset-0 block translate-y-full text-[#FF3333] transition-transform duration-300 ease-out group-hover:translate-y-0"
    >
      {text}
    </span>
  </span>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wordRef = useRef(null);
  const [wordWidth, setWordWidth] = useState(90);

  // Measure the "HYARA" width once the brand font is ready
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (wordRef.current) setWordWidth(wordRef.current.scrollWidth);
    });
  }, []);

  // Smooth, scroll-linked collapse of the wordmark
  const { scrollY } = useScroll();
  const rawWidth = useTransform(scrollY, [20, 160], [wordWidth, 0]);
  const rawOpacity = useTransform(scrollY, [20, 130], [1, 0]);
  const width = useSpring(rawWidth, { stiffness: 260, damping: 34 });
  const opacity = useSpring(rawOpacity, { stiffness: 260, damping: 34 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-4 right-4 top-4 z-50 md:left-10 md:right-auto md:top-6">
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0A0A0A]/90 py-3 pl-5 pr-4 backdrop-blur-md md:justify-start md:gap-1 md:pr-5"
      >
        <Link to="/" data-testid="nav-logo" className="flex items-baseline font-logo text-xl font-bold leading-none text-white">
          <span>S</span>
          <motion.span style={{ width, opacity }} className="inline-block overflow-hidden whitespace-nowrap">
            <span ref={wordRef} className="inline-block">HYARA</span>
          </motion.span>
          <span className="text-[#FF3333]">.</span>
        </Link>

        <span className="mx-3 hidden h-5 w-px bg-white/20 md:block" />

        <nav className="hidden items-center md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `group px-4 text-[13px] font-bold uppercase tracking-wide ${
                  isActive ? "text-[#FF3333]" : "text-white"
                }`
              }
            >
              <RollingText text={l.label} />
            </NavLink>
          ))}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-btn"
            className="group px-4 text-[13px] font-bold uppercase tracking-wide text-white"
          >
            <RollingText text="Contact" />
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* CTA pill appears on scroll, Breaker-style */}
      <AnimatePresence>
        {scrolled && !open && (
          <motion.a
            key="nav-cta-pill"
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-pill"
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 hidden items-center gap-2.5 self-start rounded-xl bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-wide text-[#0A0A0A] shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
            Start a Project
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            data-testid="nav-mobile-menu"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-2 rounded-xl border border-white/10 bg-[#0A0A0A]/95 px-6 pb-6 pt-3 backdrop-blur-md md:hidden"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-base font-bold uppercase tracking-wide text-white ${
                    isActive ? "text-[#FF3333]" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-mobile-whatsapp-btn"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#FF3333] px-5 py-3 text-sm font-bold uppercase text-white"
            >
              <MessageCircle size={16} strokeWidth={2.5} /> Contact Us
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
