import type { IconName } from './icons';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  slug: string;
}

export const services: Service[] = [
  {
    icon: 'droplet',
    title: 'Banho & Hidratação',
    description:
      'Banho com produtos de qualidade e hidratação que deixa o pelo macio, brilhante e cheiroso por dias.',
    slug: 'banho-hidratacao',
  },
  {
    icon: 'shield',
    title: 'Tosa Higiênica',
    description:
      'Aparo das áreas íntimas, patinhas e barriga para mais conforto, saúde e higiene no dia a dia.',
    slug: 'tosa-higienica',
  },
  {
    icon: 'scissors',
    title: 'Tosa na Tesoura',
    description:
      'Acabamento artesanal fio a fio, respeitando o formato do corpo e o estilo de cada pet.',
    slug: 'tosa-na-tesoura',
  },
  {
    icon: 'sparkles',
    title: 'Penteados & Estilização',
    description:
      'A especialidade da casa: penteados, lacinhos e finalizações que transformam o visual do seu pet.',
    slug: 'penteados-estilizacao',
  },
  {
    icon: 'ear',
    title: 'Corte de Unhas & Limpeza de Ouvido',
    description:
      'Cuidados essenciais feitos com calma e técnica, sem estresse para o pet nem para o tutor.',
    slug: 'unhas-ouvido',
  },
  {
    icon: 'brush',
    title: 'Desembolo',
    description:
      'Remoção cuidadosa de nós e pelos embolados, devolvendo o conforto e a beleza da pelagem.',
    slug: 'desembolo',
  },
];
