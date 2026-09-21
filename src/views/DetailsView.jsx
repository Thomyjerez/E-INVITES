import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DetailsView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedItem, setExpandedItem] = useState(null);
  const toggleTimeline = (index) => setExpandedItem(expandedItem === index ? null : index);
  
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const itinerary = [
    { time: "17:00", location: "Jardín Principal", title: "Ceremonia en el Jardín de Olivos", desc: "Votos solemnes y bienvenida con limonada de romero natural. Rogamos puntualidad.", detail: "Tomar asiento 15 minutos antes. Se ofrecerán abanicos y agua fresca.", icon: "local_florist", iconColor: "bg-primary text-on-primary" },
    { time: "18:30", location: "Terraza Mirador", title: "Cóctel al Atardecer & Música", desc: "Degustación de aperitivos botánicos, cócteles de autor y cuerdas en vivo.", detail: "Espacio para fotografías con vista a la cordillera.", icon: "wine_bar", iconColor: "bg-tertiary text-on-primary" },
    { time: "20:00", location: "La Rosaleda", title: "Banquete & Brindis Estelar", desc: "Cena servida entre luces cálidas suspendidas. Brindis con cava botánico.", detail: "Menú de tres tiempos con opciones veganas y sin gluten.", icon: "dinner_dining", iconColor: "bg-[#e9c349] text-[#745c00]" },
    { time: "22:00", location: "Patio Granados", title: "Fiesta & Baile", desc: "Apertura de la pista, barra libre artesanal y delicias de medianoche.", detail: "Servicio de transporte de regreso a hoteles disponible cada hora.", icon: "celebration", iconColor: "bg-primary-container text-on-primary-container" }
  ];

  const venueImages = [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80"  
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full max-w-2xl px-5 flex flex-col pt-10 pb-12">

        <div className="flex flex-col items-center text-center relative overflow-hidden mb-10">
          <span className="font-display text-[11px] uppercase tracking-widest text-primary mb-2">Capítulo Nupcial</span>
          <h2 className="font-display text-4xl text-on-surface font-light">Detalles del Gran Día</h2>
          <div className="flex items-center justify-center gap-4 w-full mt-4 mb-4 text-primary/60">
            <span className="h-[1px] w-16 bg-outline-variant/60"></span>
            <span className="material-symbols-outlined text-[18px] text-primary">spa</span>
            <span className="h-[1px] w-16 bg-outline-variant/60"></span>
          </div>
        </div>
        <div className="w-full flex flex-col mb-12">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex flex-col">
              <span className="font-display text-[11px] uppercase tracking-widest text-primary mb-1">Cronograma</span>
              <h3 className="font-display text-2xl text-on-surface">Itinerario del Encuentro</h3>
            </div>
            <span className="material-symbols-outlined text-primary/70 text-[28px]">hourglass_top</span>
          </div>
          
          <div className="relative pl-6 md:pl-8 flex flex-col gap-6">
            <div className="absolute left-2.5 md:left-3.5 top-6 bottom-8 w-[2px] bg-outline-variant/40"></div>
            
            {itinerary.map((item, index) => (
              <div key={index} onClick={() => toggleTimeline(index)} className={`relative flex flex-col rounded-2xl p-5 md:p-6 shadow-sm transition-colors cursor-pointer border border-surface-variant ${expandedItem === index ? 'bg-surface-container-low' : 'bg-surface-bright hover:bg-surface-container-lowest'}`}>
                <div className={`absolute -left-6 md:-left-8 top-6 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${item.iconColor}`}>
                  <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                </div>
                
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-lg font-semibold text-primary">{item.time}</span>
                  <span className="font-display text-[11px] text-on-surface-variant uppercase tracking-wider">{item.location}</span>
                </div>
                <h4 className="font-display text-[18px] md:text-[20px] text-on-surface leading-tight mt-1">{item.title}</h4>
                <p className="font-body text-[14px] text-on-surface-variant mt-2 leading-relaxed">{item.desc}</p>
                
                <AnimatePresence>
                  {expandedItem === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="bg-surface-container rounded-xl p-4 mt-4">
                        <p className="font-body text-[13px] text-on-surface-variant leading-relaxed">{item.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm mb-12 border border-surface-variant">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <span className="material-symbols-outlined text-[20px]">dry_cleaning</span>
            <span className="font-display text-[11px] uppercase tracking-widest text-primary">Código de Vestimenta</span>
          </div>
          <h4 className="font-display text-2xl text-on-surface mb-3">Elegante Natural & Tonos Tierra</h4>
          <p className="font-body text-[14px] text-on-surface-variant mb-6 leading-relaxed">
            Nos encantaría armonizar con el paisaje. Sugerimos textiles livianos como lino o seda rústica.
          </p>
          
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-display text-[11px] uppercase tracking-wider text-on-surface-variant">Paleta sugerida:</span>
            <div className="flex items-center justify-between pt-1">
              {[{ color: '#7a8c7a', label: 'Salvia' }, { color: '#eae3d2', label: 'Arena' }, { color: '#b87d65', label: 'Tierra' }, { color: '#b9ccb7', label: 'Olivo' }, { color: '#e4e2df', label: 'Lino' }].map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-surface-variant/50" style={{ backgroundColor: swatch.color }}></div>
                  <span className="font-display text-[10px] text-on-surface-variant">{swatch.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-xl border border-surface-variant/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[20px]">footprint</span></div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[15px] text-on-surface font-medium mb-1">Calzado Cómodo</span>
                <p className="font-body text-[13px] text-on-surface-variant leading-relaxed">Gran parte de la finca es césped. Recomendamos tacón ancho o cuñas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-xl border border-surface-variant/50">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[20px]">wb_sunny</span></div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[15px] text-on-surface font-medium mb-1">Gafas y Abrigo Ligero</span>
                <p className="font-body text-[13px] text-on-surface-variant leading-relaxed">Aconsejamos gafas oscuras y chaqueta para cuando baje la temperatura.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mb-4 relative">
          <div className="flex items-center justify-between px-2 mb-4">
            <span className="font-display text-[12px] uppercase tracking-widest text-primary">Ambiente del Lugar</span>
            <div className="flex items-center gap-2">
              <span className="font-body text-[12px] text-on-surface-variant tracking-wider opacity-80 md:hidden mr-2">
                Deslizá
              </span>
              <button 
                onClick={() => scrollCarousel('left')} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-variant text-on-surface-variant transition-colors active:scale-95"
                title="Foto anterior"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button 
                onClick={() => scrollCarousel('right')} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-variant text-on-surface-variant transition-colors active:scale-95"
                title="Foto siguiente"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex w-full overflow-x-auto gap-4 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {venueImages.map((src, idx) => (
              <div key={idx} className="relative min-w-[85%] md:min-w-[70%] h-64 md:h-80 rounded-2xl overflow-hidden shadow-md snap-center flex-shrink-0">
                <img src={src} alt={`Ambiente ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}