import { useState } from "react";

const services = [
  {
    title: "Hajj Packages",
    description:
      "Organized Hajj packages with accommodation, transportation, visa assistance, meals and guided support.",
    icon: "🕋",
  },
  {
    title: "Umrah Packages",
    description:
      "Comfortable and carefully planned Umrah journeys designed for individuals, families and groups.",
    icon: "🌙",
  },
  {
    title: "Flights",
    description:
      "International flight arrangements with carefully selected travel schedules.",
    icon: "✈️",
  },
  {
    title: "Visa Services",
    description:
      "Professional assistance with travel documentation and visa processing.",
    icon: "📄",
  },
  {
    title: "Hotels",
    description:
      "Accommodation options selected for comfort, convenience and proximity.",
    icon: "🏨",
  },
  {
    title: "Transportation",
    description:
      "Reliable airport transfers and ground transportation throughout your journey.",
    icon: "🚌",
  },
];

const umrahPackages = [
  {
    name: "Economy",
    price: "₦4,700,000",
    description: "A comfortable and carefully organized Umrah experience.",
  },
  {
    name: "Luxury",
    price: "₦6,000,000",
    description: "Enhanced accommodation and premium travel comfort.",
    popular: true,
  },
  {
    name: "Premium",
    price: "₦11,000,000",
    description: "A premium Umrah experience with elevated comfort and services.",
  },
];

