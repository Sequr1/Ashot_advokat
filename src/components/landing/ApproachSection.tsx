export function ApproachSection() {
  const principles = [
    {
      number: '01',
      title: 'Полная конфиденциальность',
      description: 'Вся информация защищена адвокатской тайной. Без исключений.',
    },
    {
      number: '02',
      title: 'Честная оценка перспектив',
      description: 'Реальная картина без ложных обещаний. Вы будете знать правду.',
    },
    {
      number: '03',
      title: 'Разработка стратегии',
      description: 'Индивидуальный план защиты для вашей конкретной ситуации.',
    },
    {
      number: '04',
      title: 'Сопровождение на всех этапах',
      description: 'От первого допроса до судебного решения. Рядом на каждом шаге.',
    },
  ];

  return (
    <section className="py-28 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8f7a45] text-sm uppercase tracking-[0.2em] mb-4">
            Методология
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2e24] mb-4">
            Подход к защите
          </h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto" />
        </div>
        
        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group p-8 bg-white rounded-lg border border-gray-100 hover:border-[#0f2e24]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl font-serif text-[#C6A75E] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-xl font-serif text-[#0f2e24] mb-3 group-hover:text-[#0f2e24] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
