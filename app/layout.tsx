import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Conversion Landing — High-Converting Next.js Landing Page",
  description:
    "A clean, conversion-driven landing page blueprint with social proof, testimonials, pricing, FAQ, and a final CTA—built with Next.js, Tailwind, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans bg-white text-gray-900`}>
        <NavbarSticky
          logo="Conversion Landing"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "Pricing", href: "/#pricing" },
            { label: "FAQ", href: "/#faq" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Get the template"
          ctaHref="/#pricing"
        />
        {children}
        <FooterMultiColumn
          brand="Conversion Landing"
          description="A simple, conversion-driven landing page blueprint."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/#features" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Pricing", href: "/#pricing" },
                { label: "FAQ", href: "/#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy", href: "/privacy" },
              ],
            },
          ]}
          copyright="© 2026 Conversion Landing Studio. All rights reserved."
        />
      </body>
    </html>
  );
}
