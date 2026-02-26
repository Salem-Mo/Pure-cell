import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "جهاز PureTech AI المطور",
    description: "نظام ذكي يعتمد على خوارزميات التعلم الآلي لرفع كفاءة الاحتراق وتقليل الاستهلاك بنسبة تصل إلى 30%.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "تحسين البيئة بالذكاء الاصطناعي",
    description: "حلول بيئية مدعومة بالذكاء الاصطناعي لتقليل البصمة الكربونية والمساهمة في بيئة أنظف.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "إدارة الوقود الذكية",
    description: "استخدام تقنيات التنبؤ الذكي لزيادة كفاءة استهلاك البنزين والغاز الطبيعي للمحركات الحديثة والتقليدية.",
    image: "https://images.unsplash.com/photo-1709536240401-ae8f6ca55e18?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "تنبؤ بالأعطال (AI) ",
    description: "تقنيات الذكاء الاصطناعي التي تتنبأ بالأعطال قبل حدوثها، مما يوفر تكاليف الإصلاح ويطيل عمر المحرك.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600",
  },
];


interface FeaturesProps {
  onOpenContact: () => void;
}

export default function Features({ onOpenContact }: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="products" className="py-20 px-6 rtl bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">منتجاتنا</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-2">حلول تقنية متكاملة</h2>
        </div>

        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row min-h-[400px]"
              >
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <img
                    src={features[currentIndex].image}
                    alt={features[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    {features[currentIndex].title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {features[currentIndex].description}
                  </p>
                  <button
                    onClick={onOpenContact}
                    className="bg-[#0056b3] text-white px-8 py-3 rounded-xl font-bold self-start hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                  >
                    اكتشف المزيد
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Indicators - "The Blue One" */}
        <div className="flex justify-center gap-3 mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-12 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
