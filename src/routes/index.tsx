import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Croissant,
  Heart,
  Instagram,
  PackageCheck,
  Sparkles,
  Star,
} from "lucide-react";

import hero from "@/assets/hero-bread.jpg";
import croissant from "@/assets/croissant.jpg";
import macarons from "@/assets/macarons.jpg";
import cinnamonRoll from "@/assets/cinnamon-roll.jpg";
import cake from "@/assets/custom-cake.jpg";
import bakery from "@/assets/bakery-interior.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import { useCart } from "@/context/cart-context";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Hero() {
  return (
    <section className="playful-hero">
      <div className="hero-doodle hero-doodle-one hero-comic-bubble">FRESH!</div>
      <div className="hero-doodle hero-doodle-two">✦</div>
      <div className="mx-auto grid min-h-[94vh] max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 animate-fade-up">
          {/* <span className="brand-pill">
            <Croissant className="h-7 w-7" /> Small batches · Big feelings
          </span> */}
          <h1 className="hero-playful-title">
            Baked to make
            <span>
              your day
              <Croissant
                aria-hidden="true"
                className="ml-[0.1em] inline-block size-[0.23em] animate-spin align-[-0.03em] stroke-[2.25] [animation-duration:4s]"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-coffee/75 sm:text-xl">
            Joyfully over-the-top pastries, slow-fermented breads, and celebration cakes made from
            scratch in New Delhi.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/menu" className="playful-button playful-button-dark">
              See this week&apos;s bakes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="playful-button playful-button-light">
              Meet the bakers
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm font-semibold text-chocolate">
            <div className="flex -space-x-3">
              {[croissant, macarons, cupcakes].map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-[#f8c7d0] object-cover"
                />
              ))}
            </div>
            <span>15,000+ happy snackers</span>
          </div>
        </div>

        <div className="hero-collage" aria-label="A selection of Golden Crust baked goods">
          <div className="hero-photo-main">
            <img src={hero} alt="Freshly baked artisan bread" />
          </div>
          <div className="hero-photo-small">
            <img src={cinnamonRoll} alt="Fresh cinnamon roll" />
          </div>
          <div className="hero-sticker">
            <Star className="h-5 w-5 fill-current" />
            <span>Voted local favorite</span>
          </div>
          <Heart className="hero-heart" fill="currentColor" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Baked fresh", "Made with butter", "No boring bites", "Local ingredients"];
  return (
    <div className="playful-marquee" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>
            {word} <Sparkles />
          </span>
        ))}
      </div>
    </div>
  );
}

const weeklyBakes = [
  { name: "Butter Cloud", note: "Flaky croissant · cultured butter", price: 185, image: croissant },
  {
    name: "Sunday Swirl",
    note: "Cinnamon · brown sugar · vanilla",
    price: 220,
    image: cinnamonRoll,
  },
  { name: "Party Pack", note: "Six joyful little cupcakes", price: 720, image: cupcakes },
];

