import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EnvelopeView() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="flex flex-col relative w-full bg-[#fbf9f6] min-h-screen items-center justify-center py-8 px-5 select-none overflow-hidden">

      <div className="flex flex-col items-center text-center mb-6 z-10 w-full max-w-sm mt-8">
        <p className="font-display text-[11px] uppercase tracking-[0.25em] text-[#4f6050] mb-1">
          Estás cordialmente invitado/a
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-[#1b1c1a] tracking-[0.14em] font-light">
          Sofía & Mateo
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4 w-full">
          <div className="h-px w-6 bg-[#c3c8c0]"></div>
          <p className="font-body text-[13px] text-[#434842] font-light tracking-wide whitespace-nowrap">
            24 de Octubre, 2027 · Finca Los Olivos
          </p>
          <div className="h-px w-6 bg-[#c3c8c0]"></div>
        </div>
      </div>

      <div className="w-full max-w-sm md:max-w-md relative my-6 z-10 flex flex-col items-center">
        
        <div 
          className={`relative w-full aspect-[4/3] rounded-xl bg-[#f5f3f0] transition-all duration-700 ease-out cursor-pointer ${isOpen ? 'shadow-2xl' : 'shadow-xl'}`}
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute inset-0 rounded-xl opacity-40 bg-[radial-gradient(#4f6050_0.75px,transparent_0.75px)] [background-size:10px_10px] pointer-events-none"></div>

          <div 
            className="absolute inset-x-3 bottom-2 h-5/6 bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col justify-between items-center text-center transition-transform duration-700 ease-in-out"
            style={{
              transform: isOpen ? 'translateY(-35%)' : 'translateY(0)',
              zIndex: isOpen ? 35 : 10,
              pointerEvents: isOpen ? 'auto' : 'none'
            }}
          >
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[#735c00] text-base mb-1">favorite</span>
              <p className="font-display text-[11px] uppercase tracking-widest text-[#4f6050]">Nuestra Unión</p>
              <p className="font-display text-2xl text-[#1b1c1a] font-light mt-1">S & M</p>
            </div>
            <p className="font-body text-[13px] text-[#434842] italic px-2">
              "Hay momentos en la vida que son inolvidables, y compartirlos con quienes amamos los hace eternos."
            </p>
            <div className="w-full pt-1 flex items-center justify-between text-[#434842] font-display text-[10px] tracking-wider">
              <span>17:00 HRS</span>
              <span className="text-[#735c00]">●</span>
              <span>V. DE GUADALUPE</span>
            </div>
          </div>

          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20">
            {/* Solapa Izquierda */}
            <div className="absolute left-0 inset-y-0 w-1/2 shadow-sm" style={{ backgroundColor: '#eae8e5', clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div>
            {/* Solapa Derecha */}
            <div className="absolute right-0 inset-y-0 w-1/2 shadow-sm" style={{ backgroundColor: '#e4e2df', clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}></div>
            {/* Solapa Inferior */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 shadow-md" style={{ backgroundColor: '#efeeeb', clipPath: 'polygon(0% 100%, 50% 25%, 100% 100%)' }}></div>
          </div>
          <div 
            className="absolute inset-x-0 top-0 h-1/2 origin-top shadow-md transition-all duration-700 ease-out"
            style={{
              backgroundColor: '#eae8e5',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: isOpen ? 5 : 30
            }}
          >
            <div className="absolute inset-0 bg-[#4f6050] opacity-5"></div>
          </div>
          <button 
            type="button"
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-[#677968] shadow-xl flex items-center justify-center transition-all duration-500"
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'translate(-50%, -120%) scale(0.5)' : 'translate(-50%, -50%) scale(1)',
              pointerEvents: isOpen ? 'none' : 'auto',
              zIndex: 40
            }}
            onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
          >
            <div className="w-14 h-14 rounded-full bg-[#4f6050] flex items-center justify-center p-1 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none"></div>
              <img className="w-full h-full object-contain filter drop-shadow opacity-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmnOMf1ebPvyM-DerIkClJpGIwaGAG3SXSn-wu0JBBX_L8zno49XpMHOcD0tqlraLXjvtQG_xo1F82k9KcdQNLJCfhBzLECDeHuOnn__5D1IwHDXOX5fZxDqytrnqmy7B-uZB_l-JzsQo69llBJnG9-bK9670w1xZ4l_UfOOFrK8196zJM3yhQiiKIIpa968fTYbs8L9Rv9hiaKJFEdWA7RzpxQ9KzaigtRbPwzDKM" alt="Sello"/>
            </div>
          </button>
        </div>

        <p className="font-display text-[11px] text-[#434842] uppercase tracking-widest mt-6 flex items-center gap-1.5 opacity-80">
          {isOpen ? (
            <><span className="material-symbols-outlined text-sm text-[#735c00]">mark_email_read</span> Invitación desplegada</>
          ) : (
            <><span className="material-symbols-outlined text-sm text-[#4f6050] animate-bounce">touch_app</span> Toca el sello para abrir</>
          )}
        </p>
      </div>

      <div className="w-full max-w-xs flex flex-col items-center gap-4 z-20 mt-4 mb-12">
        <button 
          onClick={() => {
            if (!isOpen) setIsOpen(true);
            else navigate('/invite');
          }}
          className="w-full bg-[#4f6050] text-[#ffffff] py-4 px-6 rounded-lg font-display text-sm uppercase tracking-[0.16em] shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <span>{isOpen ? 'Ver Itinerario Completo' : 'Abrir Invitación'}</span>
          <span className="material-symbols-outlined text-base">{isOpen ? 'arrow_forward' : 'drafts'}</span>
        </button>
      </div>
    </main>
  );
}