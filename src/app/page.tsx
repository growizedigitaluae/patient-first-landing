"use client"; // Keep this just in case you add interactivity later, though it's now a server component.

import Image from "next/image";
import { Clock, Globe, HeartHandshake, Plane, Phone, Mail } from "lucide-react";
// 1. Import the official WhatsApp Icon from react-icons/fa
import { FaWhatsapp } from "react-icons/fa"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-200 flex flex-col justify-between selection:bg-[#E5C158]/30 selection:text-[#FDF6D8] font-sans relative overflow-x-hidden">
      
      {/* Hero Background Image with Solid Deep Blue Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero-background.webp"
          alt="Healthcare Patient Consultation"
          fill
          priority
          className="object-cover object-center "
        />
        <div className="absolute inset-0 bg-[#0A192F]/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E5C158]/15 via-[#C5A059]/5 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Header / Navbar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl bg-[#0A192F]/40 backdrop-blur-md border border-[#C5A059]/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 z-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="w-auto h-10 relative">
            <Image 
                src="/logo.png" 
                alt="Patient First Worldwide Logo" 
                width={180} 
                height={40} 
                className="h-full w-auto object-contain"
                priority
            />
          </div>
          <span className="md:hidden text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[linear-gradient(135deg,#E5C158_0%,#C5A059_100%)] text-[#070B14] font-bold">
            Soon
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <a href="tel:+971566960486" className="flex items-center gap-1.5 hover:text-[#E5C158] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#E5C158] flex-shrink-0" />
            <span>+971 56 696 0486</span>
          </a>
          <a href="mailto:info@patientsfirstworldwide.com" className="flex items-center gap-1.5 hover:text-[#E5C158] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#E5C158] flex-shrink-0" />
            <span>info@patientsfirstworldwide.com</span>
          </a>
        </div>

        <span className="hidden md:inline-block text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-[linear-gradient(135deg,#E5C158_0%,#C5A059_100%)] text-[#070B14] font-bold shadow-[0_0_20px_rgba(229,193,88,0.2)]">
          Launching Soon
        </span>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A192F]/80 backdrop-blur-md border border-[#C5A059]/30 text-[#E5C158] text-xs sm:text-sm mb-6 sm:mb-8 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#E5C158] flex-shrink-0" />
          <span>Our global platform is currently undergoing final development</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6 sm:mb-8 text-white">
          Global Healthcare, <span className="bg-gradient-to-r from-[#FDF6D8] via-[#E5C158] to-[#C5A059] bg-clip-text text-transparent">Optimized</span> for Patients.
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mb-8 sm:mb-12 leading-relaxed font-light">
          Patient First Worldwide is building the premier digital bridge between international patients and world-class medical networks. Exceptional care, without borders.
        </p>

        {/* Contact Info Card */}
        <div className="w-full max-w-2xl mb-16 sm:mb-24 bg-[#0A192F]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#C5A059]/25 shadow-2xl shadow-black/50 flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-medium text-white mb-6">Get in Touch With Our Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {/* Phone Button */}
            <a
              href="tel:+971566960486"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#070B14] border border-slate-800 hover:border-[#E5C158]/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5C158]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#E5C158]" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Call Us</span>
              <span className="text-sm font-semibold text-white">+971 56 696 0486</span>
            </a>

            {/* 2. FIXED: WhatsApp Button using official FaWhatsapp icon and proper wa.me link */}
            <a
              href="https://wa.me/971566960486"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#070B14] border border-slate-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {/* Official WhatsApp Icon rendered here */}
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">WhatsApp</span>
              <span className="text-sm font-semibold text-white">Chat Now</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@patientsfirstworldwide.com"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#070B14] border border-slate-800 hover:border-[#E5C158]/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5C158]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#E5C158]" />
              </div>
              <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email Us</span>
              <span className="text-xs font-semibold text-white truncate max-w-full">info@patientsfirstworldwide.com</span>
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full text-left">
          <div className="bg-[#0A192F]/70 backdrop-blur-sm border border-[#C5A059]/20 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-[#C5A059]/40 transition-all">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E5C158]/10 flex items-center justify-center mb-4 sm:mb-6 border border-[#E5C158]/20 shadow-inner">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5C158]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Worldwide Access</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">Connecting you to accredited hospitals, specialized clinics, and expert physicians across the globe.</p>
          </div>

          <div className="bg-[#0A192F]/70 backdrop-blur-sm border border-[#C5A059]/20 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-[#C5A059]/40 transition-all">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E5C158]/10 flex items-center justify-center mb-4 sm:mb-6 border border-[#E5C158]/20 shadow-inner">
              <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5C158]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Patient Advocacy</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">We ensure your medical journey is supported, transparent, and focused entirely on your well-being.</p>
          </div>

          <div className="bg-[#0A192F]/70 backdrop-blur-sm border border-[#C5A059]/20 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-[#C5A059]/40 transition-all">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E5C158]/10 flex items-center justify-center mb-4 sm:mb-6 border border-[#E5C158]/20 shadow-inner">
              <Plane className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5C158]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Seamless Coordination</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">From second opinions to travel logistics, we simplify the complexities of international healthcare.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0A192F] border-t border-[#C5A059]/20 py-8 sm:py-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-auto h-8 sm:h-10 relative">
              <Image 
                  src="/logo.png" 
                  alt="Patient First Worldwide Logo" 
                  width={160} 
                  height={36} 
                  className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white text-xs sm:text-sm">
            <a href="tel:+971566960486" className="flex items-center gap-2 hover:text-[#E5C158] transition-colors">
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span>+971 56 696 0486</span>
            </a>
            <a href="mailto:info@patientsfirstworldwide.com" className="flex items-center gap-2 hover:text-[#E5C158] transition-colors">
              <Mail className="w-4 h-4 text-[#E5C158]" />
              <span>info@patientsfirstworldwide.com</span>
            </a>
          </div>

         <p className="text-slate-300 text-xs tracking-wide">
            Digital Strategy by{" "}
            <a 
              href="https://www.gro-wize.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E5C158] hover:underline font-medium"
            >
              Growize
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}