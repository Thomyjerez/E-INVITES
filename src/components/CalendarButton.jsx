export default function CalendarButton({ title, date, location }) {
  const formatGoogleDate = (isoString) => {
    const d = new Date(isoString);
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const generateLink = () => {
    const startDate = formatGoogleDate(date);
    const endDateObj = new Date(new Date(date).getTime() + 4 * 60 * 60 * 1000); // +4 horas
    const endDate = formatGoogleDate(endDateObj.toISOString());

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}`;
  };

  return (
    <a 
      href={generateLink()} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-8 inline-block bg-white text-[#3d1219] px-8 py-3 rounded-full uppercase text-xs font-bold tracking-widest shadow-lg hover:scale-105 transition-transform"
    >
      Agendar Evento
    </a>
  );
}