import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import EnvelopeView from './views/EnvelopeView';
import InvitationView from './views/InvitationView';
import DetailsView from './views/DetailsView';
import RsvpView from './views/RsvpView';

function Layout() {
  const location = useLocation();
  const isLanding = location.pathname === '/'; // Detecta si estamos en el sobre
  const path = location.pathname;

  const navItems = [
    { name: 'Invite', icon: 'local_florist', path: '/invite' },
    { name: 'Details', icon: 'calendar_today', path: '/details' },
    { name: 'RSVP', icon: 'mark_email_read', path: '/rsvp' }
  ];

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col items-center overflow-x-hidden">

      {!isLanding && (
        <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-sm border-b border-surface-variant flex justify-center">
          <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between max-w-7xl">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-primary font-display font-medium">Botanical Union</span>
              <h1 className="text-xl font-display truncate">Sofía & Mateo</h1>
            </div>
          </div>
        </header>
      )}

      <main className={`w-full ${isLanding ? '' : 'pt-16 pb-28'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<EnvelopeView />} />
            <Route path="/invite" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <InvitationView />
              </motion.div>
            } />
            <Route path="/details" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <DetailsView />
              </motion.div>
            } />
            <Route path="/rsvp" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <RsvpView />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      {!isLanding && (
        <nav className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-surface-variant">
          <div className="flex justify-center items-center h-16 gap-12 sm:gap-32 px-4 max-w-7xl mx-auto">
            {navItems.map((item) => {
              const isActive = path === item.path;
              return (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`flex flex-col items-center justify-center w-16 h-12 transition-all duration-300 ${isActive ? 'text-primary font-medium scale-110' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  <span className="text-[10px] tracking-wider uppercase mt-1 font-display">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}