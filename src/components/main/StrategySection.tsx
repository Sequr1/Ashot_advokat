export function StrategySection() {
  const theses = [
    {
      title: 'Анализ доказательной базы',
      description: 'Системная работа с каждым документом, экспертизой, показанием. Поиск противоречий и слабых мест обвинения.',
    },
    {
      title: 'Работа с процессуальными нарушениями',
      description: 'Выявление нарушений на каждом этапе. Недопустимые доказательства — инструмент защиты.',
    },
    {
      title: 'Выстраивание позиции до суда',
      description: 'Формирование защитной позиции начинается с первого допроса. Каждое действие — часть стратегии.',
    },
  ];

  return (
    <section className="py-32 bg-[#0e0e0e] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Philosophy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-gold-soft text-sm uppercase tracking-[0.2em] mb-4">
              Философия защиты
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Уголовная защита —<br />
              <span className="text-gold-gradient">это управление рисками</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-[#C6A75E] to-transparent mb-8" />
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Это не реакция на действия следствия.<br />
              Это контролируемое влияние на исход дела.
            </p>

            <div className="p-6 border border-[#C6A75E]/30 rounded-lg bg-[#0f2e24]/20">
              <p className="text-gray-300 italic font-serif text-lg">
                "Лучшая защита строится до того, как обвинение сформулировано."
              </p>
            </div>
          </div>
          
          {/* Right column - Theses */}
          <div className="space-y-6">
            {theses.map((thesis, index) => (
              <div
                key={index}
                className="card-premium rounded-lg p-8 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#C6A75E]/50 flex items-center justify-center group-hover:bg-[#C6A75E]/10 transition-colors duration-300">
                    <span className="text-[#C6A75E] font-serif text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#C6A75E] transition-colors duration-300">
                      {thesis.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {thesis.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
