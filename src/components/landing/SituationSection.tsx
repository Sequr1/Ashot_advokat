export function SituationSection() {
  const situations = [
    {
      text: 'Возбуждением уголовного дела',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      text: 'Допросом или вызовом на следственные действия',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      text: 'Обвинением в экономическом преступлении',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: 'Давлением со стороны правоохранительных органов',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="situation" className="py-28 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f2e24] mb-4">
            Вы столкнулись с:
          </h2>
          <div className="w-16 h-px bg-[#C6A75E] mx-auto" />
        </div>
        
        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {situations.map((situation, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-[#0f2e24]/10 rounded-lg hover:border-[#0f2e24]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f2e24]/5 flex items-center justify-center text-[#0f2e24] group-hover:bg-[#0f2e24] group-hover:text-white transition-all duration-300">
                  {situation.icon}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-2">
                  {situation.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Узнаёте свою ситуацию? Мы можем помочь.
          </p>
        </div>
      </div>
    </section>
  );
}
