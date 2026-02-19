import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#0f2e24] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
      <div className="absolute top-12 left-1/4 w-px h-20 bg-gradient-to-b from-[#C6A75E]/20 to-transparent" />
      <div className="absolute top-12 right-1/3 w-px h-16 bg-gradient-to-b from-[#C6A75E]/20 to-transparent" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Main statement */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed mb-8">
          В уголовных делах<br />
          <span className="text-[#C6A75E]">промедление стоит слишком дорого.</span>
        </p>
        
        <div className="w-16 h-px bg-[#C6A75E] mx-auto mb-10" />
        
        {/* CTA */}
        <Link
          to="/main"
          className="btn-gold text-base"
        >
          Связаться сейчас
        </Link>
        
        {/* Transition note */}
        <p className="mt-10 text-gray-400 text-sm">
          Переход на платформу стратегической защиты →
        </p>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-[#C6A75E]/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 Все права защищены
          </p>
          <p className="text-gray-500 text-xs">
            Адвокатская тайна гарантирована
          </p>
        </div>
      </div>
    </section>
  );
}
