import { useState } from 'react';
import { caseCategories, getComplexityPercent, getComplexityLabel } from '@/data/categories';
import type { CaseCategory } from '@/types/sanity';

function ComplexityBar({ level }: { level: CaseCategory['complexityLevel'] }) {
  const percent = getComplexityPercent(level);
  
  return (
    <div className="complexity-bar w-full">
      <div 
        className="complexity-fill animate-fill-bar"
        style={{ '--fill-width': `${percent}%` } as React.CSSProperties}
      />
    </div>
  );
}

function CategoryCard({ 
  category, 
  isExpanded, 
  onToggle 
}: { 
  category: CaseCategory; 
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div 
      className={`
        card-premium rounded-lg overflow-hidden transition-all duration-500
        ${isExpanded ? 'col-span-full' : ''}
      `}
    >
      {/* Header - always visible */}
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-serif text-white">
            {category.title}
          </h3>
          <button 
            className={`
              w-8 h-8 rounded-full border border-gray-700 
              flex items-center justify-center transition-transform duration-300
              ${isExpanded ? 'rotate-45' : ''}
            `}
          >
            <svg className="w-4 h-4 text-[#C6A75E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          {category.shortDescription}
        </p>

        {/* Complexity indicator */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Уровень сложности
            </span>
            <span className="text-xs text-[#C6A75E]">
              {getComplexityLabel(category.complexityLevel)}
            </span>
          </div>
          <ComplexityBar level={category.complexityLevel} />
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 animate-fade-up">
          <div className="pt-6 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Risks */}
              <div>
                <h4 className="text-sm text-[#C6A75E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Риски
                </h4>
                <ul className="space-y-2">
                  {category.risks.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-400 mt-1">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common mistakes */}
              <div>
                <h4 className="text-sm text-[#C6A75E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Типичные ошибки
                </h4>
                <ul className="space-y-2">
                  {category.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-orange-400 mt-1">•</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy approach */}
              <div>
                <h4 className="text-sm text-[#C6A75E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Подход к защите
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {category.strategyApproach}
                </p>

                {/* Confidentiality badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f2e24] rounded text-xs">
                  <svg className="w-3 h-3 text-[#C6A75E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-gray-300">
                    {category.confidentialityLevel === 'maximum' && 'Максимальная конфиденциальность'}
                    {category.confidentialityLevel === 'elevated' && 'Повышенная конфиденциальность'}
                    {category.confidentialityLevel === 'standard' && 'Стандартная конфиденциальность'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CaseCategoriesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="section-screen bg-[#0e0e0e] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-soft text-sm uppercase tracking-[0.2em] mb-4 animate-fade-up">
            Специализация
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-up-delay-1">
            Категории дел
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mb-6 animate-draw-line" />
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-up-delay-2">
            Каждое направление требует специфических знаний и подхода. 
            Выберите категорию для детального анализа.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {caseCategories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              isExpanded={expandedId === category._id}
              onToggle={() => setExpandedId(
                expandedId === category._id ? null : category._id
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
