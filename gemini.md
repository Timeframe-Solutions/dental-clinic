# Project Overview

## Business Goals
Plaza Dental Clinic is a premium dental practice based in Nairobi, Kenya. The website serves as a **lead-generation platform** designed to:
- Generate qualified appointment requests via an online form.
- Drive WhatsApp inquiries via a floating CTA.
- Establish trust and credibility through social proof and a premium aesthetic.
- Rank for high-intent dental search terms in Nairobi.

## Target Audience
- **Families:** Seeking safe, gentle care for all ages (Nairobi suburbs).
- **Young Professionals:** Interested in cosmetic treatments (whitening, braces).
- **Corporate Clients:** Seeking bulk dental packages for staff.
- **Cosmetic Patients:** High-income individuals seeking implants and veneers.

## Primary Conversion Goals
- **Macro:** Appointment form submission, WhatsApp button click.
- **Micro:** Service card clicks, gallery views, viewing opening hours.

## Brand Positioning
"Nairobi's most trusted modern dental practice — combining clinical excellence with a warm, patient-centred approach and the convenience of WhatsApp booking."

---

# Technical Context

## Existing Nuxt 4 Setup
- Framework: **Nuxt 4** using the `app/` directory structure.
- Language: **TypeScript 5**.
- Source Location: `dental-clinic/frontend`.
- Modules: `@nuxtjs/tailwindcss`, `@nuxt/image`, `@nuxtjs/seo`, `@nuxtjs/fontaine`, `@vueuse/nuxt`.

## Existing Tailwind v3 Setup
- Version: **Tailwind CSS v3.4.17**.
- Configuration: `tailwind.config.ts` (extended with project design tokens).
- Strategy: Use CSS Custom Properties for tokens, mapped in `tailwind.config.ts`.

## Project Structure Analysis
- All source files reside in the `app/` directory.
- Shared logic (state, forms) uses **Composables**.
- Data is centralized in `app/data/`.
- Server-side logic (emails via Resend) in `server/api/`.

---

# Site Architecture

| Page | URL | SEO Target |
| :--- | :--- | :--- |
| **Home** | `/` | "Dental Clinic Nairobi", "Best Dentist Nairobi" |
| **Services** | `/services` | "Dental Services Nairobi", "Affordable Dentist Nairobi" |
| **Dental Implants** | `/dental-implants` | "Dental Implants Nairobi", "Tooth Implants Nairobi" |
| **Braces** | `/braces` | "Braces Nairobi", "Orthodontist Nairobi" |
| **About** | `/about` | "Plaza Dental Clinic Nairobi" |
| **Contact** | `/contact` | "Book Dentist Nairobi", "Dental Appointment Nairobi" |
| **Privacy Policy** | `/privacy-policy` | - |
| **Terms of Service** | `/terms` | - |

## Navigation Structure
- **Header:** Sticky with Logo, Nav Links (Home, Services, Implants, Braces, About, Contact), and "Book Appointment" CTA.
- **Mobile:** Slide-down drawer via `MobileDrawer.vue`.
- **Footer:** Deep teal background, Quick Links, Contact Info, Social Icons, and Legal links.

---

# Design System

## Colors
- **Primary:** `#0D3D38` (Deep Teal) - Hero, footer, dark banners.
- **Accent:** `#2BB5A0` (Bright Teal) - Primary buttons, links, icons.
- **Backgrounds:** `#FFFFFF` (White), `#F8FAFA` (Off-white), `#E6F4F2` (Pale Teal).
- **Text:** `#0F1F1F` (Headings), `#1E3434` (Body), `#4A6464` (Muted).

## Typography
- **Font:** Inter (Google Fonts, self-hosted).
- **Headings:** H1 (3rem/2.25rem mobile), H2 (1.875rem/1.5rem mobile).
- **Body:** 1rem (16px), line-height 1.75.

## Spacing & UI Rules
- **Section Padding:** 80-96px (Desktop), 48-64px (Mobile).
- **Border Radius:** 16px (Cards), 24px (Large features), Full (Buttons/Pills).
- **Shadows:** Soft teal-tinted shadows (e.g., `rgba(13, 61, 56, 0.08)`).
- **Alternating Sections:** White -> Off-white/Pale Teal -> Dark Teal Banner.

---

# Content Mapping

