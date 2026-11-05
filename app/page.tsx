// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: "eventhub",
      title: "EventHub Platform",
      category: "web",
      description: "Full-stack event management and seat reservation dashboard with real-time occupancy calculations and CRUD operations.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      badge: "Featured",
      accuracy: null,
      liveUrl: "https://your-eventhub-demo.vercel.app",
      githubUrl: "https://github.com/shravangandhadha/Ticket_Booking_and_Management"
    },
    {
      id: "heart-disease",
      title: "Heart Disease Predictor",
      category: "ml",
      description: "Machine learning diagnostics application providing real-time risk assessment based on clinical metrics.",
      tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
      badge: "89% Accuracy",
      accuracy: "89%",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "ticket-booking",
      title: "Ticket Booking & Management System",
      category: "web",
      description: "Full-stack CRUD system tailored for student project submissions with interactive schedule calendars and user management.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      badge: "Client Ready",
      accuracy: null,
      liveUrl: "https://your-ticket-system.vercel.app",
      githubUrl: "https://github.com/shravangandhadha/Ticket_Booking_and_Management"
    }
  ];

  const services = [
    {
      title: "Final-Year Project Development",
      description: "End-to-end coding, database integration, clean project architecture, and complete documentation setup.",
      icon: "⚡"
    },
    {
      title: "Bug Fixing & Code Optimization",
      description: "Debugging runtime errors, fixing broken database connections, performance optimization, and refactoring.",
      icon: "🛠️"
    },
    {
      title: "UI/UX & Frontend Conversion",
      description: "Converting Figma designs, wireframes, or rough concepts into modern, responsive React/Next.js interfaces.",
      icon: "🎨"
    }
  ];

  const achievements = [
    { title: "Vadodara Hackathon 6.0", role: "Team Leader — Project SPARC", tag: "Hackathon" },
    { title: "PU Code Hackathon 3.0", role: "36-Hour Coding Challenge Leader", tag: "Hackathon" },
    { title: "Promptwars x Parul University", role: "Deployed Capstone Finalist", tag: "Prompt Eng" },
    { title: "Industrial Visiting Professor Program", role: "Built ML Model with 89% Accuracy", tag: "AI/ML" }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const copyWhatsAppMessage = () => {
    navigator.clipboard.writeText("Hi Channaveerayya, I saw your portfolio and I need help with my final-year project.");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Sticky Glassmorphic Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              C
            </span>
            <span>Channaveerayya<span className="text-indigo-400">.dev</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a 
            href="https://wa.me/?text=Hi%20Channaveerayya,%20I%20saw%20your%20portfolio%20and%20need%20help%20with%20a%20project." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            WhatsApp Chat
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 max-w-2xl text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3.5 py-1.5 rounded-full text-xs font-medium">
            <span>💻</span> Available for Final-Year Student Commissions
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Full-Stack Developer & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">ML Engineer</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Specialized in Next.js web applications, Python machine learning models, and custom CRUD systems designed to help students deliver standout final-year projects.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all">
              View Projects ↓
            </a>
            <a 
              href="#contact" 
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-xs px-6 py-3.5 rounded-xl hover:scale-105 transition-all">
              Hire Me / Contact
            </a>
          </div>
        </div>

        {/* Profile / Stats Card */}
        <div className="w-full max-w-sm bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-6 backdrop-blur-sm shadow-2xl relative group hover:border-slate-700 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/20">
              CG
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Channaveerayya</h3>
              <p className="text-xs text-slate-400">B.Tech CSE (AI & ML)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Specialization</span>
              <span className="font-semibold text-slate-200">Full-Stack & ML</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">ML Accuracy</span>
              <span className="font-semibold text-emerald-400">89% Model Precision</span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between"><span className="text-slate-500">Primary Stack:</span> <span className="font-medium text-slate-200">Next.js, Python, Tailwind</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Database:</span> <span className="font-medium text-slate-200">MySQL, SQL</span></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 space-y-10 border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
            <p className="text-xs text-slate-400 max-w-md">Production-ready applications built to industry standards with complete source code.</p>
          </div>

          {/* Tab Filter */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('web')} 
              className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'web' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>
              Full-Stack
            </button>
            <button 
              onClick={() => setActiveTab('ml')} 
              className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'ml' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>
              Machine Learning
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div key={p.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                  {p.accuracy && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      {p.accuracy}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <a 
                  href={p.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center py-2 rounded-xl text-xs font-semibold transition">
                  Live Demo
                </a>
                <a 
                  href={p.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium transition">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 space-y-10 border-t border-slate-800/60">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Services & Student Offers</h2>
          <p className="text-xs text-slate-400">Clear deliverables designed specifically for university assignments and final-year submissions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS / PROOF OF WORK */}
      <section id="achievements" className="max-w-6xl mx-auto px-6 py-20 space-y-10 border-t border-slate-800/60">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Hackathons & Track Record</h2>
          <p className="text-xs text-slate-400">Verified competitive programming, hackathon leadership, and technical assessments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                {item.tag}
              </span>
              <h4 className="text-sm font-bold text-white pt-1">{item.title}</h4>
              <p className="text-xs text-slate-400">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTACT FORM */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 space-y-10 border-t border-slate-800/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white">Need a Project Built?</h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Send a message directly via WhatsApp or copy the standard inquiry template below to start your project consultation immediately.
            </p>

            <div className="pt-2">
              <button 
                onClick={copyWhatsAppMessage}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-xs font-semibold transition">
                {copied ? "✓ Template Copied!" : "📋 Copy Inquiry Message"}
              </button>
            </div>
          </div>

          {/* Quick Contact Form Box */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-white">Direct Client Outreach</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Project Category</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500">
                  <option>Full-Stack Web Application (Next.js)</option>
                  <option>Machine Learning / AI Prediction System</option>
                  <option>Database CRUD System (MySQL/SQL)</option>
                  <option>Bug Fixes / Code Optimization</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Your Requirements / Details</label>
                <textarea 
                  rows={3} 
                  placeholder="Describe your project requirements, features needed, or submission timeline..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <a 
                href="https://wa.me/?text=Hi%20Channaveerayya,%20I%20saw%20your%20portfolio%20and%20need%20help%20with%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block text-center bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition">
                Send Order Request via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Channaveerayya. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}