import { useState, useEffect } from 'react';

export function HeroMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section-screen bg-[#0e0e0e] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#0f2e24]/10 to-[#0e0e0e]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-[20%] w-px h-48 bg-gradient-to-b from-[#C6A75E]/30 to-transparent" />
      <div className="absolute top-0 right-[30%] w-px h-32 bg-gradient-to-b from-[#C6A75E]/20 to-transparent" />
      <div className="absolute bottom-0 left-[40%] w-px h-24 bg-gradient-to-t from-[#C6A75E]/20 to-transparent" />
      
      {/* Corner frames */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[#C6A75E]/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-[#C6A75E]/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-[#C6A75E]/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-[#C6A75E]/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Platform label */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-2 border border-[#C6A75E]/30 text-[#C6A75E] text-xs uppercase tracking-[0.3em]">
            Платформа стратегической уголовной защиты
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.1] mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Защита в уголовном процессе<br />
          <span className="text-gold-gradient">требует стратегии</span>
        </h1>
        
        {/* Gold line */}
        <div 
          className={`w-32 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
        />
        
        {/* Subheading */}
        <p 
          className={`text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Я беру на себя юридическое давление,<br className="hidden md:block" />
          чтобы вы могли сохранить контроль.
        </p>
        
        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="btn-gold">
            Обсудить ситуацию
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 rounded-full border border-[#C6A75E]/40 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[#C6A75E] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
