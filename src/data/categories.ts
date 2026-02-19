import type { CaseCategory } from '@/types/sanity';

// ═══════════════════════════════════════════════════════════
// КАТЕГОРИИ ДЕЛ - Данные для фронтенда
// В продакшене это будет приходить из Sanity CMS
// ═══════════════════════════════════════════════════════════

export const caseCategories: CaseCategory[] = [
  {
    _id: '1',
    title: 'Экономические преступления',
    slug: 'economic-crimes',
    shortDescription: 'Мошенничество, присвоение, растрата, незаконное предпринимательство',
    risks: [
      'Арест активов и счетов',
      'Длительные сроки заключения',
      'Субсидиарная ответственность',
      'Репутационные потери',
    ],
    commonMistakes: [
      'Дача показаний без адвоката',
      'Попытки самостоятельного урегулирования',
      'Передача документов без оценки последствий',
      'Недооценка серьёзности ситуации',
    ],
    strategyApproach: 'Системный анализ финансовых потоков, выявление процессуальных нарушений, построение защиты на основе документальной базы.',
    complexityLevel: 'critical',
    confidentialityLevel: 'maximum',
  },
  {
    _id: '2',
    title: 'Должностные преступления',
    slug: 'official-crimes',
    shortDescription: 'Взятка, злоупотребление полномочиями, превышение власти',
    risks: [
      'Утрата должности и статуса',
      'Конфискация имущества',
      'Запрет на занятие определённых должностей',
      'Длительное расследование',
    ],
    commonMistakes: [
      'Контакты с коллегами во время следствия',
      'Использование служебного положения',
      'Игнорирование первых сигналов проверки',
      'Отсутствие документальной защиты решений',
    ],
    strategyApproach: 'Анализ служебных полномочий, работа с экспертизами, защита деловой репутации параллельно с уголовным процессом.',
    complexityLevel: 'critical',
    confidentialityLevel: 'maximum',
  },
  {
    _id: '3',
    title: 'Налоговые преступления',
    slug: 'tax-crimes',
    shortDescription: 'Уклонение от уплаты налогов, сокрытие денежных средств',
    risks: [
      'Доначисление налогов с пенями',
      'Уголовное преследование руководителя',
      'Блокировка операций компании',
      'Привлечение бенефициаров',
    ],
    commonMistakes: [
      'Продолжение налоговой оптимизации во время проверки',
      'Несогласованность позиций с бухгалтерией',
      'Отсутствие деловой цели сделок',
      'Затягивание с обращением за помощью',
    ],
    strategyApproach: 'Взаимодействие с налоговым консультантом, анализ доказательственной базы, работа на минимизацию ущерба и прекращение дела.',
    complexityLevel: 'medium',
    confidentialityLevel: 'elevated',
  },
  {
    _id: '4',
    title: 'Корпоративные конфликты',
    slug: 'corporate-conflicts',
    shortDescription: 'Рейдерство, споры акционеров, вывод активов',
    risks: [
      'Потеря контроля над бизнесом',
      'Уголовное преследование как инструмент давления',
      'Параллельные судебные процессы',
      'Арест долей и акций',
    ],
    commonMistakes: [
      'Эмоциональные решения под давлением',
      'Недооценка юридических рисков оппонента',
      'Отсутствие превентивной защиты',
      'Разрозненные действия без стратегии',
    ],
    strategyApproach: 'Комплексная защита в уголовном и арбитражном процессах, противодействие рейдерским схемам, сохранение активов.',
    complexityLevel: 'critical',
    confidentialityLevel: 'maximum',
  },
];

// Получить категорию по slug
export function getCategoryBySlug(slug: string): CaseCategory | undefined {
  return caseCategories.find(cat => cat.slug === slug);
}

// Получить цвет сложности
export function getComplexityColor(level: CaseCategory['complexityLevel']): string {
  switch (level) {
    case 'low': return '#22c55e';
    case 'medium': return '#eab308';
    case 'critical': return '#ef4444';
  }
}

// Получить процент заполнения для шкалы сложности
export function getComplexityPercent(level: CaseCategory['complexityLevel']): number {
  switch (level) {
    case 'low': return 33;
    case 'medium': return 66;
    case 'critical': return 100;
  }
}

// Получить текст сложности
export function getComplexityLabel(level: CaseCategory['complexityLevel']): string {
  switch (level) {
    case 'low': return 'Низкая сложность';
    case 'medium': return 'Повышенная сложность';
    case 'critical': return 'Критическая сложность';
  }
}
