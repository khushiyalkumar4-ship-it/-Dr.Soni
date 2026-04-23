/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  Mail,
  Calendar, 
  MessageCircle, 
  Award, 
  Users, 
  ChevronRight,
  Menu,
  X,
  HeartPulse
} from 'lucide-react';
import { useState, useEffect } from 'react';

const doctors = [
  { name: "Dr. Devendra Kumar Soni", specialty: "Senior Homeopathic Physician", experience: "Founder" },
  { name: "Dr. Dona Indrani", specialty: "Homeopathic Consultant", experience: "Experienced" },
  { name: "Dr. Narendra", specialty: "Homeopathic Specialist", experience: "Dedicated" },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Timings', href: '#timing' },
  { name: 'Contact', href: '#contact' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">S</div>
            <div>
              <h1 className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>
                DR SONI’S <span className="text-blue-600">HOMOEOPATHIC</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Affordable Healthcare Since 2017</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-900 md:text-white/90 md:hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/918820604880" 
              target="_blank" 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-700 hover:text-teal-700 py-2 border-b border-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/918820604880" 
                target="_blank" 
                className="mt-2 w-full py-4 bg-teal-700 text-white rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background - Using placeholder since quota exceeded */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2070" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        </div>

        <div className="container mx-auto px-10 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-6">
              Welcome to Our Clinic
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Trusted Healing Through <br/><span className="italic font-serif text-blue-400">Pure Homoeopathy.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-xl">
              At Dr Soni’s, we combine decades of tradition with modern patient care. Since 2017, we have been Akbarpur’s choice for safe, reliable, and affordable medical treatment.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Book Appointment
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:08820604880" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                088206 04880
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 right-0 hidden lg:block">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl"
            >
              {[
                { label: 'Successful Cases', value: '10,000+' },
                { label: 'Experienced Doctors', value: '3+' },
                { label: 'Years of Trust', value: '7+' }
              ].map((stat, i) => (
                <div key={i} className="text-center border-r border-white/10 last:border-0">
                  <div className="text-3xl font-serif font-black text-teal-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2040" 
                  alt="Holistic Health" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-2xl -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">The Clinic</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Akbarpur’s Choice for <span className="text-blue-600">Safe and Reliable</span> Healthcare.
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                Dr Soni’s Homoeopathic Clinic is a well-established healthcare center founded in 2017. We are known for providing affordable and high-quality homeopathic treatment. Our focus is on patient care, experienced doctors, and reliable healthcare services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Affordable', desc: 'Accessible care for all.' },
                  { title: 'Natural', desc: 'Side-effect free remedies.' },
                  { title: 'Expert staff', desc: 'Experienced physicians.' },
                  { title: 'Trusted', desc: 'Proven results since 2017.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                      <ChevronRight size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-10">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">Experts</span>
            <h2 className="text-4xl font-bold text-slate-900">Expert Medical Staff</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div 
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{doc.name}</h4>
                    <p className="text-slate-400 text-xs italic">{doc.specialty}</p>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-t border-slate-50 pt-4">
                  {doc.experience}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section id="timing" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-10">
          <div className="bg-slate-800 p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-600/30">
                <Clock size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Clinic Hours</h3>
              <p className="text-slate-400 leading-relaxed">Available all 7 days of the week to ensure the health of Akbarpur's community is always supported.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-mono text-blue-400 mb-2 tracking-tighter">10:00 AM</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold my-2">to</div>
              <div className="text-5xl font-mono text-blue-400 tracking-tighter">08:00 PM</div>
              <div className="mt-6 px-6 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Monday to Sunday</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">Contact Info</span>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">Quick Connect</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Address</h4>
                    <p className="text-sm font-medium text-slate-800 leading-tight">
                      Bus Station (Opp. PWD Office, Near Aviral Hotel, Maha Nagar Colony, Akbarpur, Uttar Pradesh – 224122
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Call Us</h4>
                    <a href="tel:08820604880" className="text-lg font-bold text-slate-800 hover:text-blue-600">088206 04880</a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Instagram</h4>
                    <p className="text-sm font-medium text-slate-800">@dr_soni_homoeo_clinic</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Facebook</h4>
                    <a href="https://www.facebook.com/SoniBHMS62/" target="_blank" className="text-sm font-medium text-slate-800 hover:text-blue-600">SoniBHMS62</a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Email</h4>
                    <a href="mailto:drdevendrasoni62@gmail.com" className="text-sm font-medium text-slate-800 hover:text-blue-600">drdevendrasoni62@gmail.com</a>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/918820604880" 
                target="_blank" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-sm transition-all"
              >
                <MessageCircle size={24} />
                WhatsApp Appointment
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-slate-800 text-xl tracking-tight">Our Location</h3>
                  <p className="text-xs text-slate-500">Maha Nagar Colony, Akbarpur, UP – 224122</p>
                </div>
                <div className="px-4 py-2 bg-slate-50 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-slate-200">Open in Maps</div>
              </div>
              <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden relative grayscale opacity-90 min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps?q=Akbarpur+Uttar+Pradesh&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-10 py-8 border-t border-slate-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 font-medium tracking-widest uppercase">
          <p>© {new Date().getFullYear()} DR SONI’S HOMOEOPATHIC CLINIC. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/SoniBHMS62/" target="_blank" className="hover:text-blue-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
