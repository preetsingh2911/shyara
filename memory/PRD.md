# Shyara Landing Page Redesign — PRD

## Original Problem Statement
Redesign the landing page at https://marketing.shyara.co.in/ to position **website development front and center**, with marketing services as the supporting fuel. User provided full copy/UX strategy: new hero ("We Build Websites That Work."), social proof bar, featured-service bento layout, on-page portfolio mockups, 4-step process, and WhatsApp-driven final CTA.

## User Choices
- Visual style: Fresh light, clean & modern (design agent chose Swiss/neo-brutalist, Signal Red #FF3333 accent)
- WhatsApp: from existing site → wa.me/919584661610 (found via site JS bundle; email: marketing.shyara@gmail.com)
- Portfolio: polished placeholder mockups (link out to marketing.shyara.co.in/samples)
- Scope: landing page only — **frontend-only, no backend used**

## Architecture
- React (CRA + craco), Tailwind, framer-motion, lucide-react
- Single route `/` in `App.js`; components in `/app/frontend/src/components/landing/` (Navbar, Hero, SocialProofBar, Services, Portfolio, Process, FinalCTA, Footer)
- Contact constants in `/app/frontend/src/constants/site.js`
- Fonts: Cabinet Grotesk (headings) + Satoshi (body) via Fontshare
- Backend: untouched template, not called by frontend

## Implemented (June 2026)
- Hero with new H1, sub-headline, dual CTAs (portfolio scroll + WhatsApp discovery call), marquee ticker
- Black social proof bar: 50+ brands | 100+ projects | 5+ years
- Services: featured full-width web dev card (mockup image, hard shadow) + 3 muted secondary cards (App Dev, Ads 20% flat fee, Social ₹7,999/mo)
- Portfolio: 3 browser-chrome mockup cards with scroll-on-hover effect, asymmetric offset, CTA to full portfolio
- Process: scroll-driven snaking timeline — SVG line draws itself as you scroll, connecting and activating diamond dots + step cards (zigzag on desktop, vertical line on mobile) via framer-motion useScroll/pathLength (ScrollTimeline.jsx)
- Final CTA: WhatsApp green button + dark footer with email/phone/nav
- Fully responsive (tested 1920px & 390px), data-testids on all interactive elements
- Tested: 46/46 frontend checks passed (iteration_1)

## Backlog
- P1: Swap placeholder portfolio mockups with real project screenshots/links
- P2: Lead capture form with backend storage (deferred per user choice)
- P2: Testimonials section, FAQ/SEO schema, analytics
