import { useState } from 'react';
import { 
  pressureLevels, 
  processStages, 
  getMatrixCell, 
  getRiskColor,
  getRiskBackground 
} from '@/data/riskMatrix';
import type { PressureLevel, ProcessStage, RiskMatrixCell } from '@/types/sanity';

export function RiskMatrix() {
  const [activeCell, setActiveCell] = useState<RiskMatrixCell | null>(null);

  const handleCellHover = (cell: RiskMatrixCell) => {
    setActiveCell(cell);
  };

  const handleCellLeave = () => {
    setActiveCell(null);
  };

  return (
    <section className="section-screen bg-[#0e0e0e] py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-soft text-sm uppercase tracking-[0.2em] mb-4 animate-fade-up">
            Аналитический инструмент
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-up-delay-1 text-gold-shimmer">
            Матрица рисков
          </h2>
          <div className="gold-line-animated w-32 mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto animate-fade-up-delay-2">
            Наведите на ячейку для просмотра стратегии защиты
          </p>
        </div>

        {/* Matrix Container */}
        <div className="relative">
          {/* Desktop Matrix */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[140px_1fr] gap-0">
              {/* Empty corner + Column headers */}
              <div></div>
              <div className="grid grid-cols-3">
                {pressureLevels.map((level) => (
                  <div 
                    key={level.key} 
                    className="text-center py-4 border-b border-[#C6A75E]/20"
                  >
                    <span className="text-xs text-[#C6A75E] uppercase tracking-[0.15em] font-medium">
                      {level.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {processStages.map((stage, rowIndex) => (
                <div key={stage.key} className="contents">
                  {/* Row label */}
                  <div className="flex items-center justify-end pr-6 border-r border-[#C6A75E]/20">
                    <span className="text-xs text-gray-400 uppercase tracking-wider text-right leading-tight">
                      {stage.label}
                    </span>
                  </div>

                  {/* Cells */}
                  <div className="grid grid-cols-3">
                    {pressureLevels.map((pressure, colIndex) => {
                      const cell = getMatrixCell(pressure.key as PressureLevel, stage.key as ProcessStage);
                      if (!cell) return null;

                      const isActive = activeCell?.pressureLevel === cell.pressureLevel && 
                                      activeCell?.processStage === cell.processStage;

                      return (
                        <div
                          key={`${stage.key}-${pressure.key}`}
                          className="relative group"
                          onMouseEnter={() => handleCellHover(cell)}
                          onMouseLeave={handleCellLeave}
                        >
                          <div
                            className={`
                              h-28 p-4 cursor-pointer
                              transition-all duration-300 ease-out
                              border-b border-r border-gray-800/50
                              flex flex-col justify-between
                              ${isActive 
                                ? 'bg-gradient-to-br from-[#0f2e24] to-[#0e0e0e] z-20' 
                                : 'bg-[#0e0e0e] hover:bg-[#141414]'
                              }
                            `}
                            style={{
                              boxShadow: isActive ? `inset 0 0 30px ${getRiskBackground(cell.riskLevel)}` : 'none',
                            }}
                          >
                            {/* Risk indicator with glow */}
                            <div className="flex items-center gap-2">
                              <div 
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'scale-125' : ''}`}
                                style={{ 
                                  backgroundColor: getRiskColor(cell.riskLevel),
                                  boxShadow: isActive ? `0 0 12px ${getRiskColor(cell.riskLevel)}` : 'none'
                                }}
                              />
                              <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                                {cell.riskLevel === 'low' && 'Низкий'}
                                {cell.riskLevel === 'medium' && 'Средний'}
                                {cell.riskLevel === 'high' && 'Высокий'}
                                {cell.riskLevel === 'critical' && 'Крит.'}
                              </span>
                            </div>
                            
                            {/* Strategy preview */}
                            <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                              {cell.strategy}
                            </p>

                            {/* Hover border effect */}
                            {isActive && (
                              <div 
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                  border: `1px solid ${getRiskColor(cell.riskLevel)}40`,
                                }}
                              />
                            )}
                          </div>

                          {/* Tooltip/Strategy popup */}
                          {isActive && (
                            <div 
                              className={`
                                absolute z-50 w-80 p-5 
                                bg-gradient-to-br from-[#171717] to-[#0e0e0e]
                                border border-[#C6A75E]/30 rounded-lg
                                shadow-2xl shadow-black/50
                                animate-fade-up
                                ${colIndex === 2 ? 'right-0' : colIndex === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}
                                ${rowIndex === 2 ? 'bottom-full mb-2' : 'top-full mt-2'}
                              `}
                              style={{
                                boxShadow: `0 0 40px ${getRiskColor(cell.riskLevel)}15, 0 25px 50px rgba(0,0,0,0.5)`
                              }}
                            >
                              {/* Gold corner accents */}
                              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C6A75E]/50" />
                              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C6A75E]/50" />
                              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C6A75E]/50" />
                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C6A75E]/50" />

                              {/* Risk Level Badge */}
                              <div className="flex items-center gap-2 mb-3">
                                <div 
                                  className="w-2.5 h-2.5 rounded-full"
                                  style={{ 
                                    backgroundColor: getRiskColor(cell.riskLevel),
                                    boxShadow: `0 0 8px ${getRiskColor(cell.riskLevel)}`
                                  }}
                                />
                                <span 
                                  className="text-xs uppercase tracking-wider font-medium"
                                  style={{ color: getRiskColor(cell.riskLevel) }}
                                >
                                  {cell.riskLevel === 'low' && 'Низкий риск'}
                                  {cell.riskLevel === 'medium' && 'Средний риск'}
                                  {cell.riskLevel === 'high' && 'Высокий риск'}
                                  {cell.riskLevel === 'critical' && 'Критический риск'}
                                </span>
                              </div>

                              {/* Strategy Title */}
                              <h3 className="text-lg font-serif text-white mb-2 leading-tight">
                                {cell.strategy}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {cell.description}
                              </p>

                              {/* Context Info */}
                              <div className="pt-3 border-t border-gray-800/50 grid grid-cols-2 gap-3">
                                <div>
                                  <p className="text-[10px] text-[#C6A75E]/60 uppercase tracking-wider mb-0.5">Стадия</p>
                                  <p className="text-xs text-gray-300">
                                    {processStages.find(s => s.key === cell.processStage)?.label}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-[10px] text-[#C6A75E]/60 uppercase tracking-wider mb-0.5">Давление</p>
                                  <p className="text-xs text-gray-300">
                                    {pressureLevels.find(p => p.key === cell.pressureLevel)?.label}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis label */}
            <div className="text-center mt-4">
              <span className="text-xs text-[#C6A75E]/50 uppercase tracking-[0.2em]">
                Уровень давления →
              </span>
            </div>
          </div>

          {/* Mobile/Tablet Version - Cards */}
          <div className="lg:hidden space-y-4">
            {processStages.map((stage) => (
              <div key={stage.key} className="card-premium-gold rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-[#C6A75E]/20 bg-[#0f2e24]/20">
                  <span className="text-xs text-[#C6A75E] uppercase tracking-wider">
                    {stage.label}
                  </span>
                </div>
                <div className="p-4 grid gap-3">
                  {pressureLevels.map((pressure) => {
                    const cell = getMatrixCell(pressure.key as PressureLevel, stage.key as ProcessStage);
                    if (!cell) return null;

                    return (
                      <div 
                        key={`${stage.key}-${pressure.key}`}
                        className="p-4 bg-[#0e0e0e] rounded border border-gray-800/50 hover:border-gray-700 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">{pressure.label}</span>
                          <div className="flex items-center gap-1.5">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ 
                                backgroundColor: getRiskColor(cell.riskLevel),
                                boxShadow: `0 0 6px ${getRiskColor(cell.riskLevel)}`
                              }}
                            />
                            <span 
                              className="text-[10px] uppercase"
                              style={{ color: getRiskColor(cell.riskLevel) }}
                            >
                              {cell.riskLevel === 'low' && 'Низкий'}
                              {cell.riskLevel === 'medium' && 'Средний'}
                              {cell.riskLevel === 'high' && 'Высокий'}
                              {cell.riskLevel === 'critical' && 'Крит.'}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-white font-serif mb-1">{cell.strategy}</p>
                        <p className="text-xs text-gray-500">{cell.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { level: 'low', label: 'Низкий риск' },
            { level: 'medium', label: 'Средний риск' },
            { level: 'high', label: 'Высокий риск' },
            { level: 'critical', label: 'Критический' },
          ].map((item) => (
            <div key={item.level} className="flex items-center gap-2">
              <div 
                className="w-2.5 h-2.5 rounded-full"
                style={{ 
                  backgroundColor: getRiskColor(item.level as RiskMatrixCell['riskLevel']),
                  boxShadow: `0 0 8px ${getRiskColor(item.level as RiskMatrixCell['riskLevel'])}60`
                }}
              />
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
