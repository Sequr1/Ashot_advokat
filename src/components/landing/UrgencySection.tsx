export function UrgencySection() {
  const points = [
    {
      text: 'Первые показания формируют основу дела',
      emphasis: 'Каждое слово имеет значение',
    },
    {
      text: 'Ошибки на старте исправить сложно',
      emphasis: 'Иногда — невозможно',
    },
    {
      text: 'Без стратегии защита превращается в реакцию',
      emphasis: 'А реакция — это уже опоздание',
    },
  ];

  return (
    <section className="py-28 bg-[#0f2e24] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Main statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            В уголовном процессе время работает<br />
            <span className="text-[#C6A75E]">либо на вас, либо против вас.</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto" />
        </div>
        
        {/* Points */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative pl-8 py-4 border-l-2 border-[#C6A75E]/30 hover:border-[#C6A75E] transition-colors duration-300"
            >
              <p className="text-lg text-gray-200 mb-1">
                {point.text}
              </p>
              <p className="text-sm text-[#C6A75E]/70 group-hover:text-[#C6A75E] transition-colors duration-300">
                {point.emphasis}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
