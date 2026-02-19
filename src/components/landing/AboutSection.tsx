export function AboutSection() {
  const facts = [
    { label: 'Стаж', value: '15+ лет', detail: 'В уголовном праве' },
    { label: 'Дел', value: '200+', detail: 'Успешно завершено' },
    { label: 'Специализация', value: 'Экономические преступления', detail: 'Должностные преступления' },
    { label: 'Клиенты', value: 'Бизнес', detail: 'И частные лица' },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#0f2e24] to-[#0a2118] rounded-lg overflow-hidden relative">
              {/* Photo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm tracking-wider uppercase">Фото адвоката</p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e24]/80 via-transparent to-transparent" />
            </div>
            
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-[#C6A75E]/50" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-[#C6A75E]/30" />
          </div>
          
          {/* Facts */}
          <div>
            <p className="text-[#8f7a45] text-sm uppercase tracking-[0.2em] mb-4">
              Опыт и факты
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2e24] mb-6">
              Об адвокате
            </h2>
            <div className="w-16 h-px bg-[#C6A75E] mb-10" />
            
            <div className="space-y-6">
              {facts.map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-[#0f2e24]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {fact.label}
                    </p>
                    <p className="text-xl text-[#0f2e24] font-medium">
                      {fact.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {fact.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No fluff note */}
            <div className="mt-10 p-4 bg-[#f7f7f7] rounded-lg">
              <p className="text-sm text-gray-500 italic">
                Факты без пафоса. Результаты вместо обещаний.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