function WeeklyDrop() {
  const { addItem } = useCart();
  return (
    <section className="bg-[#fff8ea] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Fresh from the oven</span>
            <h2 className="playful-heading mt-3 text-[#5c3a21]!">This week&apos;s treats.</h2>
          </div>
          <Link to="/menu" className="scribble-link">
            Shop the full menu <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {weeklyBakes.map((item, index) => (
            <article
              key={item.name}
              className={`treat-card reveal treat-card-${index + 1}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="treat-image-wrap">
                <img src={item.image} alt={item.name} />
                <span>₹{item.price}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
              <button
                onClick={() => addItem({ name: item.name, price: item.price, img: item.image })}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-chocolate hover:text-[#d9544d]"
              >
                Add to box <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="reveal relative">
          <div className="manifesto-photo">
            <img src={bakery} alt="The warm interior of Golden Crust bakery" />
          </div>
          <div className="manifesto-badge">Since 2004 · Delhi</div>
        </div>
        <div className="reveal">
          <span className="section-kicker text-[#ffe89d]">Our whole thing</span>
          <h2
            className="playful-heading craft-letter-heading mt-4"
            aria-label="Serious craft. Zero seriousness."
          >
            {["Serious craft.", "Zero seriousness."].map((line, lineIndex) => (
              <span key={line} className="craft-letter-line" aria-hidden="true">
                {Array.from(line).map((letter, letterIndex) => (
                  <span
                    key={`${letter}-${letterIndex}`}
                    className="craft-letter"
                    style={{ animationDelay: `${(lineIndex * 5 + letterIndex) * 55}ms` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#fff8ea]/75">
            We obsess over fermentation, laminating, and the best local ingredients—then cover the
            result in sprinkles. Because exceptional baking should still feel like fun.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              "Mixed and shaped by hand",
              "Baked fresh every morning",
              "Organic flour and real butter",
              "Anything unsold is donated",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-semibold text-[#fff8ea]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f8c7d0] text-chocolate">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
          <Link to="/about" className="playful-button mt-10 bg-[#ffe89d] text-chocolate">
            Our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Pick your favorites",
      text: "Our menu changes with the seasons and our moods.",
    },
    {
      number: "02",
      title: "Build your box",
      text: "Order a little treat or enough to win over the office.",
    },
    {
      number: "03",
      title: "Collect the joy",
      text: "Choose pickup or warm same-day delivery across Delhi.",
    },
  ];
  return (
    <section className="bg-[#a9d4c6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="section-kicker">Easy as pie</span>
          <h2 className="playful-heading mt-3">How to get the goods.</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="order-step reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span>{step.number}</span>
              <PackageCheck className="h-8 w-8 text-[#d9544d]" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews-section py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="reviews-stars reveal mx-auto flex w-fit gap-1 text-[#d9544d]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-6 w-6 fill-current" />
          ))}
        </div>
        <blockquote className="reveal mt-8 font-display text-4xl font-semibold leading-tight text-chocolate sm:text-5xl lg:text-7xl">
          “The croissants crackle, the cakes are little works of art, and somehow everyone here
          remembers your name.”
        </blockquote>
        <p className="reveal mt-8 font-bold uppercase tracking-[0.18em] text-coffee/60">
          Priya S. · Neighborhood regular
        </p>
      </div>
    </section>
  );
}

function CakeCallout() {
  return (
    <section className="cake-callout">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="reveal order-2 lg:order-1">
          <span className="section-kicker text-[#d9544d]">Make a wish</span>
          <h2 className="playful-heading mt-3 text-[#79b3a0]!">Big day? Bring cake.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-coffee/70">
            Birthdays, weddings, “I made it through Tuesday”—we make custom cakes for every kind of
            celebration.
          </p>
          <Link to="/custom-cakes" className="playful-button playful-button-dark mt-8">
            Dream up a cake <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="reveal order-1 lg:order-2">
          <div className="cake-photo-stack">
            <img src={cake} alt="A custom celebration cake" />
            <img src={macarons} alt="Colorful macarons" />
            <span>You imagine it. We bake it.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialNewsletter() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section className="bg-[#f8c7d0] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="reveal">
            <span className="section-kicker">Follow the crumbs</span>
            <h2 className="playful-heading mt-3">Fresh out of our feed.</h2>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[cupcakes, croissant, cinnamonRoll].map((image, index) => (
                <a key={image} href="#" className={`social-tile social-tile-${index + 1}`}>
                  <img src={image} alt="Golden Crust creation on Instagram" />
                  <Instagram className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="newsletter-card reveal">
            <Sparkles className="h-8 w-8 text-[#d9544d]" />
            <h3>Good news, served warm.</h3>
            <p>Weekly drops, seasonal specials, and 10% off your first box.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubscribed(true);
              }}
              className="mt-7"
            >
              <label htmlFor="home-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input id="home-email" type="email" required placeholder="you@breakfast.com" />
                <button>{subscribed ? "You're in!" : "Sign me up"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  useReveal();
  return (
    <div className="overflow-hidden bg-[#fff8ea] text-foreground">
      <Hero />
      <Marquee />
      <WeeklyDrop />
      <Manifesto />
      <HowToOrder />
      <Reviews />
      <CakeCallout />
      <SocialNewsletter />
    </div>
  );
}
