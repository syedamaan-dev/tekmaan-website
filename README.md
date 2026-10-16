# TEKMAAN — Digital Studio Website

> **Digital ideas. Beautifully engineered.**  
> An independent freelance technology and digital development studio crafting high-performance web applications, bespoke digital portals, and intelligent software interfaces with architectural precision.

---

## 🏛️ Project Overview

TEKMAAN is built from the ground up as a premier boutique studio website. It strictly avoids generic freelance templates, bloated agency gimmicks, and fabricated claims. 

### Core Positioning
- **Independent Senior Craftsmanship**: Direct collaboration with a senior engineer and researcher, eliminating account manager bloat and junior handoffs.
- **Design-Led Engineering**: Bridging high-fidelity Figma design tokens with sub-second Next.js edge performance.
- **100% IP & Code Ownership**: Complete Git repository transfer, typed documentation, and zero proprietary lock-in.

---

## 🚀 Verified Project Portfolio

All showcased work adheres to strict factual accuracy:

1. **SR University PRAGATHI 2K26 Expo & Jury Portal**
   - *Status*: Verified Client Production Engagement
   - *Public Deployment*: [https://www.sruprojectexpo.in/](https://www.sruprojectexpo.in/)
   - *Highlights*: Dual-interface architecture featuring public hackathon schedules and a tablet-optimized live Jury Evaluation system with 44px+ touch steppers, real-time rubric calculation, and offline score persistence.

2. **AEGIS-X / SKYGUARD-X**
   - *Status*: Verified Personal Engineering Platform (Independent R&D)
   - *Highlights*: Model-agnostic reliability framework wrapping trained ML models to detect Out-of-Distribution (OOD) inputs, calculate epistemic uncertainty, and track feature drift.

3. **AEGIS-PRISM**
   - *Status*: Verified Research & Development Initiative
   - *Highlights*: Neural network stress engine evaluating decision boundary collapse under progressive adversarial perturbations and high-dimensional noise vectors.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Server & Client Components)
- **Language**: TypeScript (Strict typing enabled)
- **Styling**: Tailwind CSS v4 with custom design tokens, fluid clamp typography, and micro-animations
- **Motion & Interaction**: `motion/react` for GPU-efficient scroll reveals, cursor-reactive ambient lighting, and staggered headline text
- **Icons**: Lucide Icons (`lucide-react`)
- **Forms & Validation**: Zod schema validation on client and server
- **Email Delivery**: Resend integration with automatic graceful fallback in unconfigured dev modes
- **Fonts**: DotGothic16 (Headings) & Alata (Body & UI) via `next/font/google`
- **Hosting Target**: Vercel / Edge Network

---

## 📂 Project Structure

```
tekmaan/
├── public/                 # Static assets, mockups, and images
│   └── images/
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── api/
│   │   │   └── contact/    # Secure Zod & Resend enquiry handler
│   │   ├── about/          # Studio philosophy, model & technical foundation
│   │   ├── services/       # Deep service breakdowns & deliverables
│   │   ├── work/           # Verified portfolio grid
│   │   │   └── [slug]/     # Dynamic case study pages
│   │   ├── process/        # 4-stage methodology & agency comparison
│   │   ├── contact/        # Client enquiry form & direct channels
│   │   ├── privacy/        # Transparent privacy policy
│   │   ├── terms/          # Terms of engagement & IP transfer policy
│   │   ├── globals.css     # Design tokens, clamps, mesh gradients, & marquee
│   │   ├── layout.tsx      # Root layout, Google Fonts, and metadata
│   │   ├── page.tsx        # Homepage assembling all sections
│   │   ├── robots.ts       # Crawl policy
│   │   └── sitemap.ts      # Automated XML sitemap
│   ├── components/
│   │   ├── home/           # Hero, Ticker, WhyTekmaan, Services, FAQ, CTA
│   │   ├── layout/         # Sticky glass Navbar & high-contrast Footer
│   │   ├── work/           # Pixel-perfect live ProjectPreviewVisuals
│   │   └── contact/        # Interactive ContactForm with honeypot trap
│   ├── config/
│   │   └── site.ts         # Central studio configuration & content store
│   └── lib/
│       ├── utils.ts        # Class merging (clsx + twMerge)
│       └── validations/    # Zod schemas for contact inquiries
├── .env.example            # Documented environment variables
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js `v20.x` or higher (Tested on `v24.15.0`)
- npm `v10.x` or higher

### Installation & Run

1. Clone or navigate to the project directory:
   ```bash
   cd tekmaan
   ```

2. Copy the environment configuration:
   ```bash
   cp .env.example .env.local
   # On Windows PowerShell:
   Copy-Item .env.example .env.local
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## ✉️ Contact Form & Resend Setup

The contact system uses a multi-tier pipeline:
1. **Client & Server-Side Validation**: Guarded by `zod` in `src/lib/validations/contact.ts`.
2. **Honeypot Anti-Spam**: Invisible form field traps automated bots with zero friction for human users.
3. **Resend Email Gateway**:
   - If `RESEND_API_KEY` is provided in `.env.local`, inquiries are dispatched directly to your destination inbox.
   - If unconfigured, the endpoint securely logs the inquiry to the server console and returns an honest status (no fake delivery notifications).

To activate production email delivery:
1. Sign up at [resend.com](https://resend.com) and create an API key.
2. In `.env.local` set:
   ```env
   RESEND_API_KEY="re_123456789..."
   RESEND_FROM_EMAIL="TEKMAAN <onboarding@resend.dev>"
   STUDIO_INBOX_EMAIL="tekmaan.connect@gmail.com"
   NEXT_PUBLIC_STUDIO_EMAIL="tekmaan.connect@gmail.com"
   NEXT_PUBLIC_WHATSAPP_NUMBER="+919063127547"
   ```

---

## ☁️ Vercel Deployment Instructions

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `tekmaan-website` repository.
4. Set the Framework Preset to **Next.js**.
5. Under **Environment Variables**, add the variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g. `https://tekmaan.com`)
   - `NEXT_PUBLIC_STUDIO_EMAIL`: Studio contact email (`tekmaan.connect@gmail.com`)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp chat number (`+919063127547`)
   - `STUDIO_INBOX_EMAIL`: Destination inbox (`tekmaan.connect@gmail.com`)
   - `RESEND_API_KEY`: Your Resend API key (optional)
6. Click **Deploy**. Vercel will build and distribute the site globally on edge nodes.

---

## 🎯 Quality & Performance Benchmarks

- **Core Web Vitals Target**: 95+ performance across Mobile and Desktop.
- **Responsive Ergonomics**: Fluid clamp typography and flex layouts tested at 375px, 768px, 1024px, and 1440px+.
- **Accessibility**: Semantic HTML5 landmarks, full keyboard tab focus rings, accessible accordion ARIA attributes, and `prefers-reduced-motion` compliance.

---

## 📜 License & Copyright

© 2026 TEKMAAN Studio. Independently operated digital technology studio. All rights reserved.
