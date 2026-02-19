import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0f2e24] flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e24] via-transparent to-transparent" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[15%] w-px h-40 bg-gradient-to-b from-[#C6A75E]/30 to-transparent" />
      <div className="absolute top-0 right-[25%] w-px h-28 bg-gradient-to-b from-[#C6A75E]/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Когда против вас возбуждают<br />
          уголовное дело —<br />
          <span className="text-gray-300">важно действовать сразу.</span>
        </h1>
        
        {/* Gold underline */}
        <div 
          className={`w-24 h-px mx-auto mb-10 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
        />
        
        {/* Subheading */}
        <p 
          className={`text-lg md:text-xl text-gray-300/90 mb-14 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Стратегическая защита по уголовным делам.<br />
          <span className="text-gray-400">Конфиденциально. Чётко. Без лишних обещаний.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/main"
            className="btn-gold"
          >
            Получить консультацию
          </Link>
          <a
            href="#situation"
            className="btn-ghost border-gray-500/50 hover:border-[#C6A75E]/50 hover:text-[#C6A75E]"
          >
            Узнать подробнее
          </a>
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7f7f7] to-transparent" />
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-12 bg-gradient-to-b from-[#C6A75E]/50 to-transparent" />
      </div>
    </section>
  );
}
