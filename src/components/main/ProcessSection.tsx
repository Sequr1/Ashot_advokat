import { useState } from 'react';

const steps = [
  { 
    number: '01', 
    title: 'Консультация',
    description: 'Первичный анализ ситуации, оценка рисков, определение возможных сценариев развития.',
    duration: '1-2 часа'
  },
  { 
    number: '02', 
    title: 'Анализ материалов',
    description: 'Детальное изучение документов, выявление сильных и слабых сторон позиции.',
    duration: '2-5 дней'
  },
  { 
    number: '03', 
    title: 'Формирование стратегии',
    description: 'Разработка пошагового плана защиты с учётом всех выявленных факторов.',
    duration: '3-7 дней'
  },
  { 
    number: '04', 
    title: 'Защита на следствии',
    description: 'Сопровождение на допросах, работа с доказательствами, обжалование действий.',
    duration: 'Весь период'
  },
  { 
    number: '05', 
    title: 'Суд',
    description: 'Представительство в суде, работа с прениями, защита интересов до приговора.',
    duration: 'До решения'
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C6A75E] text-sm uppercase tracking-[0.2em] mb-4 text-gold-glow">
            Системный подход
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-shimmer mb-6">
            Процесс работы
          </h2>
          <div className="gold-line-animated w-24 mx-auto" />
        </div>
        
        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-[#C6A75E]/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Node */}
                <div 
                  className={`
                    relative z-10 w-16 h-16 mx-auto rounded-full 
                    border-2 flex items-center justify-center
                    transition-all duration-500
                    ${activeStep === index 
                      ? 'bg-[#C6A75E] border-[#C6A75E] scale-110' 
                      : 'bg-[#0e0e0e] border-gray-700 group-hover:border-[#C6A75E]/50'
                    }
                  `}
                  style={{
                    boxShadow: activeStep === index 
                      ? '0 0 30px rgba(198,167,94,0.5), 0 0 60px rgba(198,167,94,0.2)' 
                      : 'none'
                  }}
                >
                  <span className={`
                    font-mono text-sm transition-colors duration-300
                    ${activeStep === index ? 'text-[#0e0e0e] font-bold' : 'text-[#C6A75E]'}
                  `}>
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className={`
                    font-serif text-lg mb-2 transition-colors duration-300
                    ${activeStep === index ? 'text-[#C6A75E]' : 'text-white'}
                  `}>
                    {step.title}
                  </h3>
                  
                  {/* Expanded info */}
                  <div className={`
                    overflow-hidden transition-all duration-500
                    ${activeStep === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <p className="text-sm text-gray-400 mb-2">
                      {step.description}
                    </p>
                    <span className="text-xs text-[#C6A75E]">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative pl-12"
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-5 w-px h-full bg-gradient-to-b from-[#C6A75E]/50 to-transparent" />
              )}
              
              {/* Node */}
              <div className={`
                absolute left-0 w-10 h-10 rounded-full 
                border-2 flex items-center justify-center
                transition-all duration-300
                ${activeStep === index 
                  ? 'bg-[#C6A75E] border-[#C6A75E]' 
                  : 'bg-[#0e0e0e] border-gray-700'
                }
              `}>
                <span className={`
                  font-mono text-xs
                  ${activeStep === index ? 'text-[#0e0e0e]' : 'text-[#C6A75E]'}
                `}>
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="card-premium rounded-lg p-4">
                <h3 className="font-serif text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {step.description}
                </p>
                <span className="text-xs text-[#C6A75E] mt-2 block">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
