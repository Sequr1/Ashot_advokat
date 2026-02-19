import { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ end, suffix = '', duration = 2000 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Easing function for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function ResultsSection() {
  const stats = [
    { value: 15, suffix: '+', label: 'Лет практики', description: 'В уголовном праве' },
    { value: 200, suffix: '+', label: 'Дел', description: 'Успешно завершено' },
    { value: 95, suffix: '%', label: 'Результат', description: 'Положительных исходов' },
  ];

  return (
    <section className="py-32 bg-[#0e0e0e] relative section-gold-border-top">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold-soft text-sm uppercase tracking-[0.2em] mb-4">
            Подтверждённый опыт
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-shimmer mb-6">
            Цифры говорят сами
          </h2>
          <div className="gold-line-animated w-24 mx-auto" />
        </div>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card-premium-gold rounded-lg p-8 text-center group hover:gold-glow transition-all duration-500"
            >
              <div className="corner-decoration corner-tl" />
              <div className="corner-decoration corner-br" />
              
              <div className="text-5xl md:text-6xl font-serif text-gold-shimmer mb-4">
                <AnimatedNumber end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gold-glow transition-all">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Specialization note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 border border-[#C6A75E]/30 rounded-full gold-frame">
            <div className="w-2 h-2 rounded-full bg-[#C6A75E] shadow-[0_0_8px_rgba(198,167,94,0.5)]" />
            <span className="text-gray-400 text-sm">
              Специализация: экономические и должностные преступления
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
