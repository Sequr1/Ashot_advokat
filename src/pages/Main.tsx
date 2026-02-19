import { useState, useEffect } from 'react';
import { HeroMain } from '@/components/main/HeroMain';
import { ResultsSection } from '@/components/main/ResultsSection';
import { CaseCategoriesSection } from '@/components/main/CaseCategoriesSection';
import { RiskMatrix } from '@/components/main/RiskMatrix';
import { ProcessSection } from '@/components/main/ProcessSection';
import { StrategySection } from '@/components/main/StrategySection';
import { BoundariesSection } from '@/components/main/BoundariesSection';
import { ConfidentialitySection } from '@/components/main/ConfidentialitySection';
import { FinalSection } from '@/components/main/FinalSection';

const sections = [
  { id: 'hero', label: 'Главная' },
  { id: 'results', label: 'Опыт' },
  { id: 'categories', label: 'Категории' },
  { id: 'matrix', label: 'Риски' },
  { id: 'process', label: 'Процесс' },
  { id: 'strategy', label: 'Стратегия' },
  { id: 'boundaries', label: 'Принципы' },
  { id: 'confidentiality', label: 'Тайна' },
  { id: 'contact', label: 'Контакт' },
];

export function Main() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0e0e0e]">
      {/* Fixed Navigation Dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group flex items-center gap-3 justify-end`}
          >
            <span className={`
              text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${activeSection === section.id ? 'text-[#C6A75E]' : 'text-gray-500'}
            `}>
              {section.label}
            </span>
            <div className={`nav-dot ${activeSection === section.id ? 'active' : ''}`} />
          </button>
        ))}
      </nav>

      {/* Sections */}
      <div id="hero">
        <HeroMain />
      </div>
      
      <div id="results">
        <ResultsSection />
      </div>
      
      <div id="categories">
        <CaseCategoriesSection />
      </div>
      
      <div id="matrix">
        <RiskMatrix />
      </div>
      
      <div id="process">
        <ProcessSection />
      </div>
      
      <div id="strategy">
        <StrategySection />
      </div>
      
      <div id="boundaries">
        <BoundariesSection />
      </div>
      
      <div id="confidentiality">
        <ConfidentialitySection />
      </div>
      
      <div id="contact">
        <FinalSection />
      </div>
    </main>
  );
}