const flights = [
  ["Kano", "07 Feb 2027", "14 Mar 2027"],
  ["Kano", "11 Feb 2027", "16 Mar 2027"],
  ["Kano", "16 Feb 2027", "10 Mar 2027"],
  ["Kano", "18 Feb 2027", "11 Mar 2027"],
  ["Kano", "23 Feb 2027", "09 Mar 2027"],
  ["Kano", "24 Feb 2027", "09 Mar 2027"],
  ["Abuja", "21 Feb 2027", "10 Mar 2027"],
  ["Abuja", "23 Feb 2027", "10 Mar 2027"],
  ["Abuja", "24 Feb 2027", "10 Mar 2027"],
  ["Abuja", "25 Feb 2027", "11 Mar 2027"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappNumber = "2348063938241";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello Noury Traveling & Tour Agency, I would like to make an enquiry."
      )}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f3e8] text-[#20251f]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-[#063c2f]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a45c] text-xl">
              ✦
            </div>
            <div>
              <div className="font-serif text-lg font-bold tracking-wide">
                NOURY
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#e4c982]">
                Traveling & Tour Agency
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm lg:flex">
            <a href="#home" className="hover:text-[#e4c982]">Home</a>
            <a href="#hajj" className="hover:text-[#e4c982]">Hajj</a>
            <a href="#umrah" className="hover:text-[#e4c982]">Umrah</a>
            <a href="#ramadan" className="hover:text-[#e4c982]">Ramadan</a>
            <a href="#flights" className="hover:text-[#e4c982]">Flights</a>
            <a href="#about" className="hover:text-[#e4c982]">About</a>
            <a href="#contact" className="hover:text-[#e4c982]">Contact</a>
          </nav>

          <button
            onClick={openWhatsApp}
            className="hidden rounded-full bg-[#c9a45c] px-5 py-2.5 text-sm font-semibold text-[#063c2f] transition hover:bg-[#e4c982] sm:block"
          >
            WhatsApp Us
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#063c2f] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {["Home", "Hajj", "Umrah", "Ramadan", "Flights", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#063c2f]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=2000&q=85"
            alt="Holy Kaaba"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063c2f] via-[#063c2f]/75 to-[#063c2f]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063c2f] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#e4c982]/50 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e4c982]">
              Hajj • Umrah • Flights • Hotels • Visa
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-8xl">
              Your Journey,
              <span className="block text-[#e4c982]">Our Passion.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Your journey to the sacred lands, handled with care. Discover
              organized Hajj, Umrah and international travel services designed
              around comfort, trust and peace of mind.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#hajj"
                className="rounded-full bg-[#c9a45c] px-7 py-4 text-center font-semibold text-[#063c2f] transition hover:bg-[#e4c982]"
              >
                Explore Hajj Packages
              </a>

              <a
                href="#umrah"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Umrah
              </a>

              <button
                onClick={openWhatsApp}
                className="rounded-full border border-[#e4c982]/60 px-7 py-4 font-semibold text-[#e4c982]"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[#d9c8a7] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-8">
          {[
            ["✦", "Professional Support"],
            ["◈", "Complete Travel Services"],
            ["✓", "Organized Journeys"],
            ["☎", "Customer Assistance"],
          ].map(([icon, title]) => (
            <div key={title} className="flex items-center gap-3">
              <span className="text-xl text-[#b08a43]">{icon}</span>
              <span className="text-sm font-semibold text-[#063c2f]">{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
              Our Services
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
              Everything you need for your journey.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              From visa assistance and flights to accommodation and
              transportation, we help organize the important details of your
              journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#dfd3bb] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4ead6] text-2xl">
                  {service.icon}
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-[#063c2f]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hajj */}
      <section id="hajj" className="bg-[#063c2f] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e4c982]">
              Hajj 2027
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-6xl">
              A sacred journey, carefully organized.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Experience a thoughtfully organized Hajj journey with support
              from documentation and visa assistance to accommodation,
              transportation, meals and guided Ziyarat.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Accommodation",
                "Visa Assistance",
                "Transportation",
                "Daily Meals",
                "Guided Ziyarat",
                "Group Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="mt-9 rounded-full bg-[#c9a45c] px-7 py-4 font-semibold text-[#063c2f]"
            >
              Request Hajj Information
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=85"
              alt="Pilgrims in Makkah"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Umrah */}
      <section id="umrah" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
              Umrah Packages
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
              Choose your Umrah experience.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {umrahPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm ${
                  pkg.popular
                    ? "border-[#c9a45c] shadow-lg"
                    : "border-[#dfd3bb]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#c9a45c] px-3 py-1 text-xs font-bold text-[#063c2f]">
                    POPULAR
                  </div>
                )}

                <p className="text-sm font-bold uppercase tracking-widest text-[#b08a43]">
                  {pkg.name}
                </p>

                <div className="mt-5 font-serif text-4xl font-bold text-[#063c2f]">
                  {pkg.price}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {pkg.description}
                </p>

                <div className="my-7 h-px bg-[#eadfc9]" />

                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✓ Hotel accommodation</li>
                  <li>✓ Transportation</li>
                  <li>✓ Visa assistance</li>
                  <li>✓ Ziyarat support</li>
                  <li>✓ Customer assistance</li>
                </ul>

                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-8 w-full rounded-full bg-[#063c2f] py-3.5 font-semibold text-white transition hover:bg-[#075b45]"
                >
                  Request Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ramadan */}
      <section id="ramadan" className="bg-[#f0e5ce] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#063c2f] p-8 text-white sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e4c982]">
                Ramadan 2027
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-6xl">
                Welcome Ramadan in the sacred lands.
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Plan your Ramadan Umrah with organized accommodation,
                transportation, visa assistance and group support.
              </p>

              <button
                onClick={() => setModalOpen(true)}
                className="mt-8 rounded-full bg-[#c9a45c] px-7 py-4 font-semibold text-[#063c2f]"
              >
                Ask About Ramadan Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Includes */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
                Package Includes
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
                Travel with fewer things to worry about.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Hotels Near Haram",
                "Guided Group Travel",
                "Comfortable Transport",
                "Daily Meals",
                "Visa & Ziyarat",
                "Travel Assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#dfd3bb] bg-white p-5 font-semibold text-[#063c2f]"
                >
                  <span className="mr-3 text-[#b08a43]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flights */}
      <section id="flights" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
              Flight Schedule
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
              Upcoming departure schedules.
            </h2>
            <p className="mt-4 text-gray-600">
              Schedule information can be updated as new departures are
              confirmed.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#dfd3bb]">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-[#063c2f] text-white">
                <tr>
                  <th className="px-6 py-4">Departure</th>
                  <th className="px-6 py-4">Departure Date</th>
                  <th className="px-6 py-4">Return Date</th>
                </tr>
              </thead>
              <tbody>
                {flights.map(([location, departure, returning]) => (
                  <tr
                    key={`${location}-${departure}`}
                    className="border-b border-[#eee5d5] last:border-0"
                  >
                    <td className="px-6 py-4 font-semibold text-[#063c2f]">
                      {location}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{departure}</td>
                    <td className="px-6 py-4 text-gray-600">{returning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
              Why Noury
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
              Built around your peace of mind.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Experienced Team",
              "Complete Hajj & Umrah Support",
              "Comfortable Accommodation",
              "Reliable Transportation",
              "Visa Assistance",
              "Guided Ziyarat",
              "Customer Support",
              "Organized Group Travel",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-[#e4d9c5]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e8d2] text-xl text-[#b08a43]">
                  ✓
                </div>
                <h3 className="mt-4 font-semibold text-[#063c2f]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="bg-[#063c2f] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e4c982]">
              Your Journey
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              From planning to returning home.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {[
              "Consultation",
              "Package Selection",
              "Documentation & Visa",
              "Flight & Accommodation",
              "Departure",
              "Holy Journey",
              "Return Home",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-bold text-[#e4c982]">
                  0{index + 1}
                </div>
                <div className="mt-3 text-sm font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
              About Noury
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
              Your journey deserves thoughtful planning.
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Noury Traveling & Tour Agency is dedicated to helping travelers
              experience organized, comfortable and meaningful journeys
              through professional travel services.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              From Hajj and Umrah to international flights, hotels, visas and
              transportation, our goal is to simplify the travel experience
              while keeping you informed and supported.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f0e5ce] p-8 sm:p-12">
            <div className="font-serif text-3xl italic text-[#063c2f]">
              “Your Journey, Our Passion”
            </div>
            <div className="mt-7 h-px bg-[#c9a45c]" />
            <p className="mt-7 text-sm leading-7 text-gray-700">
              Professional travel assistance for sacred journeys and
              international travel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f0e5ce] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a43]">
                Contact Us
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#063c2f] sm:text-5xl">
                Let's plan your journey.
              </h2>

              <div className="mt-8 space-y-5 text-sm text-gray-700">
                <p>
                  <strong className="text-[#063c2f]">Address:</strong><br />
                  Maje Plaza No. 7, Second Floor, Along Federal Secretariat,
                  Kano State, Nigeria.
                </p>

                <p>
                  <strong className="text-[#063c2f]">Phone:</strong><br />
                  +234 806 393 8241
                </p>

                <p>
                  <strong className="text-[#063c2f]">Alternative:</strong><br />
                  +234 903 128 3263
                </p>

                <p>
                  <strong className="text-[#063c2f]">Email:</strong><br />
                  nourytravelingagency@gmail.com
                </p>
              </div>

              <button
                onClick={openWhatsApp}
                className="mt-8 rounded-full bg-[#063c2f] px-7 py-4 font-semibold text-white"
              >
                Chat on WhatsApp
              </button>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
              <h3 className="font-serif text-3xl font-semibold text-[#063c2f]">
                Send an enquiry
              </h3>

              <form
                className="mt-7 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  openWhatsApp();
                }}
              >
                <input
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#c9a45c]"
                />

                <input
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#c9a45c]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#c9a45c]"
                />

                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#c9a45c]">
                  <option>Travel Type</option>
                  <option>Hajj</option>
                  <option>Umrah</option>
                  <option>Ramadan Umrah</option>
                  <option>Flights</option>
                  <option>Visa</option>
                  <option>Hotels</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#c9a45c]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#063c2f] py-4 font-semibold text-white"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#20251f] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-3xl font-bold">NOURY</div>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Traveling & Tour Agency
            </p>
            <p className="mt-2 text-sm text-[#e4c982]">
              Your Journey, Our Passion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/60">
              <a href="#hajj" className="hover:text-white">Hajj</a>
              <a href="#umrah" className="hover:text-white">Umrah</a>
              <a href="#ramadan" className="hover:text-white">Ramadan</a>
              <a href="#flights" className="hover:text-white">Flights</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-4 text-sm leading-6 text-white/60">
              +234 806 393 8241
              <br />
              +234 903 128 3263
              <br />
              nourytravelingagency@gmail.com
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
          © 2027 Noury Traveling & Tour Agency. All Rights Reserved.
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:scale-105"
        aria-label="WhatsApp"
      >
        ☎
      </button>

      {/* Enquiry modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl font-semibold text-[#063c2f]">
                Travel Enquiry
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-2xl text-gray-500"
              >
                ×
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Contact Noury Traveling & Tour Agency directly on WhatsApp for
              package availability, current prices and booking assistance.
            </p>

            <button
              onClick={openWhatsApp}
              className="mt-7 w-full rounded-full bg-[#063c2f] py-4 font-semibold text-white"
            >
              Continue on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
