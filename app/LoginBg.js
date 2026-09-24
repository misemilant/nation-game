export default function LoginBg() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-full max-w-sm opacity-80 transition hover:opacity-100">
        <svg className="w-full h-auto text-blue-500 fill-current drop-shadow-lg" viewBox="0 0 500 250">
          <path d="M250,20 L270,60 L320,50 L310,90 L370,80 L350,120 L420,110 L380,150 L450,150 L420,180 L480,190 L450,220 L50,220 L20,190 L80,180 L50,150 L120,150 L80,120 L150,110 L130,120 L180,80 L170,90 L220,50 L230,60 Z" />
          <rect x="210" y="100" width="80" height="120" rx="5" />
          <rect x="230" y="130" width="40" height="90" fill="#0f172a" />
          <polygon points="250,40 220,90 280,90" fill="#3b82f6" />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-extrabold tracking-wider text-slate-100 uppercase">Istana Garuda IKN</h2>
        <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">Simbol Pusat Pemerintahan & Kebijakan Strategis Nasional</p>
      </div>
    </div>
  );
}
