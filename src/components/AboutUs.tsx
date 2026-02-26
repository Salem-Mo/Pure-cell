import { motion } from 'motion/react';
import { CheckCircle2, Leaf, Zap, Award } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: <Leaf className="text-emerald-500" />, label: 'بيئة أنظف', value: '80%' },
    { icon: <Zap className="text-amber-500" />, label: 'توفير طاقة', value: '25%+' },
    { icon: <Award className="text-blue-500" />, label: 'شهادات جودة', value: '4' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white rtl relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              alt="PureTech Team"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl -z-0" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-emerald-500 rounded-full -z-0" />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">من نحن</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2 leading-tight">
              نحن نقود الطريق نحو <span className="text-emerald-600">مستقبل أخضر</span> ومستدام
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
            بيورتك هي شركة رائدة في مجال تكنولوجيا الطاقة النظيفة، نركز على تطوير حلول مبتكرة تهدف إلى تحسين كفاءة استهلاك الوقود وتقليل الانبعاثات الضارة للمحركات والمصانع.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'تقنيات احتراق متطورة',
              'حلول بيئية معتمدة',
              'فريق هندسي متخصص',
              'دعم فني على مدار الساعة'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
