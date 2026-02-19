export function ConfidentialitySection() {
  return (
    <section className="py-32 bg-[#0e0e0e] relative section-gold-border-top">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative p-12 md:p-16 rounded-lg bg-gradient-to-br from-[#0f2e24]/20 to-[#0e0e0e] gold-frame gold-glow">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
            <div className="absolute inset-0 border border-[#C6A75E]/30 rounded-lg" />
            <div 
              className="absolute top-0 left-0 w-full h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, #C6A75E, transparent)',
                animation: 'shimmer 3s ease-in-out infinite'
              }}
            />
          </div>
          
          {/* Corner decorations - enhanced */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C6A75E] opacity-80" 
               style={{ filter: 'drop-shadow(0 0 6px rgba(198,167,94,0.5))' }} />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#C6A75E] opacity-80"
               style={{ filter: 'drop-shadow(0 0 6px rgba(198,167,94,0.5))' }} />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#C6A75E] opacity-80"
               style={{ filter: 'drop-shadow(0 0 6px rgba(198,167,94,0.5))' }} />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C6A75E] opacity-80"
               style={{ filter: 'drop-shadow(0 0 6px rgba(198,167,94,0.5))' }} />
          
          <div className="text-center relative z-10">
            {/* Icon with glow */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#C6A75E]/50 bg-[#0e0e0e]"
                   style={{ boxShadow: '0 0 30px rgba(198,167,94,0.2), inset 0 0 20px rgba(198,167,94,0.05)' }}>
                <svg className="w-10 h-10 text-[#C6A75E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ filter: 'drop-shadow(0 0 4px rgba(198,167,94,0.5))' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <p className="text-[#C6A75E] text-sm uppercase tracking-[0.2em] mb-4 text-gold-glow">
              Адвокатская тайна
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Конфиденциальность
            </h2>
            
            {/* Statement */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-serif">
              Всё, что вы сообщаете,<br />
              <span className="text-gold-shimmer">остаётся строго между нами.</span>
            </p>
            
            {/* Additional note */}
            <div className="mt-8 pt-8 border-t border-[#C6A75E]/20">
              <p className="text-sm text-gray-500">
                Защищено Федеральным законом об адвокатской деятельности и адвокатуре
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
