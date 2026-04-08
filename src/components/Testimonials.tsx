import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mindaugas Kvederys",
    role: "Klientas",
    content: "Tikri savo amato asai. Šaunuoliai vyrai. Ne vieną kartą lankiausi nenusivyliau. Gera kaina, mandagus aptarnavimas. Ačiū.",
    rating: 5,
  },
  {
    name: "Dainius Draugelis",
    role: "Vietos gidas",
    content: "Greitas defekto nustatymas ir pašalinimas. Rimti vyrai dirba.",
    rating: 5,
  },
  {
    name: "Simonas Goberis",
    role: "Klientas",
    content: "Didžiausios rekomendacijos, super kolektyvas. Pavyzdys kitiem servisam.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="atsiliepimai" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
              Atsiliepimai
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ką apie mus sako klientai
            </h3>
            <p className="text-lg text-slate-600">
              Mūsų didžiausias įvertinimas – sugrįžtantys ir mus rekomenduojantys klientai.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-template-columns-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Quote size={80} />
                </div>
                <CardContent className="pt-8">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-8 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">Daugiau nei 45 teigiami atsiliepimai Google platformoje</p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">4.8</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
