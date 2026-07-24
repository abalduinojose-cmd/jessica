import type { IconName } from './icons';

export interface ClubPlan {
  icon: IconName;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  badge?: string;
  slug: string;
}

/*
 * TODO: DADOS DE DEMONSTRAÇÃO — os planos, valores e benefícios abaixo são
 * fictícios, apenas para apresentar o layout. Substituir pelos planos reais
 * antes de publicar o site.
 */
export const clubPlans: ClubPlan[] = [
  {
    icon: 'droplet',
    name: 'Clubinho Essencial',
    price: 'R$ 89',
    period: '/mês',
    description: 'Para manter o banho em dia sem preocupação.',
    features: [
      '2 banhos por mês',
      'Escovação e perfume finalizador',
      'Corte de unhas incluso',
      '10% de desconto em serviços extras',
    ],
    featured: false,
    slug: 'essencial',
  },
  {
    icon: 'sparkles',
    name: 'Clubinho Completo',
    price: 'R$ 149',
    period: '/mês',
    description: 'O equilíbrio perfeito entre cuidado e economia.',
    features: [
      '4 banhos por mês',
      '1 tosa higiênica mensal',
      '1 hidratação por mês',
      'Prioridade na agenda',
      '15% de desconto em serviços extras',
    ],
    featured: true,
    badge: 'Mais escolhido',
    slug: 'completo',
  },
];
