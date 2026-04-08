import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-template-columns-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                RADGEDA
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Profesionalus automobilių servisas Alytuje. Kokybė, patirtis ir sąžiningas aptarnavimas kiekvienam klientui.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">Nuorodos</h5>
            <ul className="space-y-4">
              <li><a href="#paslaugos" className="text-slate-500 hover:text-slate-900 transition-colors">Paslaugos</a></li>
              <li><a href="#apie" className="text-slate-500 hover:text-slate-900 transition-colors">Apie mus</a></li>
              <li><a href="#atsiliepimai" className="text-slate-500 hover:text-slate-900 transition-colors">Atsiliepimai</a></li>
              <li><a href="#kontaktai" className="text-slate-500 hover:text-slate-900 transition-colors">Kontaktai</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">Kontaktai</h5>
            <ul className="space-y-4">
              <li className="text-slate-500">Aukštakalnio g. 19, Alytus</li>
              <li className="text-slate-500">(0-698) 43744</li>
              <li className="text-slate-500">I-V: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Radgeda. Visos teisės saugomos.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            Grįžti į viršų
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
