import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Clock,
  CreditCard,
  Smartphone,
  BookOpen,
  Utensils,
  HeartPulse
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-[#FACC15] text-[#1e3a8a] font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider text-lg ${className}`}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-[#2E5E3E] text-center mb-12 ${className}`}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-[#2E5E3E] hover:text-green-700 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-green-100">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#2E5E3E] leading-tight mb-6">
              Estás a un clic de empezar a controlar tu glucosa <span className="text-green-600">sin dejar de comer bien</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Miles de personas con diabetes ya han conseguido estabilizar su glucosa y volver a disfrutar de la comida sin culpa en menos de 20 días con este libro digital.
            </p>
            <Button onClick={scrollToOffer} className="w-full md:w-auto">
              Comprar Ahora con Descuento
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[400px] flex items-center justify-center mx-auto">
              <img 
                src="https://storage.googleapis.com/generativeai-downloads/images/spp_2_0.png" 
                alt="200 Recetas para Diabéticos eBook Mockup" 
                className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 block"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 cursor-pointer"
          onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-10 h-10 text-[#2E5E3E]" />
        </motion.div>
      </section>

      {/* 2. Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Este recetario es la solución a tus problemas</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Aprenderás qué comer de forma saludable",
                "Reducirás los niveles de azúcar en sangre",
                "Ahorrarás dinero con recetas sencillas",
                "Vivirás con más tranquilidad y control"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p className="text-xl text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/healthy-woman/800/600" 
                alt="Mujer sonriente con comida saludable" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Target Audience Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle>Si tienes diabetes o prediabetes, esto es para ti</SectionTitle>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Utensils, title: "Sin azúcar añadido", desc: "Recetas deliciosas y seguras." },
              { icon: ShieldCheck, title: "Opciones sin gluten", desc: "Para una digestión más ligera." },
              { icon: Clock, title: "Fáciles de preparar", desc: "Ingredientes simples del día a día." },
              { icon: BookOpen, title: "Orientación nutricional", desc: "Creado por especialistas." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-green-100"
              >
                <item.icon className="w-12 h-12 text-[#2E5E3E] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#2E5E3E] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <img 
              src="https://storage.googleapis.com/generativeai-downloads/images/spp_3_0.png" 
              alt="eBook y Vista Móvil" 
              className="w-full max-w-2xl h-auto shadow-2xl block rounded-2xl"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. Special Offer Section */}
      <section id="offer" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2E5E3E] text-white text-center py-4 rounded-t-2xl font-bold tracking-widest animate-pulse">
            OFERTA DISPONIBLE SOLO POR 24 HORAS
          </div>
          <div className="bg-green-50 p-8 md:p-12 rounded-b-2xl shadow-2xl border-x border-b border-green-100">
            <div className="flex justify-center mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-inner flex items-center gap-3">
                <Clock className="text-red-500" />
                <span className="text-2xl font-mono font-bold text-gray-800">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {[
                "200 Recetas para Diabéticos",
                "Guía de Alimentos Permitidos",
                "Guía de Especias",
                "20 Snacks Saludables"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                  <span className="text-lg font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <p className="text-gray-500 line-through text-xl">Antes: 24€</p>
              <p className="text-5xl md:text-7xl font-black text-[#2E5E3E] mt-2">Ahora: 12€</p>
              <p className="text-green-600 font-bold mt-2">Pago Único - Acceso Vitalicio</p>
            </div>

            <Button className="w-full py-6 text-2xl mb-8">
              Comprar Ahora
            </Button>

            <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <CreditCard className="w-8 h-8" />
              <div className="font-bold text-xl">VISA</div>
              <div className="font-bold text-xl">Mastercard</div>
              <div className="font-bold text-xl">MBWay</div>
              <div className="font-bold text-xl">PayPal</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Lo que dicen nuestros lectores</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Maria Silva", comment: "¡Las recetas son maravillosas! Finalmente puedo comer postres sin miedo." },
              { name: "Juan Pérez", comment: "Mi glucosa se estabilizó en solo 2 semanas. Lo recomiendo a todos." },
              { name: "Ana Costa", comment: "La guía de alimentos permitidos es muy práctica para llevar a la compra." },
              { name: "Carlos Santos", comment: "Recetas fáciles y rápidas. Perfecto para quien no tiene mucho tiempo." }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.comment}"</p>
                <p className="font-bold text-[#2E5E3E]">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bonus Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle>Bonos Exclusivos</SectionTitle>
          <p className="text-xl text-gray-600 mb-12">Hoy gratis al comprar el recetario principal.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Guía Alimentos Permitidos", color: "bg-green-600" },
              { title: "Guía de Especias", color: "bg-orange-600" },
              { title: "20 Snacks Saludables", color: "bg-blue-600" }
            ].map((bonus, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-[3/4] ${bonus.color} rounded-xl shadow-lg mb-4 flex items-center justify-center p-6 text-white font-bold text-xl group-hover:scale-105 transition-transform`}>
                  {bonus.title}
                </div>
                <h4 className="font-bold text-lg text-[#2E5E3E]">{bonus.title}</h4>
                <p className="text-green-600 font-bold">GRATIS</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Warranty Section */}
      <section className="py-20 px-4 bg-[#2E5E3E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <ShieldCheck className="w-24 h-24 mx-auto text-yellow-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Garantía de 7 Días o la Devolución de tu Dinero</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Si no quedas satisfecho con el contenido o sientes que no es para ti, te devolvemos el 100% del valor invertido. Sin preguntas, sin complicaciones. Tu riesgo es cero.
          </p>
          <Button onClick={scrollToOffer} className="px-12">
            Quiero Garantizar mi Acceso
          </Button>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Preguntas Frecuentes</SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="¿Es un libro físico?" 
              answer="No, este es un libro digital (eBook) en formato PDF. Recibirás acceso inmediato en tu correo tras la confirmación del pago, pudiendo leerlo en móvil, tablet u ordenador."
            />
            <FAQItem 
              question="¿Cómo recibo el acceso?" 
              answer="En cuanto se confirme el pago, recibirás un correo con el enlace para descargar el eBook y todos los bonos."
            />
            <FAQItem 
              question="¿Funciona para diabetes tipo 2?" 
              answer="¡Sí! El contenido ha sido desarrollado enfocado en el control glucémico, siendo extremadamente beneficioso para quienes tienen diabetes tipo 1, tipo 2 o prediabetes."
            />
            <FAQItem 
              question="¿Puedo pagar en euros?" 
              answer="Sí, el precio está en euros (€) y aceptamos diversos métodos de pago locales y tarjetas bancarias."
            />
            <FAQItem 
              question="¿Existe garantía?" 
              answer="Sí, ofrecemos una garantía incondicional de 7 días. Si no te gusta, solo tienes que enviar un correo y te devolvemos tu dinero."
            />
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm opacity-60 mb-4">
              © 2026 200 Recetas para Diabéticos. Todos los derechos reservados.
            </p>
            <p className="text-xs opacity-40 leading-relaxed">
              Aviso Legal: Este material tiene carácter informativo y no sustituye el asesoramiento, diagnóstico o tratamiento médico profesional. Consulta siempre a tu médico antes de realizar cambios en tu dieta o rutina de salud.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <a 
              href="https://wa.me/yournumber" 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-colors font-bold"
            >
              <MessageCircle />
              Soporte vía WhatsApp
            </a>
            <div className="flex gap-6 text-sm opacity-60">
              <a href="#" className="hover:text-white">Términos de Uso</a>
              <a href="#" className="hover:text-white">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
        <Button onClick={scrollToOffer} className="w-full py-3 text-base">
          Comprar Ahora con Descuento
        </Button>
      </div>
    </div>
  );
}
