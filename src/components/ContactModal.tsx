import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden rtl"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Info Side */}
              <div className="bg-[#0056b3] p-8 text-white md:w-2/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">اتصل بنا</h2>
                  <p className="text-blue-100 mb-8">
                    نحن هنا للإجابة على استفساراتكم وتقديم الدعم الفني اللازم.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">رقم الهاتف</p>
                        <p className="font-medium" dir="ltr">01276553540</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">البريد الإلكتروني</p>
                        <p className="font-medium">info@puretecheg.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">العنوان</p>
                        <p className="font-medium">الغربية، المحلة الكبرى، مصر</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-blue-200">ساعات العمل: 9 ص - 9 م</p>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-8 md:w-3/5 relative flex flex-col justify-center items-center">
                <button
                  onClick={onClose}
                  className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col items-center justify-center space-y-4 text-center w-full max-w-md">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-green-100/50 relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">تواصل معنا عبر واتساب</h3>
                  <p className="text-slate-500 mb-4 px-4 leading-relaxed">نحن متواجدون دائمًا للرد على استفساراتكم وتقديم الدعم الذي تحتاجونه. اضغط على الزر أدناه لبدء المحادثة.</p>
                  <a
                    href="https://wa.me/201276553540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1DA851] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30"
                  >
                    مراسلة عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
