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

            <div className="flex justify-center flex-wrap gap-6 py-2">
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
              <a
                href="https://www.facebook.com/adel.khater100"
                target="_blank"
                className="text-[#0056b3] hover:scale-110 transition-transform flex flex-col items-center gap-1"
                title="م/ عادل خاطر"
              >
                <Facebook size={24} />
                <span className="text-[10px] font-medium text-slate-500">م/ عادل خاطر</span>
              </a>
              <a
                href="https://wa.me/201276553540"
                target="_blank"
                className="text-[#25D366] hover:scale-110 transition-transform flex flex-col items-center gap-1"
                title="واتساب"
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </div>
                <span className="text-[10px] font-medium text-slate-500">واتساب</span>
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
