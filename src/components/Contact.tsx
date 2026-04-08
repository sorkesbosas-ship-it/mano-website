import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="kontaktai" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-template-columns-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
              Susisiekite
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Turite klausimų? <br />
              <span className="text-slate-400">Mes pasiruošę padėti.</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Skambinkite</p>
                  <p className="text-2xl font-bold">(0-698) 43744</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Atvykite</p>
                  <p className="text-xl font-medium">Aukštakalnio g. 19, Alytus, 63102</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Darbo laikas</p>
                  <p className="text-xl font-medium">I-V: 08:00 - 18:00</p>
                  <p className="text-slate-500 text-sm">VI-VII: Nedirbame</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-800/50 rounded-3xl border border-slate-700/50">
              <p className="text-slate-300 mb-2">„Radgeda“ – patikimas jūsų automobilio partneris Alytuje.</p>
              <p className="text-slate-500 text-sm">Užsukite pas mus ir įsitikinkite patys!</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white text-slate-900 border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h4 className="text-2xl font-bold mb-6">Parašykite mums žinutę</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-template-columns-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Vardas</label>
                      <Input placeholder="Jūsų vardas" className="h-12 border-slate-200 rounded-xl focus:ring-slate-900" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">El. paštas</label>
                      <Input placeholder="vardenis@pastas.lt" className="h-12 border-slate-200 rounded-xl focus:ring-slate-900" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Telefono numeris</label>
                    <Input placeholder="+370 6xx xxxxx" className="h-12 border-slate-200 rounded-xl focus:ring-slate-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Žinutė</label>
                    <Textarea placeholder="Aprašykite gedimą ar klausimą..." className="min-h-[120px] border-slate-200 rounded-xl focus:ring-slate-900" />
                  </div>
                  <Button className="w-full h-14 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-lg font-bold group">
                    Siųsti užklausą
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
