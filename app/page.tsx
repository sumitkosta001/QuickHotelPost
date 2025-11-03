"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

import heroImage from "@/public/hotel.jpeg";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Github,
} from "lucide-react";

const features = [
  {
    icon: "🏨",
    title: "Property Management",
    description: "Effortlessly manage properties with an intuitive dashboard.",
  },
  {
    icon: "📆",
    title: "Smart Booking",
    description: "Real-time automated booking sync across all platforms.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Track performance and revenue with powerful insights.",
  },
  {
    icon: "⚡",
    title: "Quick Updates",
    description: "Post and manage listings in seconds.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Enterprise-grade security for all your property data.",
  },
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Optimized for smooth and quick operations.",
  },
];

export default function Home() {
  const router = useRouter();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/30 transition-all duration-500 ${
          isScrolledDown
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            className="text-2xl font-bold bg-gradient-to-bl from-primary via-primary to-accent bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => router.push("/")}
          >
            QuickHotelPost
          </h1>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="relative text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:-bottom-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:-bottom-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="group relative overflow-hidden text-md font-medium px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white border border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 focus:outline-none"
            >
              {/* Hover overlay for dark effect */}
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

              <span className="relative z-10 flex items-center gap-2">
                Get Started
              </span>
            </button>

            {/* Conditional Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-md font-medium px-4 py-2 rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "w-10 h-10 rounded-full border border-primary/30 shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>

          {/* Mobile menu icon */}
          <Menu className="w-6 h-6 md:hidden cursor-pointer transition-transform duration-300 hover:scale-110" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroImage}
          alt="Luxury Hotel Lobby"
          layout="fill"
          className="absolute inset-0 object-cover opacity-30"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        {/* Animated Hotel Icons */}
        <motion.div
          className="absolute bottom-24 right-10 text-6xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{
            delay: 0.8,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🛎️
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 py-40 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Revolutionize Hotel Management
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
            QuickHotelPost
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Streamline operations and boost bookings with the fastest hotel
            posting platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              onClick={() => router.push("/dashboard")}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/learn-more")}
              className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 text-lg px-8 py-6 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools designed to simplify hotel management and supercharge your
              revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ready to Transform Your Hotel Business?
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of hotels already using QuickHotelPost to automate
              and grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => router.push("/dashboard")}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg px-10 py-7 hover:scale-105"
              >
                Start Free Trial
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 text-lg px-10 py-7 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-[#0f172a] text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* Tagline */}
          <p className="text-center text-sm md:text-base text-gray-400">
            Making hotel posting easier, faster and smarter.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="https://facebook.com/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://instagram.com/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a
              href="https://twitter.com/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/50"
            >
              <Twitter className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/50"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://youtube.com/yourChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50"
            >
              <Youtube className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/50"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* 4 Column Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-white">Solutions</h4>
              <ul className="space-y-2">
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Automation</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Support</h4>
              <ul className="space-y-2">
                <li>Submit ticket</li>
                <li>Documentation</li>
                <li>Guides</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>License</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 py-3 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} QuickHotelPost. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
