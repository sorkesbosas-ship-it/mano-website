import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-template-columns-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-600">
                4.8/5 įvertinimas Alytuje
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Jūsų automobilis <br />
              <span className="text-slate-500 italic">patikimose rankose</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Profesionalus automobilių remontas ir priežiūra Alytuje. Nuo alyvos keitimo iki sudėtingų variklio darbų – mes pasirūpinsime viskuo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 text-lg rounded-full group">
                Registruotis remontui
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-200 text-slate-700 hover:bg-white">
                Mūsų paslaugos
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-500">Metų patirties</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">1000+</p>
                <p className="text-sm text-slate-500">Laimingų klientų</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">4.8</p>
                <p className="text-sm text-slate-500">Google įvertinimas</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000"
                alt="Modern car service workshop"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Aukščiausia kokybė</p>
                  <p className="text-xs text-slate-500">Garantija darbams</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 italic">
                "Greitas defekto nustatymas ir pašalinimas. Rimti vyrai dirba."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
