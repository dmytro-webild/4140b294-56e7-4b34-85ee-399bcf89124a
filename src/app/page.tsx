"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Zap, ShieldCheck, Wrench, Users, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Services", id: "#services" },
              { name: "Projects", id: "#projects" },
              { name: "Team", id: "#about" },
              { name: "Contact", id: "#contact" },
            ]}
            brandName="Plumber Near Me"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="Luxury Plumbing Services for GTA Estates"
            description="Master-level plumbing craftsmanship meets uncompromising 24/7 reliability. Experience the Gold Standard in residential and commercial plumbing."
            buttons={[{ text: "Book Consultation", href: "#contact" }]}
            testimonials={[]}
            imageSrc="http://img.b2bpic.net/free-photo/modern-luxury-bathroom-interior_1048-8424.jpg"
            avatars={[]}
            avatarText="Serving the GTA for 25+ years"
          />
        </div>

        <div id="trust-bar" data-section="trust-bar">
          <AboutMetric 
            title="Our Commitment to Excellence"
            metrics={[
              { icon: Zap, label: "Response Time", value: "< 60 Mins" },
              { icon: ShieldCheck, label: "Certified Pros", value: "RedSeal" },
              { icon: Wrench, label: "Years Served", value: "25+" }
            ]}
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <ProductCardThree
            title="Premium Services"
            description="From intricate luxury fixture installations to industrial-grade drain solutions."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            products={[
              { id: "1", name: "Luxury Fixture Installation", price: "Custom Quote", imageSrc: "http://img.b2bpic.net/free-photo/elegant-bathroom-faucet_1048-5231.jpg" },
              { id: "2", name: "Advanced Pipe Relining", price: "Long-lasting", imageSrc: "http://img.b2bpic.net/free-photo/plumbing-pipes-background_1048-8212.jpg" },
              { id: "3", name: "Leak Detection", price: "Precision Tech", imageSrc: "http://img.b2bpic.net/free-photo/water-drop-leak_1048-5123.jpg" }
            ]}
          />
        </div>

        <div id="why-choose-us" data-section="why-choose-us">
          <TeamCardFive
            title="Meet Our Lead Experts"
            description="Our master technicians are trained in the highest standards of plumbing excellence."
            textboxLayout="default"
            useInvertedBackground={false}
            team={[
              { id: "1", name: "Robert Vance", role: "Master Plumber", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-smiling_1048-1241.jpg" },
              { id: "2", name: "Elena Rossi", role: "Lead Technician", imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-technician_1048-1245.jpg" }
            ]}
            animationType="slide-up"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            title="Client Testimonials"
            description="Luxury service defined by our happy clients."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Arthur Sterling", role: "Estate Owner", testimonial: "The finest plumbing service I have ever experienced in Toronto.", icon: MessageSquare }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Frequently Asked Questions"
            description=""
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "Do you handle emergencies?", content: "Yes, 24/7 dedicated emergency line." },
              { id: "2", title: "Are you licensed?", content: "Fully licensed, bonded, and RedSeal certified." }
            ]}
            faqsAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/modern-tools-arrangement_1048-9123.jpg"
          />
        </div>

        <div id="emergency-cta" data-section="emergency-cta">
          <ContactCTA 
            tag="Emergency Assistance"
            title="Immediate Help Available"
            description="Call us now for a priority emergency dispatch."
            buttons={[{ text: "Call 416-800-1991", href: "tel:+14168001991" }]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Schedule an Appointment"
            description="Request a premium consultation for your home or business."
            useInvertedBackground={false}
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email Address" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/luxury-home-exterior_1048-8422.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="Plumber Near Me"
            columns={[
              { items: [{ label: "Services" }, { label: "Careers" }] },
              { items: [{ label: "Contact" }, { label: "Privacy" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
