import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Daugiau nei 15 metų patirties",
  "Moderni diagnostikos įranga",
  "Garantija visiems atliktiems darbams",
  "Sąžiningas ir skaidrus kainų skaičiavimas",
  "Greitas ir kokybiškas aptarnavimas",
  "Patyrusių meistrų komanda",
];

export default function About() {
  return (
    <section id="apie" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-template-columns-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=1000"
                alt="Mechanic working on car"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <p className="text-5xl font-bold text-slate-900 mb-1">15+</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Metų patirties
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
              Apie mus
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Radgeda – tai kokybės ir pasitikėjimo ženklas
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mūsų servisas Alytuje veikia jau daugelį metų. Per šį laiką užsitarnavome klientų pasitikėjimą dėl savo profesionalumo, sąžiningumo ir dėmesio detalėms. Mes tikime, kad kiekvienas automobilis nusipelno geriausios priežiūros, o kiekvienas klientas – aiškumo ir ramybės.
            </p>

            <div className="grid sm:grid-template-columns-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 italic border-l-4 border-slate-200 pl-6 py-2">
              "Didžiausios rekomendacijos, super kolektyvas. Pavyzdys kitiem servisam." – Simonas Goberis
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
