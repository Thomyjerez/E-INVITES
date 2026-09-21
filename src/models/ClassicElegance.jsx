import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import CalendarButton from '../components/CalendarButton';
import data from '../data/eventData.json';

export default function ClassicElegance() {
  return (
    <div className={`${data.colors.bg} ${data.colors.text} min-h-screen font-sans overflow-x-hidden flex justify-center pb-20`}>
      <div className="w-full max-w-md relative flex flex-col items-center pt-12 px-6">
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] mb-4 opacity-80 text-center"
        >
          {data.pretitle}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl font-serif italic mb-10 text-center"
        >
          {data.couple}
        </motion.h1>

        {/* Tira de fotos real */}
        <div className="relative w-full h-[480px] flex justify-center mt-2">
          <motion.div 
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="w-44 bg-white p-2 pb-6 rounded-sm shadow-2xl z-10 rotate-[-3deg] flex flex-col gap-2"
          >
            {data.images.map((img, index) => (
              <div key={index} className="w-full h-32 overflow-hidden bg-gray-200">
                <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </motion.div>
          
          <div className="absolute bottom-0 w-72 h-40 border-t border-x border-rose-200/20 rounded-t-xl z-0 bg-[#4a161e] shadow-inner"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 w-full text-center flex flex-col items-center"
        >
          <p className="text-2xl font-light italic mb-4">You're Invited</p>
          <div className="w-24 h-[1px] bg-rose-200/30 my-4"></div>
          
          <Countdown targetDate={data.date} />
          
          <CalendarButton 
            title={data.couple} 
            date={data.date} 
            location={data.location} 
          />
        </motion.div>

      </div>
    </div>
  );
}