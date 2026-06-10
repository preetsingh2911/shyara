import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#main-content" data-testid="nav-logo" className="font-logo text-2xl tracking-wide">
          SHYARA<span className="text-[#FF3333]">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#FF3333]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-btn"
            className="flex items-center gap-2 border-2 border-[#0A0A0A] bg-[#FF3333] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#0a0a0a]"
          >
            <MessageCircle size={16} strokeWidth={2.5} /> Contact Us
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav data-testid="nav-mobile-menu" className="border-t-2 border-[#0A0A0A] bg-[#FAFAFA] px-6 pb-6 pt-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-bold uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-mobile-whatsapp-btn"
            className="mt-3 inline-flex items-center gap-2 border-2 border-[#0A0A0A] bg-[#FF3333] px-5 py-3 text-sm font-bold uppercase text-white"
          >
            <MessageCircle size={16} strokeWidth={2.5} /> Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};
