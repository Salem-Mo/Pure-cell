import { Menu } from 'lucide-react';

interface NavbarProps {
  onOpenSidebar: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenSidebar, onOpenContact }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 rtl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
          <img src="/logo.png" alt="PureTech Logo" className="w-6 h-6 object-contain" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-800">
          Pure<span className="text-emerald-600">Tech</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onOpenContact}
          className="bg-[#0056b3] text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors hidden sm:block"
        >
          اتصل بنا
        </button>
        <button
          onClick={onOpenSidebar}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
