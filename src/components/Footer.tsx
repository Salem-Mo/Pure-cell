import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-12 pb-6 px-6 rtl border-t border-slate-200">
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=61587786714582" target="_blank" className="text-[#0056b3] hover:scale-110 transition-transform" title="الملف التجاري">
            <Facebook size={24} />
          </a>
          <a href="https://www.facebook.com/share/g/1B6ALZKPM9" target="_blank" className="text-[#0056b3] hover:scale-110 transition-transform" title="المجتمع">
            <Facebook size={24} />
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">عن بيورتك</a>
          <a href="#products" className="hover:text-blue-600 transition-colors">المنتجات</a>
          <a href="#quality" className="hover:text-blue-600 transition-colors">الجودة والأمان</a>
        </div>

        {/* Language Switcher */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Language</span>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 opacity-100">
              <img src="https://flagcdn.com/w40/sa.png" alt="Arabic" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
            </button>
            <span className="text-slate-300">/</span>
            <button className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-400 text-xs mt-4">
          <p>© 2026 puretech.vercel.app | جميع الحقوق محفوظة لبيورتك</p>
        </div>
      </div>
    </footer>
  );
}
