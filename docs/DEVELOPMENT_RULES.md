# JALANI KOPI - Development Rules

## Tech Stack

Required stack:

* Next.js 15
* TypeScript
* TailwindCSS
* Framer Motion
* shadcn/ui
* Lucide React
* Lenis Smooth Scroll

---

# Architecture Rules

Use:

* modular components
* reusable sections
* clean folder structure
* scalable architecture

Avoid:

* overengineering
* unnecessary abstraction
* complex state management

---

# Project Structure

Use structure:

src/
├── app/
├── components/
│   ├── sections/
│   ├── ui/
│   └── animations/
├── data/
├── lib/
├── styles/
└── assets/

---

# Component Rules

Requirements:

* reusable components
* TypeScript interfaces
* clean props
* semantic HTML

Avoid:

* giant component files
* duplicated logic
* messy structure

---

# Animation Rules

Use Framer Motion carefully.

Requirements:

* production-safe animation
* smooth performance
* mobile optimization
* avoid hydration issues

Avoid:

* excessive animation
* animation on every element
* unnecessary parallax layers
* performance-heavy effects

---

# Performance Rules

Website must:

* load quickly
* feel smooth
* remain responsive

Requirements:

* optimized images
* lazy loading where needed
* minimal unnecessary dependencies

Avoid:

* huge video backgrounds
* massive assets
* unnecessary packages

---

# Responsive Rules

Website must work perfectly on:

* mobile
* tablet
* desktop

Priority:

1. Mobile
2. Desktop
3. Tablet

---

# Deployment Rules

Deployment target:

* Vercel

Requirements:

* clean production build
* no build errors
* no TypeScript errors
* no hydration mismatch
* stable dependencies

Avoid:

* unstable packages
* experimental dependencies
* outdated libraries

---

# Code Quality Rules

Requirements:

* readable code
* maintainable structure
* scalable organization
* clean naming conventions

Use:

* TypeScript strict mode
* reusable utility functions
* component separation

---

# UI Rules

The UI must NOT feel like:

* dashboard
* admin panel
* SaaS template
* ecommerce template

The UI SHOULD feel:

* cinematic
* modern
* immersive
* premium
* editorial

---

# Important Priority

Priority order:

1. Stability
2. Responsiveness
3. Visual quality
4. Smooth animation
5. Clean architecture

Always prioritize production stability over visual complexity.
