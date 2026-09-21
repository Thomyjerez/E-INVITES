import { useState, useEffect } from 'react';

export default function RsvpView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isAttending, setIsAttending] = useState('yes');
  const [selectedDiet, setSelectedDiet] = useState('Ninguna');
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dietOptions = ['Vegetariano', 'Vegano', 'Celíaco', 'Ninguna', 'Otros'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full px-5 pb-24 mt-6 max-w-2xl mx-auto">
      
      <div className="flex flex-col items-center text-center mt-4 mb-8">
        <span className="text-[10px] font-display tracking-[0.25em] uppercase text-primary bg-surface-container-low px-4 py-1.5 rounded-full mb-2">
          Celebración Nupcial
        </span>
        <h2 className="text-3xl font-display text-on-surface tracking-wider mt-2">Confirma tu Asistencia</h2>
        <p className="text-[13px] text-on-surface-variant mt-1">Por favor responde antes del 15 de Septiembre de 2027</p>
      </div>

      <div className="flex flex-col gap-6 bg-surface-bright rounded-2xl shadow-sm p-6 md:p-8 border border-surface-variant relative">
        
        <div className="relative w-full h-36 md:h-48 rounded-xl overflow-hidden bg-surface-container">
          <img className="w-full h-full object-cover" alt="Mesa de celebración" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=100"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5 pointer-events-none">
            <p className="text-[11px] md:text-[12px] font-display uppercase tracking-widest text-surface-bright drop-shadow-md">Finca Las Encinas · Sevilla</p>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-display uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="guest-name">
              <span>Nombre y Apellidos</span>
              <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input id="guest-name" required type="text" placeholder="Ej. Marina Morales Valle" className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-none focus:bg-surface-bright focus:border-primary border border-transparent transition-all placeholder:text-outline"/>
              <span className="material-symbols-outlined absolute right-3 top-3 text-outline text-[20px] pointer-events-none">edit_note</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-display uppercase tracking-wider text-on-surface-variant flex items-center justify-between">
              <span>¿Nos acompañarás?</span>
              <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-1 gap-3">
              <label onClick={() => setIsAttending('yes')} className={`relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${isAttending === 'yes' ? 'bg-[#d4e8d3] text-[#101f12] shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isAttending === 'yes' ? 'bg-primary' : 'bg-surface-container-high'}`}>
                  {isAttending === 'yes' && <div className="w-2 h-2 rounded-full bg-surface-bright"></div>}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-display font-medium leading-tight">¡Sí, con mucha ilusión!</span>
                  <span className="text-[11px] opacity-80 truncate mt-0.5">Estaremos encantados de verte celebrar</span>
                </div>
                <span className="material-symbols-outlined ml-auto text-[22px] text-primary">favorite</span>
              </label>

              <label onClick={() => setIsAttending('no')} className={`relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${isAttending === 'no' ? 'bg-[#ffdad6] text-[#93000a] shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isAttending === 'no' ? 'bg-[#ba1a1a]' : 'bg-surface-container-high'}`}>
                  {isAttending === 'no' && <div className="w-2 h-2 rounded-full bg-surface-bright"></div>}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-display font-medium leading-tight">Lamentablemente no podré</span>
                  <span className="text-[11px] opacity-80 truncate mt-0.5">Brindaremos de corazón desde la distancia</span>
                </div>
                <span className="material-symbols-outlined ml-auto text-[20px] text-outline">sentiment_dissatisfied</span>
              </label>
            </div>
          </div>

          <div className={`flex flex-col gap-6 transition-all duration-300 ${isAttending === 'no' ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-display uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="plus-one">
                <span>Acompañante (+1)</span>
                <span className="text-[10px] text-outline capitalize font-normal">Opcional</span>
              </label>
              <div className="relative">
                <input id="plus-one" type="text" placeholder="Nombre completo del acompañante" className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-none focus:bg-surface-bright focus:border-primary border border-transparent transition-all placeholder:text-outline"/>
                <span className="material-symbols-outlined absolute right-3 top-3 text-outline text-[20px] pointer-events-none">group_add</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-display uppercase tracking-wider text-on-surface-variant">Restricciones alimentarias / Alergias</label>
              <p className="text-[11px] text-outline -mt-1 mb-1">Queremos que disfrutes cada plato del banquete</p>
              <div className="flex flex-wrap gap-2">
                {dietOptions.map((diet) => (
                  <button key={diet} type="button" onClick={() => setSelectedDiet(diet)} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[10px] font-display uppercase tracking-wider transition-colors ${selectedDiet === diet ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}>
                    <span className="material-symbols-outlined text-[14px]">
                      {diet === 'Vegetariano' ? 'eco' : diet === 'Vegano' ? 'psychiatry' : diet === 'Celíaco' ? 'grain' : diet === 'Ninguna' ? 'check_circle' : 'more_horiz'}
                    </span>
                    {diet}
                  </button>
                ))}
              </div>
              {selectedDiet === 'Otros' && (
                <input type="text" placeholder="Especifica intolerancias o alergias..." className="w-full mt-2 bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:bg-surface-bright focus:border-primary border border-transparent transition-all placeholder:text-outline"/>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-display uppercase tracking-wider text-on-surface-variant" htmlFor="message">
                Mensaje especial para los novios
              </label>
              <textarea id="message" rows="3" placeholder="Comparte unas palabras, una anécdota o tus mejores deseos..." className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg p-4 focus:outline-none focus:bg-surface-bright focus:border-primary border border-transparent transition-all placeholder:text-outline resize-none"></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-on-primary text-[13px] font-display uppercase tracking-[0.14em] py-4 rounded-xl shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70">
              <span className="material-symbols-outlined text-[20px]">{isSubmitting ? 'hourglass_empty' : 'send'}</span>
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}</span>
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed inset-x-5 bottom-24 z-50 bg-surface-bright p-6 rounded-2xl shadow-2xl border border-surface-variant">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#d4e8d3] flex items-center justify-center text-[#101f12]">
              <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
            </div>
            <h3 className="text-xl font-display text-on-surface">¡Respuesta Recibida!</h3>
            <p className="text-[13px] text-on-surface-variant">Gracias por confirmar. Hemos guardado tus preferencias con todo cariño.</p>
            <button type="button" onClick={() => setIsSubmitted(false)} className="mt-2 text-[10px] font-display uppercase tracking-widest text-primary hover:underline">
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}