// ═══════════════════════════════════════════════════════════
// SANITY SCHEMA TYPES
// Платформа стратегической уголовной защиты
// ═══════════════════════════════════════════════════════════

export type ComplexityLevel = 'low' | 'medium' | 'critical';
export type ConfidentialityLevel = 'standard' | 'elevated' | 'maximum';

export interface CaseCategory {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  risks: string[];
  commonMistakes: string[];
  strategyApproach: string;
  complexityLevel: ComplexityLevel;
  confidentialityLevel: ConfidentialityLevel;
}

// Матрица рисков
export type PressureLevel = 'low' | 'medium' | 'high';
export type ProcessStage = 'preliminary' | 'investigation' | 'trial';

export interface RiskMatrixCell {
  pressureLevel: PressureLevel;
  processStage: ProcessStage;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  strategy: string;
  description: string;
}

// Процесс работы
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

// Статистика
export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}
