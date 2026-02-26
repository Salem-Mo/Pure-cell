import { motion } from 'motion/react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden rtl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            وفر الطاقة بذكاء اصطناعي رائد
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">
            حلول PureTech المعتمدة على الذكاء الاصطناعي (AI) لتحسين كفاءة الاحتراق وتقليل الانبعاثات
          </p>


          <button
            onClick={onOpenContact}
            className="bg-[#0056b3] text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl border border-white/20"
          >
            تواصل معنا الآن
          </button>
        </motion.div>

        {/* Digital Overlay Element */}
        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-2">
          <div className="w-32 h-32 border-4 border-emerald-500/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="w-24 h-24 border-2 border-emerald-400/50 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full absolute top-0" />
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">System Active</span>
        </div>
      </div>
    </section>
  );
}
