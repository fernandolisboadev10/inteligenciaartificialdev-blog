// Cor do chip por categoria (texto branco por cima: todas passam de 4.5:1).
const COLORS: Record<string, string> = {
  "Herramientas de IA": '#6d28d9',
  "Prompts": '#a21caf',
  "Tutoriales": '#0f766e',
  "Chatbots": '#2563eb',
  "Estudios de caso": '#b45309',
  "Carrera": '#15803d',
};

export const categoryColor = (category: string): string => COLORS[category] ?? '#6d28d9';
