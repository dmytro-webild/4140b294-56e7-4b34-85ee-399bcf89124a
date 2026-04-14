"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="medium"
        background="circleGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Projects",
          id: "#projects",
        },
        {
          name: "Team",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Plumber Near Me"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Toronto's Most Trusted Plumbing Experts"
      description="Certified professionals serving the Greater Toronto Area. Available 24/7 with 1-hour emergency response."
      testimonials={[
        {
          name: "John D.",
          handle: "Georgetown",
          testimonial: "Incredible service, arrived within the hour as promised.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-smiling-camera_23-2148238839.jpg",
        },
        {
          name: "Sarah L.",
          handle: "Mississauga",
          testimonial: "Professional, clean, and extremely knowledgeable staff.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg",
        },
        {
          name: "Mark R.",
          handle: "Toronto",
          testimonial: "Fixed our major pipe leak without any mess. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-man-with-grey-hair-dark-color-shirt-looking-up-puzzled-thinking-crossing-hands-his-chest-standing-brown-background_141793-133897.jpg",
        },
        {
          name: "Emily K.",
          handle: "Halton Hills",
          testimonial: "Responsive and fair pricing. Best plumbing team in the city.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-smiling-young-woman-standing-kitchen_23-2147916396.jpg",
        },
        {
          name: "David P.",
          handle: "GTA",
          testimonial: "Technicians were respectful and fixed everything quickly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-362.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book a Free Assessment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-plumber-fixing-leak_1048-5619.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/casual-teenager-posing-outdoors_23-2148804653.jpg",
          alt: "Happy client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-goodlooking-tender-friendly-pretty-middleaged-30s-woman-extend-arm-hold-camera-hand-smiling-broadly-taking-selfie-photographing-record-videomessage-calling-husband_176420-51274.jpg",
          alt: "Happy client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-bearded-man_1098-22109.jpg",
          alt: "Happy client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-blue-coat-street_158595-2587.jpg",
          alt: "Happy client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-female-staff-airport-terminal_107420-85049.jpg",
          alt: "Happy client 5",
        },
      ]}
      avatarText="Trusted by 5,000+ GTA homeowners"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Drain Repair & Replacement",
          price: "Expert Service",
          imageSrc: "http://img.b2bpic.net/free-photo/bleu-run-scarce-bathroom-washroom_1172-546.jpg",
        },
        {
          id: "p2",
          name: "Waterproofing Systems",
          price: "Guaranteed Results",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-young-man-drinking-water-stairs_23-2148375985.jpg",
        },
        {
          id: "p3",
          name: "Leak Detection",
          price: "Advanced Tech",
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-senior-man-looking-his-tablet_23-2148404390.jpg",
        },
        {
          id: "p4",
          name: "CCTV Inspection",
          price: "High Precision",
          imageSrc: "http://img.b2bpic.net/free-photo/excited-stock-market-trader-with-hands-up-celebrating-big-sale-times-stock-market-crash-multiple-displays-with-real-time-trading-data_482257-30732.jpg",
        },
        {
          id: "p5",
          name: "Rough-in Plumbing",
          price: "Code Compliant",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-hydraulic-elements_23-2149333323.jpg",
        },
        {
          id: "p6",
          name: "Fixture Installation",
          price: "Premium Finish",
          imageSrc: "http://img.b2bpic.net/free-photo/pro-kitchen-sprayer-sleek-sink-stone-backsplash_169016-69285.jpg",
        },
      ]}
      title="Our Premium Plumbing Services"
      description="Comprehensive residential, commercial, and industrial solutions."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Why Choose Plumber Near Me?"
      description="Born from a mission to serve GTA homeowners with total honesty and technical excellence."
      bulletPoints={[
        {
          title: "We Listen",
          description: "We start with a thorough diagnosis of your specific plumbing needs.",
        },
        {
          title: "We Diagnose",
          description: "Using CCTV technology to ensure accuracy, never guesswork.",
        },
        {
          title: "We Deliver",
          description: "Prompt, professional service with a focus on your 100% satisfaction.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-construction-workers_23-2149366627.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Do you offer emergency plumbing?",
          content: "Yes, we provide 24/7 emergency response in the GTA.",
        },
        {
          id: "f2",
          title: "What areas do you serve?",
          content: "We serve Toronto, Georgetown, Halton Hills, and the entire GTA region.",
        },
        {
          id: "f3",
          title: "Are you RedSeal certified?",
          content: "Yes, all our master plumbers are RedSeal certified.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Need a Reliable Plumber?"
      description="Call us at 416-800-1991 or fill out the booking form below for a free estimate."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/map-pin-front-side-with-white-background_187299-39906.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Drain Repair",
              href: "#services",
            },
            {
              label: "Waterproofing",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Plumber Near Me"
      copyrightText="© 2025 Plumber Near Me Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
