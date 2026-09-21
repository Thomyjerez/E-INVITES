import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationView() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [songName, setSongName] = useState("Nuestra Canción • Versión Acústica");
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const targetDate = new Date('October 24, 2027 17:00:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          secs: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
        setIsPlaying(true);
        setSongName(file.name.replace(/\.[^/.]+$/, "").substring(0, 25) + "...");
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current.src) { fileInputRef.current.click(); return; }
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col w-full relative items-center bg-surface">
      <audio ref={audioRef} loop hidden />
      <input type="file" accept="audio/*" ref={fileInputRef} onChange={handleAudioUpload} className="hidden" />
      <div className="w-full max-w-2xl px-5 flex flex-col pb-12 mt-6 mx-auto">
        
        <section className="w-full mt-2 mb-6 cursor-pointer" onClick={togglePlay}>
          <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low rounded-xl shadow-sm border border-surface-variant">
            <div className="flex items-center gap-3 min-w-0">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-transform flex-shrink-0">
                <span className="material-symbols-outlined text-[18px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
              </button>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[11px] uppercase tracking-widest text-primary truncate">Música de Fondo</span>
                <span className="font-body text-[13px] text-on-surface truncate">{songName}</span>
              </div>
            </div>
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-4 ml-2 flex-shrink-0">
                <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-primary rounded-full"></motion.div>
                <motion.div animate={{ height: ["8px", "16px", "8px"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-0.5 bg-primary rounded-full"></motion.div>
                <motion.div animate={{ height: ["12px", "6px", "12px"] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-0.5 bg-primary rounded-full"></motion.div>
              </div>
            )}
          </div>
        </section>
        <header className="flex flex-col items-center text-center mt-2 mb-8 w-full">
          <div className="relative w-36 h-36 flex items-center justify-center mb-5">
            <div className="absolute inset-0 rounded-full bg-surface-container-low/60 blur-md scale-95"></div>
            <img alt="Botanical Monogram Emblem" className="relative w-32 h-32 object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmnOMf1ebPvyM-DerIkClJpGIwaGAG3SXSn-wu0JBBX_L8zno49XpMHOcD0tqlraLXjvtQG_xo1F82k9KcdQNLJCfhBzLECDeHuOnn__5D1IwHDXOX5fZxDqytrnqmy7B-uZB_l-JzsQo69llBJnG9-bK9670w1xZ4l_UfOOFrK8196zJM3yhQiiKIIpa968fTYbs8L9Rv9hiaKJFEdWA7RzpxQ9KzaigtRbPwzDKM"/>
          </div>
          <span className="font-display text-lg uppercase tracking-[0.28em] text-primary mb-2">Nos Casamos</span>
          <h2 className="font-display text-5xl md:text-6xl text-on-surface tracking-wider font-light mb-1">
            Sofía <span className="font-light text-primary mx-1">&</span> Mateo
          </h2>
          <div className="flex items-center gap-3 my-4">
            <div className="h-px w-8 bg-outline-variant"></div>
            <span className="material-symbols-outlined text-primary text-[14px]">spa</span>
            <div className="h-px w-8 bg-outline-variant"></div>
          </div>
          <p className="font-body text-base text-on-surface-variant max-w-sm italic px-2">
            “Junto a nuestras familias y las personas que más amamos, queremos celebrar el inicio de nuestra nueva aventura.”
          </p>
        </header>
        <section className="w-full mb-8">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
            <img className="w-full h-full object-cover" alt="Pareja" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <span className="font-display text-[11px] uppercase tracking-widest text-surface-bright mb-1">El Encuentro</span>
              <p className="font-display text-2xl md:text-3xl text-surface-bright">Bajo los olivos del atardecer</p>
            </div>
          </div>
        </section>
        <section className="w-full bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm mb-8 text-center flex flex-col items-center border border-surface-variant">
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-3">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          </div>
          <span className="font-display text-[11px] uppercase tracking-widest text-primary mb-1">Guardar la Fecha</span>
          <h3 className="font-display text-2xl md:text-3xl text-on-surface mb-2">Sábado, 24 de Octubre de 2027</h3>
          <span className="font-display text-[13px] tracking-wider text-secondary mb-4">17:00 HRS • RECEPCIÓN FORMAL</span>
          <div className="w-full h-px bg-surface-container my-3"></div>
          <div className="flex items-center justify-center gap-1.5 text-on-surface-variant mt-2 mb-1">
            <span className="material-symbols-outlined text-[18px] text-primary">pin_drop</span>
            <span className="font-body text-base font-medium text-on-surface">Finca Los Olivos</span>
          </div>
          <span className="font-body text-[14px] text-on-surface-variant">Valle de Guadalupe, Baja California, México</span>
        </section>

        <section className="w-full mb-10">
          <div className="flex flex-col items-center">
            <span className="font-display text-[12px] uppercase tracking-widest text-primary mb-4">Cuenta Regresiva</span>
            <div className="grid grid-cols-4 gap-3 md:gap-4 w-full">
              {[{ label: 'Días', value: timeLeft.days }, { label: 'Horas', value: timeLeft.hours }, { label: 'Min', value: timeLeft.mins }, { label: 'Seg', value: timeLeft.secs }].map((time, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center bg-surface-container-low rounded-xl py-4 md:py-6 shadow-sm overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span key={time.value} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.2 }} className="font-display text-4xl text-on-surface leading-none">
                      {time.value}
                    </motion.span>
                  </AnimatePresence>
                  <span className="font-display text-[11px] uppercase tracking-wider text-on-surface-variant mt-2">{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full mb-8">
          <div className="flex flex-col gap-3">
            <Link to="/rsvp" className="w-full flex items-center justify-between px-6 py-5 rounded-xl bg-primary text-on-primary shadow-md active:scale-95 transition-transform hover:bg-primary-container hover:text-on-primary-container">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
                <span className="font-display text-[14px] uppercase tracking-widest font-medium">Confirmar Asistencia (RSVP)</span>
              </div>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/details" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-primary">schedule</span>
                <span className="font-display text-[12px] uppercase tracking-wider">Itinerario</span>
              </Link>
              <a href="https://maps.app.goo.gl/TUW5W9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 px-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-primary">navigation</span>
                <span className="font-display text-[12px] uppercase tracking-wider">Ubicación GPS</span>
              </a>
            </div>
          </div>
        </section>
        <section className="w-full bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm mb-8 border border-surface-variant">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">dry_cleaning</span>
            <span className="font-display text-[11px] uppercase tracking-widest">Código de Vestimenta</span>
          </div>
          <h4 className="font-display text-2xl text-on-surface mb-2">Boho Chic • Formal de Día</h4>
          <p className="font-body text-[14px] text-on-surface-variant mb-6">
            Sugerimos telas frescas y ligeras como lino, seda o algodón con calzado cómodo apto para jardín de césped y gravilla.
          </p>
          <div className="flex flex-col gap-3">
            <span className="font-display text-[11px] uppercase tracking-wider text-on-surface-variant">Paleta sugerida:</span>
            <div className="flex items-center justify-between pt-1 w-full">
              {[{ color: '#7a8c7a', label: 'Salvia' }, { color: '#eae3d2', label: 'Arena' }, { color: '#f4efe6', label: 'Lino' }, { color: '#b87d65', label: 'Terracota' }, { color: '#8c977d', label: 'Olivo' }].map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-surface-variant/50" style={{ backgroundColor: swatch.color }}></div>
                  <span className="font-display text-[10px] text-on-surface-variant">{swatch.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full mb-8" id="map-section">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">place</span>
                <span className="font-display text-[11px] uppercase tracking-widest">Cómo Llegar</span>
              </div>
              <span className="font-display text-[11px] text-on-surface-variant uppercase">Km 83, Ruta del Vino</span>
            </div>
            
            <div className="w-full h-56 md:h-72 bg-cover bg-center rounded-xl shadow-sm overflow-hidden relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface/95 backdrop-blur-md rounded-lg flex items-center justify-between shadow-lg">
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="font-body text-sm font-medium text-on-surface truncate">Finca Los Olivos</span>
                  <span className="font-display text-[11px] text-on-surface-variant truncate mt-1">Valle de Guadalupe</span>
                </div>
                <a href="https://maps.app.goo.gl/TUW5W9" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-display text-[11px] uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 transition-transform active:scale-95">
                  <span>Ruta</span>
                  <span className="material-symbols-outlined text-[16px]">directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 flex flex-col items-center text-center">
          <div className="w-8 h-px bg-outline-variant mb-5"></div>
          <p className="font-display text-[11px] uppercase tracking-widest text-primary mb-2">Agradecemos Confirmar Antes Del</p>
          <p className="font-body text-lg text-on-surface font-medium">1 de Septiembre de 2027</p>
          <span className="font-body text-sm text-on-surface-variant mt-3">¡Esperamos compartir este día inolvidable contigo!</span>
          <div className="w-8 h-px bg-outline-variant mt-5"></div>
        </section>

      </div>
    </div>
  );
}