import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Certifications from './components/Certifications';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 rtl selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-emerald-50/50 to-transparent" />
      </div>

      <div className="relative z-10">
        <Navbar
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <main>
          <Hero onOpenContact={() => setIsContactOpen(true)} />
          <AboutUs />
          <Features onOpenContact={() => setIsContactOpen(true)} />
          <Certifications onOpenContact={() => setIsContactOpen(true)} />
        </main>
        <Footer />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
