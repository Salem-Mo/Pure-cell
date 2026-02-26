import { motion } from 'motion/react';

const certs = [
  { name: 'ISO 9001', year: '2015', logo: 'https://puretecheg.com/wp-content/uploads/2024/12/Logo-norme-ISO-9001-1-removebg-preview-300x283.png' },
  { name: 'ISO 14001', year: '2015', logo: 'https://puretecheg.com/wp-content/uploads/2024/12/14-logo-removebg-preview-300x283.png' },
  { name: 'ISO 45001', year: '2018', logo: 'https://puretecheg.com/wp-content/uploads/2024/12/Logo-norme-ISO-45001-removebg-preview.png' },
  { name: 'CE Marking', year: 'EU', logo: 'https://puretecheg.com/wp-content/uploads/2024/12/CE-removebg-preview-150x150.png' },
];

interface CertificationsProps {
  onOpenContact: () => void;
}

export default function Certifications({ onOpenContact }: CertificationsProps) {
  return (
    <section id="quality" className="py-20 px-6 rtl bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">الجودة والأمان</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-6">
              معايير عالمية <span className="text-blue-600">موثوقة</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              نلتزم في بيورتك بأعلى معايير الجودة والسلامة العالمية. تقنياتنا معتمدة من قبل كبرى المؤسسات الدولية لضمان أفضل أداء وحماية لعملائنا وللبيئة.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all cursor-default"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img src={cert.logo} alt={cert.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-bold text-slate-800">{cert.name}</h4>
                <span className="text-xs text-slate-400 font-medium uppercase mt-1">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0056b3] to-blue-800 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200">
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">هل لديك استفسار فني؟</h3>
            <p className="text-blue-100">فريقنا من الخبراء جاهز لمساعدتك في اختيار الحل الأمثل.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            تحدث مع خبير الآن
          </button>
        </div>
      </div>
    </section>
  );
}
