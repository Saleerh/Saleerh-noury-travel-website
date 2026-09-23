import React, { FormEvent, useState } from "react";

const WHATSAPP = "2348063938241";

const images = {
  hero:
    "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=2200&q=90",
  kaaba:
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=88",
  madinah:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=88",
  pilgrims:
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=88",
  airport:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=88",
  hotel:
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=88",
  desert:
    "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1400&q=88",
};

type IconName =
  | "arrow"
  | "chevron"
  | "menu"
  | "close"
  | "phone"
  | "plane"
  | "moon"
  | "hotel"
  | "shield"
  | "users"
  | "globe"
  | "map"
  | "calendar"
  | "check"
  | "whatsapp"
  | "star"
  | "clock"
  | "location"
  | "mail";

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "chevron":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );

    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case "plane":
      return (
        <svg {...common}>
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
        </svg>
      );

    case "moon":
      return (
        <svg {...common}>
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8z" />
        </svg>
      );

    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16" />
          <path d="M3 13h18" />
          <path d="M7 9h.01" />
          <path d="M11 9h.01" />
          <path d="M15 9h.01" />
          <path d="M3 21h18" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );

    case "map":
      return (
        <svg {...common}>
          <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z" />
        </svg>
      );

    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.55L4 20l1.05-3.85A8.5 8.5 0 1 1 20.5 11.5z" />
          <path d="M8.7 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.1.1-.2.3-.1.5.5 1 1.4 1.8 2.4 2.3.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2.8-.9 1.5-1.7 1.7-.6.1-1.5-.1-2.5-.6-1.8-.9-3.3-2.4-4.2-4.1-.5-1-.7-1.9-.5-2.5.1-.2.2-.4.3-.5z" />
        </svg>
      );

    default:
      return null;
  }
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Hajj", href: "#hajj" },
  { label: "Umrah", href: "#umrah" },
  { label: "Flights", href: "#flights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Hajj",
    text: "Thoughtfully organized pilgrimage packages with guidance, accommodation and dedicated support.",
    icon: "moon" as IconName,
    image: images.kaaba,
    href: "#hajj",
  },
  {
    title: "Umrah",
    text: "Comfortable journeys designed around your worship, convenience and peace of mind.",
    icon: "map" as IconName,
    image: images.madinah,
    href: "#umrah",
  },
  {
    title: "Flights",
    text: "International flight arrangements with carefully planned group departure schedules.",
    icon: "plane" as IconName,
    image: images.airport,
    href: "#flights",
  },
  {
    title: "Hotels",
    text: "Selected accommodation options designed to keep you close to the places that matter.",
    icon: "hotel" as IconName,
    image: images.hotel,
    href: "#services",
  },
];

const umrahPackages = [
  {
    name: "Economy",
    price: "₦4.7M",
    description: "A practical and comfortable Umrah experience.",
    featured: false,
    features: ["Visa assistance", "Hotel accommodation", "Transport", "Ziyarat"],
  },
  {
    name: "Luxury",
    price: "₦6.0M",
    description: "A refined journey with enhanced comfort and support.",
    featured: true,
    features: ["Premium hotel", "Visa assistance", "Transport", "Ziyarat", "Group guidance"],
  },
  {
    name: "Premium",
    price: "₦11M",
    description: "An elevated pilgrimage experience for travelers seeking exceptional comfort.",
    featured: false,
    features: ["Luxury hotel", "Visa assistance", "Premium transport", "Ziyarat", "Dedicated support"],
  },
];

const flights = [
  ["07 Feb 2027", "14 Mar 2027", "Kano"],
  ["11 Feb 2027", "16 Mar 2027", "Kano"],
  ["16 Feb 2027", "10 Mar 2027", "Kano"],
  ["18 Feb 2027", "11 Mar 2027", "Kano"],
  ["23 Feb 2027", "09 Mar 2027", "Kano"],
  ["24 Feb 2027", "09 Mar 2027", "Kano"],
  ["21 Feb 2027", "10 Mar 2027", "Abuja"],
  ["23 Feb 2027", "10 Mar 2027", "Abuja"],
  ["24 Feb 2027", "10 Mar 2027", "Abuja"],
  ["25 Feb 2027", "11 Mar 2027", "Abuja"],
];

