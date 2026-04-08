import { motion } from "motion/react";
import { 
  Wrench, 
  Cpu, 
  Droplets, 
  Gauge, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Važiuoklės remontas",
    description: "Amortizatorių, svirčių, įvorių keitimas ir pilna važiuoklės diagnostika.",
    icon: Wrench,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Kompiuterinė diagnostika",
    description: "Klaidų nuskaitymas, parametrų stebėjimas ir elektronikos gedimų šalinimas.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Alyvos ir filtrų keitimas",
    description: "Greitas ir kokybiškas visų tipų filtrų bei alyvos keitimas jūsų automobiliui.",
    icon: Droplets,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Variklio remontas",
    description: "Nuo paprasto tarpinių keitimo iki pilno variklio kapitalinio remonto.",
    icon: Gauge,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Stabdžių sistemos patikra",
    description: "Stabdžių diskų, kaladėlių keitimas ir sistemos sandarumo užtikrinimas.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Elektros instaliacija",
    description: "Generatorių, starterių remontas ir kitų elektros mazgų priežiūra.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function Services() {
  return (
    <section id="paslaugos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
              Ką mes darome
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Visos automobilių remonto paslaugos vienoje vietoje
            </h3>
            <p className="text-lg text-slate-600">
              Mūsų patyrę meistrai naudoja modernią įrangą, kad užtikrintų aukščiausią darbų kokybę ir jūsų saugumą kelyje.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-template-columns-2 lg:grid-template-columns-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-slate-200 overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
