import React, { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

function App() {
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [isLastHour, setIsLastHour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        
        if (hours <= 1) {
          setIsLastHour(true);
        }
        
        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(interval);
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#FFF9F9] p-5">
      <div className="max-w-3xl mx-auto">
        {/* Urgency Bar */}
        <div className="bg-gradient-to-r from-red-600 to-[#E74C3C] text-white p-4 text-center font-bold text-lg rounded-lg shadow-lg relative overflow-hidden my-6">
          <div className="relative z-10">
            {isLastHour ? (
              <>🚨 ÚLTIMA HORA! PREÇO VOLTA EM:</>
            ) : (
              <>🚨 PROMOÇÃO RELÂMPAGO!</>
            )}
            
            <div className="my-3">
              <div className={`inline-block bg-black p-1 rounded-lg ${isLastHour ? 'shadow-[0_0_30px_rgba(255,0,0,0.9)]' : 'shadow-[0_0_20px_rgba(255,215,0,0.5)]'}`}>
                <div className={`font-bold text-2xl md:text-3xl bg-black ${isLastHour ? 'text-red-600 shadow-[0_0_20px_red]' : 'text-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.7)]'} px-6 py-3 rounded-lg tracking-wider`}>
                  {formatTime(countdown.hours)}:{formatTime(countdown.minutes)}:{formatTime(countdown.seconds)}
                </div>
              </div>
            </div>
            
            <div className="text-sm bg-black/20 px-3 py-1 rounded inline-block">
              Preço volta a R$97,00 quando o tempo acabar!
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-shine bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-30" />
        </div>

        {/* Headline */}
        <h1 className="text-[#E74C3C] text-3xl md:text-4xl text-center my-8 leading-tight relative">
          Descubra Como <span className="text-red-600 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[3px] after:bg-[#FFD700] after:animate-underline">Transformar Sua Cozinha</span> numa Máquina de Fazer Dinheiro em 2025
        </h1>

        {/* Main Image */}
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80" 
          alt="Pizza caseira artesanal com ingredientes frescos" 
          className="w-full max-w-[500px] mx-auto rounded-xl shadow-2xl border-3 border-[#FFD700]"
        />

        {/* CTA Button */}
        <a 
          href="https://pay.hotmart.com/P98939369V"
          className="block bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white text-center py-6 px-4 rounded-2xl text-2xl font-bold no-underline my-10 mx-auto w-[90%] max-w-[500px] shadow-[0_10px_25px_rgba(46,204,113,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(46,204,113,0.6)] relative overflow-hidden"
        >
          🍕 QUERO TRANSFORMAR MINHA COZINHA AGORA - R$25,90 🍕
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-full" />
        </a>

        {/* Guarantee Section */}
        <div className="text-center my-8 p-5 bg-gray-50 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
          <h3 className="text-[#27AE60] text-2xl mt-0">⚠️ RISCO ZERO - GARANTIA DE 7 DIAS</h3>
          <p className="text-lg">
            Se em 1 semana você não estiver satisfeito(a), devolvemos <strong>cada centavo</strong> do seu investimento. Sem perguntas, sem burocracia!
          </p>
          <img 
            src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?auto=format&fit=crop&w=200&q=80" 
            alt="Selo de garantia" 
            className="w-20 mt-3 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;