const includes = [
  { title: "Hotels Near Haram", icon: "hotel" as IconName },
  { title: "Guided Group Travel", icon: "users" as IconName },
  { title: "Comfortable Transport", icon: "plane" as IconName },
  { title: "Daily Meals", icon: "check" as IconName },
  { title: "Visa & Ziyarat", icon: "shield" as IconName },
  { title: "Travel Assistance", icon: "phone" as IconName },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState("Umrah");
  const [submitted, setSubmitted] = useState(false);

  const openWhatsApp = (message = "Hello Noury Traveling & Tour Agency. I would like to make an enquiry.") => {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        :root {
          --n-green: #063c2f;
          --n-dark: #032c23;
          --n-gold: #c9a45c;
          --n-gold-light: #e4c982;
          --n-cream: #f8f3e8;
          --n-ink: #15221d;
          --n-muted: #718078;
          --n-line: rgba(6,60,47,.12);
        }

        .noury-page {
          background: var(--n-cream);
          color: var(--n-ink);
          overflow: hidden;
        }

        .noury-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .noury-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 82px;
          background: rgba(248,243,232,.76);
          border-bottom: 1px solid rgba(255,255,255,.35);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .noury-nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .noury-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .noury-logo-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(201,164,92,.65);
          border-radius: 14px;
          color: var(--n-gold);
          background: var(--n-dark);
          font-family: Georgia, serif;
          font-size: 20px;
        }

        .noury-logo-name {
          color: var(--n-green);
          font-size: 15px;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .noury-logo-sub {
          display: block;
          color: #87928c;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: .2em;
          margin-top: 2px;
        }

        .noury-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .noury-nav-links a {
          color: #52605a;
          font-size: 13px;
          font-weight: 600;
          transition: color .25s ease;
        }

        .noury-nav-links a:hover {
          color: var(--n-green);
        }

        .noury-nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 17px;
          border-radius: 999px;
          background: var(--n-green);
          color: white;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 12px 30px rgba(6,60,47,.18);
        }

        .noury-mobile-menu {
          display: none;
          border: 0;
          background: transparent;
          color: var(--n-green);
        }

        .noury-hero {
          min-height: 860px;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
          background: #031d17;
        }

        .noury-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .noury-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(2,30,23,.96) 0%, rgba(3,44,35,.82) 36%, rgba(3,44,35,.34) 70%, rgba(3,44,35,.15) 100%),
            linear-gradient(0deg, rgba(2,30,23,.68), transparent 50%);
        }

        .noury-hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          right: -180px;
          top: 60px;
          border-radius: 50%;
          background: rgba(201,164,92,.12);
          filter: blur(80px);
          z-index: -1;
        }

        .noury-hero-content {
          padding-top: 70px;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .noury-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--n-gold-light);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .19em;
          text-transform: uppercase;
        }

        .noury-eyebrow-line {
          width: 34px;
          height: 1px;
          background: var(--n-gold);
        }

        .noury-hero h1 {
          max-width: 820px;
          margin: 20px 0 22px;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(55px, 7vw, 96px);
          font-weight: 500;
          line-height: .98;
          letter-spacing: -.055em;
        }

        .noury-hero h1 em {
          color: var(--n-gold-light);
          font-style: normal;
        }

        .noury-hero-description {
          max-width: 570px;
          color: rgba(255,255,255,.72);
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 34px;
        }

        .noury-hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .noury-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 52px;
          padding: 0 21px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          transition: all .28s ease;
        }

        .noury-btn-primary {
          background: var(--n-gold);
          color: var(--n-dark);
          box-shadow: 0 15px 40px rgba(201,164,92,.2);
        }

        .noury-btn-primary:hover {
          background: var(--n-gold-light);
          transform: translateY(-2px);
        }

        .noury-btn-ghost {
          color: white;
          border-color: rgba(255,255,255,.28);
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(12px);
        }

        .noury-btn-ghost:hover {
          background: rgba(255,255,255,.14);
          transform: translateY(-2px);
        }

        .noury-hero-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 55px;
          color: rgba(255,255,255,.66);
          font-size: 11px;
          font-weight: 600;
        }

        .noury-hero-meta span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .noury-hero-meta b {
          color: var(--n-gold-light);
          font-size: 16px;
        }

        .noury-scroll {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.5);
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .noury-scroll::after {
          content: "";
          width: 1px;
          height: 38px;
          background: linear-gradient(var(--n-gold), transparent);
        }

        .noury-booking {
          position: relative;
          z-index: 5;
          margin-top: -65px;
        }

        .noury-booking-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr auto;
          gap: 1px;
          padding: 9px;
          border: 1px solid rgba(6,60,47,.1);
          border-radius: 24px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 28px 70px rgba(3,44,35,.15);
          backdrop-filter: blur(20px);
        }

        .noury-booking-item {
          padding: 14px 18px;
          border-radius: 17px;
          background: white;
        }

        .noury-booking-label {
          color: #8a958f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .noury-booking-value {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--n-green);
          font-size: 13px;
          font-weight: 750;
        }

        .noury-booking-button {
          min-width: 150px;
          border: 0;
          border-radius: 17px;
          background: var(--n-green);
          color: white;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
        }

        .noury-section {
          padding: 125px 0;
        }

        .noury-section-dark {
          background: var(--n-green);
          color: white;
        }

        .noury-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 55px;
        }

        .noury-section-kicker {
          color: var(--n-gold);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .noury-section-title {
          max-width: 650px;
          margin: 0;
          color: var(--n-green);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .noury-section-dark .noury-section-title {
          color: white;
        }

        .noury-section-description {
          max-width: 470px;
          color: var(--n-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .noury-section-dark .noury-section-description {
          color: rgba(255,255,255,.62);
        }

        .noury-services {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          grid-template-rows: 280px 280px;
          gap: 14px;
        }

        .noury-service-card {
          position: relative;
          min-height: 240px;
          overflow: hidden;
          border-radius: 26px;
          isolation: isolate;
          background: var(--n-dark);
        }

        .noury-service-card:first-child {
          grid-row: 1 / 3;
        }

        .noury-service-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
          transition: transform .8s ease;
        }

        .noury-service-card:hover .noury-service-image {
          transform: scale(1.045);
        }

        .noury-service-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(0deg, rgba(2,27,21,.95), rgba(2,27,21,.08) 75%);
        }

        .noury-service-content {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 24px;
          color: white;
        }

        .noury-service-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          margin-bottom: 16px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 12px;
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
          color: var(--n-gold-light);
        }

        .noury-service-content h3 {
          margin: 0 0 7px;
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 500;
        }

        .noury-service-content p {
          max-width: 390px;
          margin: 0;
          color: rgba(255,255,255,.68);
          font-size: 12px;
          line-height: 1.6;
        }

        .noury-feature {
          display: grid;
          grid-template-columns: 1.03fr .97fr;
          min-height: 650px;
          border-radius: 32px;
          overflow: hidden;
          background: #f0e8d8;
        }

        .noury-feature-image {
          position: relative;
          min-height: 600px;
          overflow: hidden;
        }

        .noury-feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .noury-feature-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 15px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 999px;
          background: rgba(3,44,35,.72);
          color: white;
          font-size: 10px;
          font-weight: 700;
          backdrop-filter: blur(14px);
        }

        .noury-feature-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 70px;
        }

        .noury-feature-copy h2 {
          margin: 0 0 20px;
          color: var(--n-green);
          font-family: Georgia, serif;
          font-size: clamp(40px, 5vw, 63px);
          line-height: 1;
          font-weight: 500;
        }

        .noury-feature-copy p {
          max-width: 470px;
          color: var(--n-muted);
          line-height: 1.8;
          font-size: 14px;
        }

        .noury-feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
          margin: 28px 0 32px;
        }

        .noury-feature-list div {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--n-green);
          font-size: 12px;
          font-weight: 700;
        }

        .noury-check {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: rgba(201,164,92,.17);
          color: var(--n-gold);
        }

        .noury-packages {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .noury-package {
          position: relative;
          padding: 32px;
          min-height: 440px;
          border: 1px solid rgba(6,60,47,.1);
          border-radius: 26px;
          background: white;
          transition: all .35s ease;
        }

        .noury-package:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 65px rgba(3,44,35,.12);
        }

        .noury-package.featured {
          background: var(--n-green);
          color: white;
          transform: translateY(-14px);
          box-shadow: 0 30px 70px rgba(3,44,35,.2);
        }

        .noury-package.featured:hover {
          transform: translateY(-20px);
        }

        .noury-package-tag {
          display: inline-flex;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(201,164,92,.16);
          color: var(--n-gold);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .noury-package h3 {
          margin: 28px 0 7px;
          color: var(--n-green);
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 500;
        }

        .noury-package.featured h3 {
          color: white;
        }

        .noury-package-description {
          min-height: 50px;
          color: var(--n-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .noury-package.featured .noury-package-description {
          color: rgba(255,255,255,.62);
        }

        .noury-price {
          margin: 22px 0;
          color: var(--n-green);
          font-size: 39px;
          font-weight: 800;
          letter-spacing: -.05em;
        }

        .noury-package.featured .noury-price {
          color: var(--n-gold-light);
        }

        .noury-package-features {
          display: grid;
          gap: 11px;
          padding-top: 18px;
          border-top: 1px solid var(--n-line);
        }

        .noury-package.featured .noury-package-features {
          border-color: rgba(255,255,255,.12);
        }

        .noury-package-feature {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #59665f;
          font-size: 11px;
        }

        .noury-package.featured .noury-package-feature {
          color: rgba(255,255,255,.72);
        }

        .noury-ramadan {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 32px;
          background: var(--n-dark);
          isolation: isolate;
        }

        .noury-ramadan img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
          opacity: .65;
        }

        .noury-ramadan::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(90deg, rgba(3,35,28,.97), rgba(3,44,35,.67), rgba(3,44,35,.18));
        }

        .noury-ramadan-copy {
          width: min(650px, 100%);
          padding: 70px;
        }

        .noury-ramadan h2 {
          margin: 17px 0;
          color: white;
          font-family: Georgia, serif;
          font-size: clamp(43px, 6vw, 70px);
          line-height: .98;
          font-weight: 500;
        }

        .noury-ramadan p {
          max-width: 500px;
          color: rgba(255,255,255,.68);
          line-height: 1.8;
          font-size: 14px;
        }

        .noury-includes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          background: rgba(255,255,255,.1);
        }

        .noury-include {
          padding: 30px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.045);
        }

        .noury-include-icon {
          color: var(--n-gold-light);
          margin-bottom: 22px;
        }

        .noury-include h3 {
          margin: 0 0 6px;
          font-size: 14px;
        }

        .noury-include p {
          margin: 0;
          color: rgba(255,255,255,.5);
          font-size: 11px;
        }

        .noury-flights {
          overflow: hidden;
          border: 1px solid var(--n-line);
          border-radius: 26px;
          background: white;
          box-shadow: 0 20px 60px rgba(3,44,35,.07);
        }

        .noury-flight-row {
          display: grid;
          grid-template-columns: 1fr 1fr .7fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px 25px;
          border-bottom: 1px solid rgba(6,60,47,.08);
          transition: background .2s ease;
        }

        .noury-flight-row:hover {
          background: #fbf8f1;
        }

        .noury-flight-row:last-child {
          border-bottom: 0;
        }

        .noury-flight-head {
          color: #8a958f;
          background: #faf8f2;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .noury-flight-cell {
          color: var(--n-green);
          font-size: 12px;
          font-weight: 700;
        }

        .noury-flight-cell span {
          display: block;
          color: var(--n-muted);
          font-size: 10px;
          font-weight: 500;
          margin-top: 4px;
        }

        .noury-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(6,60,47,.07);
          color: var(--n-green);
          font-size: 9px;
          font-weight: 800;
        }

        .noury-status::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4f9d77;
        }

        .noury-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .noury-stat {
          padding: 30px;
          border: 1px solid var(--n-line);
          border-radius: 23px;
          background: rgba(255,255,255,.72);
        }

        .noury-stat-number {
          color: var(--n-green);
          font-family: Georgia, serif;
          font-size: 43px;
        }

        .noury-stat-label {
          margin-top: 5px;
          color: var(--n-muted);
          font-size: 11px;
          line-height: 1.5;
        }

        .noury-timeline {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0;
          margin-top: 60px;
        }

        .noury-step {
          position: relative;
          padding-right: 18px;
        }

        .noury-step::after {
          content: "";
          position: absolute;
          top: 13px;
          left: 27px;
          width: calc(100% - 27px);
          height: 1px;
          background: rgba(201,164,92,.35);
        }

        .noury-step:last-child::after {
          display: none;
        }

        .noury-step-dot {
          position: relative;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 27px;
          height: 27px;
          margin-bottom: 18px;
          border: 1px solid var(--n-gold);
          border-radius: 50%;
          background: var(--n-cream);
          color: var(--n-gold);
          font-size: 9px;
          font-weight: 800;
        }

        .noury-step h3 {
          color: var(--n-green);
          font-size: 12px;
          margin-bottom: 6px;
        }

        .noury-step p {
          color: var(--n-muted);
          font-size: 10px;
          line-height: 1.55;
          padding-right: 12px;
        }

        .noury-gallery {
          display: grid;
          grid-template-columns: 1.4fr .8fr .8fr;
          grid-template-rows: 260px 260px;
          gap: 12px;
        }

        .noury-gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: var(--n-dark);
        }

        .noury-gallery-item:first-child {
          grid-row: 1 / 3;
        }

        .noury-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .8s ease;
        }

        .noury-gallery-item:hover img {
          transform: scale(1.06);
        }

        .noury-gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(3,44,35,.42), transparent 50%);
          pointer-events: none;
        }

        .noury-contact {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          min-height: 520px;
          overflow: hidden;
          border-radius: 32px;
          background: var(--n-green);
        }

        .noury-contact-copy {
          padding: 65px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .noury-contact-copy h2 {
          color: white;
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 62px);
          font-weight: 500;
          line-height: 1;
          margin: 15px 0;
        }

        .noury-contact-copy p {
          max-width: 410px;
          color: rgba(255,255,255,.62);
          line-height: 1.8;
          font-size: 13px;
        }

        .noury-contact-details {
          display: grid;
          gap: 12px;
          margin-top: 30px;
        }

        .noury-contact-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,.78);
          font-size: 11px;
        }

        .noury-contact-detail svg {
          color: var(--n-gold-light);
        }

        .noury-contact-form {
          padding: 55px;
          background: #f1eadb;
        }

        .noury-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .noury-form-group {
          display: grid;
          gap: 7px;
        }

        .noury-form-group.full {
          grid-column: 1 / -1;
        }

        .noury-form-group label {
          color: #68756e;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .noury-form-group input,
        .noury-form-group select,
        .noury-form-group textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid rgba(6,60,47,.12);
          border-radius: 12px;
          background: rgba(255,255,255,.78);
          color: var(--n-ink);
          outline: none;
          font: inherit;
          font-size: 12px;
        }

        .noury-form-group textarea {
          min-height: 105px;
          resize: vertical;
        }

        .noury-form-group input:focus,
        .noury-form-group select:focus,
        .noury-form-group textarea:focus {
          border-color: var(--n-gold);
          box-shadow: 0 0 0 4px rgba(201,164,92,.1);
        }

        .noury-success {
          padding: 30px;
          border-radius: 18px;
          background: rgba(6,60,47,.08);
          color: var(--n-green);
        }

        .noury-success h3 {
          font-family: Georgia, serif;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .noury-footer {
          padding: 70px 0 30px;
          background: #021f18;
          color: white;
        }

        .noury-footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,.09);
        }

        .noury-footer-brand p {
          max-width: 330px;
          color: rgba(255,255,255,.48);
          font-size: 12px;
          line-height: 1.8;
        }

        .noury-footer h4 {
          color: white;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .noury-footer a,
        .noury-footer span {
          display: block;
          color: rgba(255,255,255,.48);
          font-size: 11px;
          margin: 10px 0;
          transition: color .2s ease;
        }

        .noury-footer a:hover {
          color: var(--n-gold-light);
        }

        .noury-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 24px;
          color: rgba(255,255,255,.32);
          font-size: 9px;
        }

        .noury-floating-wa {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 80;
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--n-green);
          color: white;
          box-shadow: 0 18px 40px rgba(3,44,35,.3);
          border: 1px solid rgba(255,255,255,.15);
        }

        .noury-modal {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(2,25,19,.65);
          backdrop-filter: blur(12px);
        }

        .noury-modal-card {
          width: min(520px, 100%);
          max-height: 90vh;
          overflow: auto;
          padding: 32px;
          border-radius: 26px;
          background: #fffdf8;
          box-shadow: 0 40px 100px rgba(0,0,0,.25);
        }

        .noury-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .noury-modal-header h2 {
          margin: 0;
          color: var(--n-green);
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 500;
        }

        .noury-close {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid var(--n-line);
          border-radius: 50%;
          background: white;
          color: var(--n-green);
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .noury-nav-links,
          .noury-nav-cta {
            display: none;
          }

          .noury-mobile-menu {
            display: block;
          }

          .noury-mobile-links {
            position: absolute;
            top: 82px;
            left: 15px;
            right: 15px;
            padding: 15px;
            border: 1px solid var(--n-line);
            border-radius: 20px;
            background: rgba(255,255,255,.97);
            box-shadow: 0 25px 60px rgba(3,44,35,.15);
          }

          .noury-mobile-links a {
            display: block;
            padding: 14px;
            color: var(--n-green);
            font-size: 13px;
            font-weight: 700;
            border-bottom: 1px solid rgba(6,60,47,.07);
          }

          .noury-hero {
            min-height: 760px;
          }

          .noury-hero h1 {
            font-size: clamp(50px, 12vw, 78px);
          }

          .noury-booking-card {
            grid-template-columns: 1fr 1fr;
          }

          .noury-booking-button {
            min-height: 58px;
            grid-column: 1 / -1;
          }

          .noury-services {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 280px 280px;
          }

          .noury-service-card:first-child {
            grid-row: auto;
            grid-column: 1 / -1;
          }

          .noury-feature {
            grid-template-columns: 1fr;
          }

          .noury-feature-image {
            min-height: 440px;
          }

          .noury-feature-copy {
            padding: 45px 30px;
          }

          .noury-packages {
            grid-template-columns: 1fr;
          }

          .noury-package.featured,
          .noury-package.featured:hover {
            transform: none;
          }

          .noury-includes {
            grid-template-columns: 1fr 1fr;
          }

          .noury-stats {
            grid-template-columns: 1fr 1fr;
          }

          .noury-timeline {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .noury-step::after {
            display: none;
          }

          .noury-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 180px 180px;
          }

          .noury-gallery-item:first-child {
            grid-row: 1 / 2;
            grid-column: 1 / -1;
          }

          .noury-contact {
            grid-template-columns: 1fr;
          }

          .noury-contact-copy,
          .noury-contact-form {
            padding: 42px 28px;
          }

          .noury-footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .noury-container,
          .noury-hero-content {
            width: min(100% - 28px, 1180px);
          }

          .noury-nav {
            height: 72px;
          }

          .noury-hero {
            min-height: 720px;
          }

          .noury-hero-content {
            padding-top: 45px;
          }

          .noury-hero h1 {
            font-size: clamp(45px, 15vw, 68px);
          }

          .noury-hero-description {
            font-size: 13px;
          }

          .noury-hero-meta {
            flex-wrap: wrap;
            gap: 12px 18px;
            margin-top: 35px;
          }

          .noury-booking {
            margin-top: -35px;
          }

          .noury-booking-card {
            grid-template-columns: 1fr;
          }

          .noury-booking-button {
            grid-column: auto;
          }

          .noury-section {
            padding: 85px 0;
          }

          .noury-section-head {
            display: block;
            margin-bottom: 35px;
          }

          .noury-section-description {
            margin-top: 18px;
          }

          .noury-services {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 280px);
          }

          .noury-service-card:first-child {
            grid-column: auto;
          }

          .noury-feature-image {
            min-height: 340px;
          }

          .noury-feature-list {
            grid-template-columns: 1fr;
          }

          .noury-ramadan-copy {
            padding: 45px 28px;
          }

          .noury-ramadan {
            min-height: 570px;
          }

          .noury-includes {
            grid-template-columns: 1fr;
          }

          .noury-flight-row {
            min-width: 700px;
          }

          .noury-flights {
            overflow-x: auto;
          }

          .noury-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: 270px repeat(3, 210px);
          }

          .noury-gallery-item:first-child {
            grid-column: auto;
          }

          .noury-stats {
            grid-template-columns: 1fr 1fr;
          }

          .noury-form-grid {
            grid-template-columns: 1fr;
          }

          .noury-form-group.full {
            grid-column: auto;
          }

          .noury-footer-top {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .noury-footer-bottom {
            display: block;
            line-height: 1.8;
          }

          .noury-floating-wa {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>

      <div className="noury-page" id="home">
        {/* NAVIGATION */}
        <nav className="noury-nav">
          <div className="noury-container noury-nav-inner">
            <a href="#home" className="noury-logo">
              <span className="noury-logo-mark">N</span>
              <span>
                <span className="noury-logo-name">Noury</span>
                <span className="noury-logo-sub">Traveling & Tour Agency</span>
              </span>
            </a>

            <div className="noury-nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <button
              className="noury-nav-cta"
              onClick={() => setBookingOpen(true)}
            >
              Plan Your Journey
              <Icon name="arrow" size={14} />
            </button>

            <button
              className="noury-mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Open menu"
            >
              <Icon name={menuOpen ? "close" : "menu"} size={25} />
            </button>

            {menuOpen && (
              <div className="noury-mobile-links">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  className="noury-btn noury-btn-primary"
                  style={{ width: "100%", marginTop: 12 }}
                  onClick={() => {
                    setMenuOpen(false);
                    setBookingOpen(true);
                  }}
                >
                  Plan Your Journey <Icon name="arrow" size={15} />
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* HERO */}
        <header className="noury-hero">
          <img className="noury-hero-bg" src={images.hero} alt="Sacred journey" />
          <div className="noury-hero-overlay" />
          <div className="noury-hero-glow" />

          <div className="noury-hero-content">
            <div className="noury-eyebrow">
              <span className="noury-eyebrow-line" />
              Hajj · Umrah · Travel
            </div>

            <h1>
              Your journey to the
              <br />
              <em>sacred lands.</em>
            </h1>

            <p className="noury-hero-description">
              Thoughtfully planned journeys for Hajj, Umrah and international
              travel — combining trusted assistance, comfortable accommodation
              and seamless support from departure to return.
            </p>

            <div className="noury-hero-actions">
              <button
                className="noury-btn noury-btn-primary"
                onClick={() => setBookingOpen(true)}
              >
                Explore Your Journey
                <Icon name="arrow" size={16} />
              </button>

              <button
                className="noury-btn noury-btn-ghost"
                onClick={() =>
                  openWhatsApp(
                    "Hello Noury. I would like to speak with someone about a journey."
                  )
                }
              >
                <Icon name="whatsapp" size={16} />
                Talk to Noury
              </button>
            </div>

            <div className="noury-hero-meta">
              <span>
                <b>01</b> Hajj
              </span>
              <span>
                <b>02</b> Umrah
              </span>
              <span>
                <b>03</b> Flights
              </span>
              <span>
                <b>04</b> Visa
              </span>
              <span>
                <b>05</b> Hotels
              </span>
            </div>
          </div>

          <div className="noury-scroll">Scroll to explore</div>
        </header>

        {/* BOOKING BAR */}
        <section className="noury-booking">
          <div className="noury-container">
            <div className="noury-booking-card">
              <div className="noury-booking-item">
                <div className="noury-booking-label">Journey</div>
                <div className="noury-booking-value">
                  <Icon name="moon" size={17} />
                  Hajj & Umrah
                </div>
              </div>

              <div className="noury-booking-item">
                <div className="noury-booking-label">Departure</div>
                <div className="noury-booking-value">
                  <Icon name="location" size={17} />
                  Kano / Abuja
                </div>
              </div>

              <div className="noury-booking-item">
                <div className="noury-booking-label">Travel support</div>
                <div className="noury-booking-value">
                  <Icon name="shield" size={17} />
                  Complete assistance
                </div>
              </div>

              <button
                className="noury-booking-button"
                onClick={() => setBookingOpen(true)}
              >
                Start an Enquiry <Icon name="arrow" size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="noury-section" id="services">
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">The Noury experience</div>
                <h2 className="noury-section-title">
                  Everything you need.
                  <br />
                  Nothing you don't.
                </h2>
              </div>

              <p className="noury-section-description">
                From your first enquiry to your return home, our goal is to
                make every important part of your journey organized,
                comfortable and clear.
              </p>
            </div>

            <div className="noury-services">
              {services.map((service) => (
                <a
                  href={service.href}
                  className="noury-service-card"
                  key={service.title}
                >
                  <img
                    className="noury-service-image"
                    src={service.image}
                    alt={service.title}
                  />
                  <div className="noury-service-overlay" />

                  <div className="noury-service-content">
                    <div className="noury-service-icon">
                      <Icon name={service.icon} size={18} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HAJJ */}
        <section className="noury-section" id="hajj" style={{ paddingTop: 35 }}>
          <div className="noury-container">
            <div className="noury-feature">
              <div className="noury-feature-image">
                <img src={images.pilgrims} alt="Pilgrims journey" />
                <div className="noury-feature-badge">
                  <Icon name="star" size={13} />
                  Organized pilgrimage support
                </div>
              </div>

              <div className="noury-feature-copy">
                <div className="noury-section-kicker">Hajj 2027</div>

                <h2>
                  A sacred journey,
                  <br />
                  carefully prepared.
                </h2>

                <p>
                  Your Hajj deserves more than a booking. Noury brings
                  together accommodation, transportation, visa assistance,
                  group guidance, meals, Ziyarat and dedicated travel support
                  into one organized experience.
                </p>

                <div className="noury-feature-list">
                  {[
                    "Accommodation",
                    "Visa assistance",
                    "Group guidance",
                    "Transportation",
                    "Meals",
                    "Ziyarat",
                  ].map((item) => (
                    <div key={item}>
                      <span className="noury-check">
                        <Icon name="check" size={13} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    className="noury-btn noury-btn-primary"
                    onClick={() =>
                      openWhatsApp(
                        "Hello Noury. I would like to enquire about the Hajj package."
                      )
                    }
                  >
                    Enquire About Hajj
                    <Icon name="arrow" size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UMRAH */}
        <section className="noury-section" id="umrah">
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">Umrah packages</div>
                <h2 className="noury-section-title">
                  Choose the way
                  <br />
                  you want to travel.
                </h2>
              </div>

              <p className="noury-section-description">
                Flexible options designed for different levels of comfort.
                Contact Noury for complete package inclusions and current
                availability.
              </p>
            </div>

            <div className="noury-packages">
              {umrahPackages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`noury-package ${
                    pkg.featured ? "featured" : ""
                  }`}
                >
                  {pkg.featured && (
                    <span className="noury-package-tag">Most requested</span>
                  )}

                  {!pkg.featured && (
                    <span className="noury-package-tag">Umrah</span>
                  )}

                  <h3>{pkg.name}</h3>

                  <p className="noury-package-description">
                    {pkg.description}
                  </p>

                  <div className="noury-price">{pkg.price}</div>

                  <div className="noury-package-features">
                    {pkg.features.map((feature) => (
                      <div className="noury-package-feature" key={feature}>
                        <Icon name="check" size={14} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`noury-btn ${
                      pkg.featured
                        ? "noury-btn-primary"
                        : "noury-btn-ghost"
                    }`}
                    style={{
                      width: "100%",
                      marginTop: 28,
                      color: pkg.featured ? undefined : "var(--n-green)",
                      borderColor: pkg.featured
                        ? undefined
                        : "rgba(6,60,47,.15)",
                      background: pkg.featured ? undefined : "#f7f4ec",
                    }}
                    onClick={() =>
                      openWhatsApp(
                        `Hello Noury. I would like more information about the ${pkg.name} Umrah package.`
                      )
                    }
                  >
                    View Package <Icon name="arrow" size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RAMADAN */}
        <section className="noury-section" style={{ paddingTop: 0 }}>
          <div className="noury-container">
            <div className="noury-ramadan">
              <img src={images.madinah} alt="Madinah at sunset" />

              <div className="noury-ramadan-copy">
                <div className="noury-eyebrow">
                  <span className="noury-eyebrow-line" />
                  Ramadan 2027
                </div>

                <h2>
                  Ramadan in the
                  <br />
                  sacred cities.
                </h2>

                <p>
                  Experience a meaningful Ramadan journey with carefully
                  planned accommodation, transport, visa assistance, Ziyarat
                  and group support.
                </p>

                <button
                  className="noury-btn noury-btn-primary"
                  style={{ marginTop: 20 }}
                  onClick={() =>
                    openWhatsApp(
                      "Hello Noury. I would like information about the Ramadan 2027 Umrah package."
                    )
                  }
                >
                  Explore Ramadan 2027
                  <Icon name="arrow" size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INCLUDES */}
        <section className="noury-section noury-section-dark">
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">Included in your journey</div>
                <h2 className="noury-section-title">
                  Designed around
                  <br />
                  your peace of mind.
                </h2>
              </div>

              <p className="noury-section-description">
                The details matter. We bring together the practical services
                that help your pilgrimage feel more organized.
              </p>
            </div>

            <div className="noury-includes">
              {includes.map((item) => (
                <div className="noury-include" key={item.title}>
                  <div className="noury-include-icon">
                    <Icon name={item.icon} size={23} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>Carefully arranged as part of your travel experience.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLIGHTS */}
        <section className="noury-section" id="flights">
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">2027 departure schedule</div>
                <h2 className="noury-section-title">
                  Your departure,
                  <br />
                  planned ahead.
                </h2>
              </div>

              <p className="noury-section-description">
                Current published departure dates from Kano and Abuja.
                Schedules and availability may be updated by the agency.
              </p>
            </div>

            <div className="noury-flights">
              <div className="noury-flight-row noury-flight-head">
                <div>Departure</div>
                <div>Return</div>
                <div>Origin</div>
                <div>Status</div>
              </div>

              {flights.map(([departure, returnDate, origin]) => (
                <div className="noury-flight-row" key={`${departure}-${origin}`}>
                  <div className="noury-flight-cell">
                    {departure}
                    <span>2027</span>
                  </div>

                  <div className="noury-flight-cell">
                    {returnDate}
                    <span>2027</span>
                  </div>

                  <div className="noury-flight-cell">
                    {origin}
                    <span>Nigeria</span>
                  </div>

                  <div>
                    <span className="noury-status">Available for enquiry</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY NOURY */}
        <section className="noury-section" style={{ paddingTop: 0 }}>
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">Why Noury</div>
                <h2 className="noury-section-title">
                  Travel with clarity.
                  <br />
                  Arrive with confidence.
                </h2>
              </div>

              <p className="noury-section-description">
                We focus on the details that make organized travel feel
                effortless — from documentation to accommodation and support.
              </p>
            </div>

            <div className="noury-stats">
              <div className="noury-stat">
                <div className="noury-stat-number">01</div>
                <div className="noury-stat-label">
                  Complete Hajj & Umrah travel support
                </div>
              </div>

              <div className="noury-stat">
                <div className="noury-stat-number">02</div>
                <div className="noury-stat-label">
                  Carefully planned accommodation and transport
                </div>
              </div>

              <div className="noury-stat">
                <div className="noury-stat-number">03</div>
                <div className="noury-stat-label">
                  Visa, Ziyarat and group travel assistance
                </div>
              </div>

              <div className="noury-stat">
                <div className="noury-stat-number">04</div>
                <div className="noury-stat-label">
                  Direct customer support throughout your journey
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="noury-section" style={{ paddingTop: 40 }}>
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">Your journey</div>
                <h2 className="noury-section-title">
                  From first conversation
                  <br />
                  to return home.
                </h2>
              </div>
            </div>

            <div className="noury-timeline">
              {[
                ["01", "Consultation", "Tell us where you want to go."],
                ["02", "Selection", "Choose the right package."],
                ["03", "Documentation", "Prepare visa and travel documents."],
                ["04", "Preparation", "Flights and accommodation arranged."],
                ["05", "Departure", "Begin your journey."],
                ["06", "Holy Journey", "Travel with organized support."],
                ["07", "Return", "Arrive home with peace of mind."],
              ].map(([number, title, text]) => (
                <div className="noury-step" key={number}>
                  <div className="noury-step-dot">{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="noury-section" style={{ paddingTop: 40 }}>
          <div className="noury-container">
            <div className="noury-section-head">
              <div>
                <div className="noury-section-kicker">Destinations</div>
                <h2 className="noury-section-title">
                  Beyond the ordinary.
                </h2>
              </div>

              <p className="noury-section-description">
                Sacred journeys and international travel experiences arranged
                around your plans.
              </p>
            </div>

            <div className="noury-gallery">
              <div className="noury-gallery-item">
                <img src={images.kaaba} alt="Kaaba" />
              </div>

              <div className="noury-gallery-item">
                <img src={images.madinah} alt="Madinah" />
              </div>

              <div className="noury-gallery-item">
                <img src={images.hotel} alt="Hotel" />
              </div>

              <div className="noury-gallery-item">
                <img src={images.airport} alt="Airport" />
              </div>

              <div className="noury-gallery-item">
                <img src={images.desert} alt="Desert landscape" />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / CONTACT */}
        <section className="noury-section" id="about">
          <div className="noury-container">
            <div className="noury-contact" id="contact">
              <div className="noury-contact-copy">
                <div className="noury-eyebrow">
                  <span className="noury-eyebrow-line" />
                  Begin your journey
                </div>

                <h2>
                  Let's plan
                  <br />
                  something meaningful.
                </h2>

                <p>
                  Noury Traveling & Tour Agency is dedicated to helping
                  travelers experience organized, comfortable and meaningful
                  journeys through professional travel services.
                </p>

                <div className="noury-contact-details">
                  <div className="noury-contact-detail">
                    <Icon name="location" size={17} />
                    Maje Plaza No. 7, Second Floor, Along Federal Secretariat,
                    Kano State, Nigeria
                  </div>

                  <div className="noury-contact-detail">
                    <Icon name="phone" size={17} />
                    +234 806 393 8241 · +234 903 128 3263
                  </div>

                  <div className="noury-contact-detail">
                    <Icon name="mail" size={17} />
                    nourytravelingagency@gmail.com
                  </div>
                </div>
              </div>

              <div className="noury-contact-form">
                {submitted ? (
                  <div className="noury-success">
                    <Icon name="check" size={30} />
                    <h3>Enquiry received.</h3>
                    <p>
                      Thank you for contacting Noury. Our team can continue the
                      conversation with you on WhatsApp.
                    </p>

                    <button
                      className="noury-btn noury-btn-primary"
                      style={{ marginTop: 15 }}
                      onClick={() => openWhatsApp()}
                    >
                      Continue on WhatsApp
                      <Icon name="whatsapp" size={15} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="noury-section-kicker">Enquiry</div>
                    <h3
                      style={{
                        color: "var(--n-green)",
                        fontFamily: "Georgia, serif",
                        fontSize: 30,
                        fontWeight: 500,
                        margin: "8px 0 24px",
                      }}
                    >
                      Tell us about your trip.
                    </h3>

                    <form onSubmit={handleBooking}>
                      <div className="noury-form-grid">
                        <div className="noury-form-group">
                          <label>Full name</label>
                          <input required placeholder="Your name" />
                        </div>

                        <div className="noury-form-group">
                          <label>Phone</label>
                          <input required placeholder="+234..." />
                        </div>

                        <div className="noury-form-group">
                          <label>Email</label>
                          <input type="email" placeholder="you@example.com" />
                        </div>

                        <div className="noury-form-group">
                          <label>Travel type</label>
                          <select
                            value={bookingType}
                            onChange={(e) => setBookingType(e.target.value)}
                          >
                            <option>Hajj</option>
                            <option>Umrah</option>
                            <option>Ramadan Umrah</option>
                            <option>International Flight</option>
                            <option>Visa Service</option>
                            <option>Hotel</option>
                          </select>
                        </div>

                        <div className="noury-form-group">
                          <label>Preferred date</label>
                          <input type="date" />
                        </div>

                        <div className="noury-form-group">
                          <label>Travelers</label>
                          <input type="number" min="1" placeholder="1" />
                        </div>

                        <div className="noury-form-group full">
                          <label>Message</label>
                          <textarea
                            placeholder="Tell us what you need help with..."
                          />
                        </div>

                        <div className="noury-form-group full">
                          <button
                            type="submit"
                            className="noury-btn noury-btn-primary"
                            style={{ width: "100%" }}
                          >
                            Send Enquiry
                            <Icon name="arrow" size={15} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="noury-footer">
          <div className="noury-container">
            <div className="noury-footer-top">
              <div className="noury-footer-brand">
                <a href="#home" className="noury-logo">
                  <span className="noury-logo-mark">N</span>
                  <span>
                    <span
                      className="noury-logo-name"
                      style={{ color: "white" }}
                    >
                      Noury
                    </span>
                    <span className="noury-logo-sub">
                      Traveling & Tour Agency
                    </span>
                  </span>
                </a>

                <p>
                  Your Journey, Our Passion. Professional travel services for
                  Hajj, Umrah and international journeys.
                </p>

                <button
                  className="noury-btn noury-btn-primary"
                  onClick={() => openWhatsApp()}
                >
                  <Icon name="whatsapp" size={15} />
                  WhatsApp Noury
                </button>
              </div>

              <div>
                <h4>Explore</h4>
                <a href="#hajj">Hajj</a>
                <a href="#umrah">Umrah</a>
                <a href="#flights">Flights</a>
                <a href="#services">Services</a>
              </div>

              <div>
                <h4>Services</h4>
                <span>Visa Assistance</span>
                <span>Hotels</span>
                <span>Transportation</span>
                <span>Ziyarat</span>
              </div>

              <div>
                <h4>Contact</h4>
                <span>+234 806 393 8241</span>
                <span>+234 903 128 3263</span>
                <span>nourytravelingagency@gmail.com</span>
                <span>Kano, Nigeria</span>
              </div>
            </div>

            <div className="noury-footer-bottom">
              <span>
                © 2027 Noury Traveling & Tour Agency. All Rights Reserved.
              </span>
              <span>
                Privacy Policy · Terms & Conditions · Booking Policy
              </span>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP */}
        <button
          className="noury-floating-wa"
          onClick={() => openWhatsApp()}
          aria-label="Contact Noury on WhatsApp"
        >
          <Icon name="whatsapp" size={24} />
        </button>

        {/* BOOKING MODAL */}
        {bookingOpen && (
          <div
            className="noury-modal"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setBookingOpen(false);
              }
            }}
          >
            <div className="noury-modal-card">
              <div className="noury-modal-header">
                <div>
                  <div className="noury-section-kicker">Start planning</div>
                  <h2>Your journey begins here.</h2>
                </div>

                <button
                  className="noury-close"
                  onClick={() => setBookingOpen(false)}
                  aria-label="Close"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>

              <div className="noury-form-grid">
                {["Hajj", "Umrah", "Ramadan Umrah", "Flights"].map((type) => (
                  <button
                    key={type}
                    className="noury-btn"
                    style={{
                      background:
                        bookingType === type ? "var(--n-green)" : "#f4f1e8",
                      color:
                        bookingType === type ? "white" : "var(--n-green)",
                      border: "1px solid rgba(6,60,47,.08)",
                    }}
                    onClick={() => setBookingType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div
                style={{
                  marginTop: 25,
                  padding: 20,
                  borderRadius: 18,
                  background: "#f7f3e9",
                }}
              >
                <div className="noury-section-kicker">Selected journey</div>
                <div
                  style={{
                    color: "var(--n-green)",
                    fontFamily: "Georgia, serif",
                    fontSize: 27,
                  }}
                >
                  {bookingType}
                </div>
              </div>

              <button
                className="noury-btn noury-btn-primary"
                style={{ width: "100%", marginTop: 18 }}
                onClick={() => {
                  setBookingOpen(false);
                  openWhatsApp(
                    `Hello Noury. I would like to enquire about ${bookingType}.`
                  );
                }}
              >
                Continue on WhatsApp
                <Icon name="whatsapp" size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