| Route | Content Sections (Top to Bottom) | Copy Source |
| :--- | :--- | :--- |
| `/` | Hero, Quick Info Bar, Trust Stats, Our Story Preview, Services Preview, Why Choose Us, Gallery Preview, Testimonials, CTA Banner | `content.txt` (Home) |
| `/services` | Compact Hero, Services Grid (8 cards), Full Before/After Gallery, CTA Banner | `content.txt` (Services) |
| `/dental-implants` | Compact Hero, What are Implants, Benefits, Process Timeline, Filtered Gallery, FAQs, CTA Banner | `content.txt` (Implants) |
| `/braces` | Compact Hero, Types of Braces, Benefits, Timeline, Filtered Gallery, FAQs, CTA Banner | `content.txt` (Braces) |
| `/about` | Compact Hero, Our Story (Full), Mission/Values, Team Grid, Awards, Testimonials, CTA Banner | `content.txt` (About) |
| `/contact` | Compact Hero, Info Cards, Inline Booking Form, Map Embed, General FAQs | `content.txt` (Contact) |

---

# Component Specification (Selected)

| Component | Purpose | Key Props / Behaviour |
| :--- | :--- | :--- |
| **AppHeader** | Sticky Nav | Transparent -> Backdrop blur on scroll. Mobile drawer toggle. |
| **AppointmentModal** | Booking Form | Global singleton. Managed by `useAppointmentModal`. |
| **WhatsAppButton** | Floating CTA | Pulse animation. Tooltip. Opens WhatsApp in new tab. |
| **BaseButton** | Atomic UI | Variants: primary, secondary, ghost. Pill shape. |
| **ServiceCard** | List Item | Variants: compact (home) and detailed (services page). |
| **BeforeAfterSlider** | Gallery Item | Interactive drag handle to compare before/after images. |
| **ContactForm** | Conversion | Validates inputs. Sends data to `/api/contact`. |

---

# File-by-File Build Plan

| File Path | Responsibility | Dependencies |
| :--- | :--- | :--- |
| `app/assets/css/main.css` | Tailwind base + design token variables | - |
| `tailwind.config.ts` | Theme extension using CSS variables | `main.css` |
| `app/components/ui/BaseButton.vue` | Standardized buttons | - |
| `app/components/global/AppointmentModal.vue` | Site-wide booking modal | `useAppointmentModal`, `AppointmentForm` |
| `app/composables/useContactForm.ts` | Form submission logic | `/api/contact` |
| `app/server/api/contact.post.ts` | Handle form POST via Resend API | `RESEND_API_KEY` |
| `app/data/services.ts` | JSON data for all dental services | - |
| `app/pages/index.vue` | Home page assembly | `HeroSection`, `ServicesPreview`, etc. |

---

# Implementation Order

1.  **Layouts:** `main.css`, `AppHeader`, `AppFooter`, `default.vue`.
2.  **Shared UI:** `BaseButton`, `SectionLabel`, `PageHero`, `CtaBanner`.
3.  **Navigation:** `MobileDrawer`, active state logic.
4.  **Page Sections:** Hero, Quick Info, Stats, Service Cards.
5.  **Pages:** Home -> Services -> About -> Contact.
6.  **Forms:** `AppointmentForm`, `AppointmentModal`, `ContactForm`.
7.  **SEO:** Meta tags, `SchemaLocalBusiness`, `robots.txt`, `sitemap.xml`.
8.  **Final QA:** Responsive checks, form submission testing, Lighthouse audit.

---

# SEO Requirements

- **Local SEO:** Consistent NAP (Name, Address, Phone) in Footer and Contact page.
- **Schema.org:** `LocalBusiness` and `Dentist` JSON-LD on Home and Contact. `BreadcrumbList` on all inner pages.
- **Metadata:** Unique title/description for every page (see `content.txt`).
- **Images:** Alt text for all images. `nuxt-image` for WebP and sizing.

---

# Performance Requirements

- **Lighthouse Targets:** Performance 90+, Accessibility 90+, SEO 95+.
- **Image Strategy:** Use `<NuxtImg>` with `format="webp"`, `loading="lazy"`, and explicit `width`/`height`.
- **Fonts:** Self-host Inter via `@nuxtjs/fontaine` to prevent CLS.
- **Payload:** Minimal client-side JS. Hydrate only what's interactive.

---

# Quality Checklist

- [ ] All forms validate required fields (Name, Phone, Email, Service).
- [ ] WhatsApp button pulses and links correctly to the number in `.env`.
- [ ] Mobile drawer opens/closes and trap focus.
- [ ] Sticky header changes style on scroll.
- [ ] Before/After sliders are interactive on touch devices.
- [ ] All 8 services are listed on the Services page.
- [ ] Success message shows after form submission.
- [ ] LocalBusiness Schema is present in `<head>` on the Home page.
- [ ] 404 page exists and links back to Home.
