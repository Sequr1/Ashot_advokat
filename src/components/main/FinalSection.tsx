export function FinalSection() {
  return (
    <section className="section-screen bg-[#0e0e0e] relative flex items-center justify-center">
      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[#C6A75E]/50 to-transparent" />
      </div>
      
      {/* Decorative gold lines */}
      <div className="absolute top-12 left-1/4 w-px h-24 bg-gradient-to-b from-[#C6A75E]/30 to-transparent" />
      <div className="absolute top-12 right-1/4 w-px h-16 bg-gradient-to-b from-[#C6A75E]/30 to-transparent" />
      <div className="absolute bottom-32 left-1/3 w-px h-12 bg-gradient-to-t from-[#C6A75E]/20 to-transparent" />
      
      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198,167,94,0.05) 0%, transparent 70%)'
        }}
      />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Main message */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
          Если вы уже столкнулись<br />
          с уголовным процессом
        </p>
        
        <div className="gold-line-animated w-20 mx-auto mb-6" />
        
        <p className="text-2xl md:text-3xl font-serif text-gold-shimmer mb-12">
          не откладывайте разговор
        </p>
        
        {/* CTA with enhanced glow */}
        <div className="relative inline-block">
          <div 
            className="absolute inset-0 blur-xl opacity-30 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #C6A75E, #8f7a45)' }}
          />
          <button className="btn-gold text-base relative">
            Получить консультацию
          </button>
        </div>
        
        {/* Contact alternatives */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2 hover:text-[#C6A75E] transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>mail@example.com</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-[#C6A75E]/30" />
          <div className="flex items-center gap-2 hover:text-[#C6A75E] transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+7 (XXX) XXX-XX-XX</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-[#C6A75E]/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 Все права защищены
          </p>
          <p className="text-[#C6A75E]/50 text-xs">
            Платформа стратегической уголовной защиты
          </p>
          <p className="text-gray-600 text-xs">
            Адвокатская тайна гарантирована
          </p>
        </div>
      </div>
    </section>
  );
}
