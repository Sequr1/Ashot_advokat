export function BoundariesSection() {
  const boundaries = [
    {
      text: 'требующие незаконных решений',
      explanation: 'Защита строится только в рамках закона',
    },
    {
      text: 'основанные на сокрытии фактов',
      explanation: 'Честность — основа эффективной стратегии',
    },
    {
      text: 'где клиент не готов к честному взаимодействию',
      explanation: 'Доверие между адвокатом и клиентом обязательно',
    },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-soft text-sm uppercase tracking-[0.2em] mb-4">
            Принципы
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Я не работаю с делами
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto" />
        </div>
        
        {/* Boundaries */}
        <div className="space-y-4">
          {boundaries.map((boundary, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="p-6 border border-red-900/30 bg-red-950/5 rounded-lg transition-all duration-300 hover:border-red-800/50 hover:bg-red-950/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-red-400/50" />
                  <p className="text-lg text-gray-200 flex-1">
                    {boundary.text}
                  </p>
                </div>
                
                {/* Explanation on hover */}
                <div className="mt-0 max-h-0 overflow-hidden opacity-0 group-hover:mt-4 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm text-gray-500 pl-12">
                    {boundary.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Это не ограничение. Это гарантия качества для тех, кто готов к честной работе.
          </p>
        </div>
      </div>
    </section>
  );
}
