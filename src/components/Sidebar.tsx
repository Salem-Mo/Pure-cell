import { motion, AnimatePresence } from 'motion/react';
import { X, Home, Info, Package, Phone, Globe, ShieldCheck, Facebook } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function Sidebar({ isOpen, onClose, onOpenContact }: SidebarProps) {
  const menuItems = [
    { icon: <Home size={20} />, label: 'الرئيسية', id: 'home' },
    { icon: <Info size={20} />, label: 'عن بيورتك', id: 'about' },
    { icon: <Package size={20} />, label: 'المنتجات', id: 'products' },
    { icon: <ShieldCheck size={20} />, label: 'الجودة والأمان', id: 'quality' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-[151] shadow-2xl flex flex-col rtl"
          >
            <div className="p-6 flex items-center justify-between border-bottom border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold text-slate-800">PureTech</span>
              </div>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 py-6 px-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all group"
                >
                  <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>

              <div className="flex justify-center gap-6 py-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61587786714582"
                  target="_blank"
                  className="text-[#0056b3] hover:scale-110 transition-transform flex flex-col items-center gap-1"
                  title="الملف التجاري"
                >
                  <Facebook size={24} />
                  <span className="text-[10px] font-medium text-slate-500">الملف التجاري</span>
                </a>
                <a
                  href="https://www.facebook.com/share/g/1B6ALZKPM9"
                  target="_blank"
                  className="text-[#0056b3] hover:scale-110 transition-transform flex flex-col items-center gap-1"
                  title="المجتمع"
                >
                  <Facebook size={24} />
                  <span className="text-[10px] font-medium text-slate-500">المجتمع</span>
                </a>
              </div>
            <div className="p-6 border-t border-slate-100 space-y-4">
              <button
                onClick={() => { onClose(); onOpenContact(); }}
                className="w-full bg-[#0056b3] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Phone size={18} />
                اتصل بنا
              </button>


              <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
                <button className="flex items-center gap-1 hover:text-slate-600">
                  <Globe size={14} />
                  <span>العربية</span>
                </button>
                <span>|</span>
                <button className="hover:text-slate-600">English</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
