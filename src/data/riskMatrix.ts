import type { RiskMatrixCell, PressureLevel, ProcessStage } from '@/types/sanity';

// ═══════════════════════════════════════════════════════════
// МАТРИЦА РИСКОВ
// Ось X — уровень давления (низкий → высокий)
// Ось Y — стадия процесса (проверка → суд)
// ═══════════════════════════════════════════════════════════

export const pressureLevels: { key: PressureLevel; label: string }[] = [
  { key: 'low', label: 'Низкое давление' },
  { key: 'medium', label: 'Среднее давление' },
  { key: 'high', label: 'Высокое давление' },
];

export const processStages: { key: ProcessStage; label: string }[] = [
  { key: 'preliminary', label: 'Доследственная проверка' },
  { key: 'investigation', label: 'Следствие' },
  { key: 'trial', label: 'Судебное разбирательство' },
];

export const riskMatrixData: RiskMatrixCell[] = [
  // Доследственная проверка
  {
    pressureLevel: 'low',
    processStage: 'preliminary',
    riskLevel: 'low',
    strategy: 'Превентивная защита',
    description: 'Сбор документов, подготовка позиции, консультации с руководством. Цель — не допустить возбуждения дела.',
  },
  {
    pressureLevel: 'medium',
    processStage: 'preliminary',
    riskLevel: 'medium',
    strategy: 'Активное противодействие',
    description: 'Работа с обращениями, жалобами, СМИ. Формирование позиции до допроса. Анализ источников давления.',
  },
  {
    pressureLevel: 'high',
    processStage: 'preliminary',
    riskLevel: 'high',
    strategy: 'Экстренные меры',
    description: 'Защита активов, подготовка к обыскам, выстраивание информационной политики. Работа на опережение.',
  },
  
  // Следствие
  {
    pressureLevel: 'low',
    processStage: 'investigation',
    riskLevel: 'medium',
    strategy: 'Контролируемое сотрудничество',
    description: 'Участие в следственных действиях с минимизацией рисков. Работа с экспертизами и доказательствами.',
  },
  {
    pressureLevel: 'medium',
    processStage: 'investigation',
    riskLevel: 'high',
    strategy: 'Жёсткая защита',
    description: 'Обжалование действий следствия, работа с мерой пресечения, поиск процессуальных нарушений.',
  },
  {
    pressureLevel: 'high',
    processStage: 'investigation',
    riskLevel: 'critical',
    strategy: 'Кризисное управление',
    description: 'Защита свободы, работа с арестом, параллельная медийная стратегия. Каждый день критичен.',
  },
  
  // Суд
  {
    pressureLevel: 'low',
    processStage: 'trial',
    riskLevel: 'medium',
    strategy: 'Позиционная защита',
    description: 'Работа с доказательствами обвинения, допрос свидетелей, формирование сомнений у суда.',
  },
  {
    pressureLevel: 'medium',
    processStage: 'trial',
    riskLevel: 'high',
    strategy: 'Активная защита',
    description: 'Альтернативные экспертизы, свидетели защиты, работа с прениями. Борьба за каждый аргумент.',
  },
  {
    pressureLevel: 'high',
    processStage: 'trial',
    riskLevel: 'critical',
    strategy: 'Максимальная мобилизация',
    description: 'Все ресурсы на защиту. Апелляционная стратегия готовится параллельно. Работа до последнего.',
  },
];

// Получить ячейку матрицы
export function getMatrixCell(
  pressureLevel: PressureLevel,
  processStage: ProcessStage
): RiskMatrixCell | undefined {
  return riskMatrixData.find(
    cell => cell.pressureLevel === pressureLevel && cell.processStage === processStage
  );
}

// Получить цвет риска
export function getRiskColor(riskLevel: RiskMatrixCell['riskLevel']): string {
  switch (riskLevel) {
    case 'low': return '#22c55e';
    case 'medium': return '#eab308';
    case 'high': return '#f97316';
    case 'critical': return '#ef4444';
  }
}

// Получить фон ячейки
export function getRiskBackground(riskLevel: RiskMatrixCell['riskLevel']): string {
  switch (riskLevel) {
    case 'low': return 'rgba(34, 197, 94, 0.1)';
    case 'medium': return 'rgba(234, 179, 8, 0.1)';
    case 'high': return 'rgba(249, 115, 22, 0.1)';
    case 'critical': return 'rgba(239, 68, 68, 0.15)';
  }
}
