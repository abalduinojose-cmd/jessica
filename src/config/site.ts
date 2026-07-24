/**
 * Fonte única de verdade para contatos, links e metadados.
 * Nenhum componente deve hardcodar esses dados.
 */

/** Prefixa caminhos de /public com o base do site (necessário no GitHub Pages) */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const withBase = (path: string) => `${BASE}${path}`;

// TODO: preencher a cidade real para SEO local (ex.: 'Petrópolis')
export const CITY = '';

// TODO: preencher o endereço completo (rua, número, bairro) para o schema local
export const ADDRESS = '';

export const SITE = {
  name: 'Jessica Groomer',
  legalName: 'Jessica Groomer Banho e Tosa',
  tagline: 'Ajudo a manter o pelo do seu pet bem cuidado e tratado!',
  /* Partes da tagline para o destaque em degradê no hero */
  taglineStart: 'Ajudo a manter o pelo do seu pet',
  taglineHighlight: 'bem cuidado e tratado!',
  positioning: 'Tosadora especialista em penteados pet',
  yearsInMarket: 10,
  title: `Jessica Groomer | Banho, Tosa e Penteados Pet${CITY ? ` em ${CITY}` : ''}`,
  description:
    'Banho, tosa e penteados pet com 10 anos de experiência. Cuidado acolhedor e especializado para o seu melhor amigo. Agende pelo WhatsApp!',
  ogImage: withBase('/og.jpg'),
  priceRange: '$$',
} as const;

export const CONTACT = {
  whatsappNumber: '+5524993219850',
  whatsappUrl:
    'https://wa.me/5524993219850?text=Ol%C3%A1%20Jessica!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20meu%20pet.',
  instagramUrl: 'https://www.instagram.com/jesgroomer/',
  instagramHandle: '@jesgroomer',
} as const;

// TODO: confirmar os horários reais de atendimento
export const OPENING_HOURS = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  { days: ['Saturday'], opens: '09:00', closes: '13:00' },
] as const;

export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#clubinho', label: 'Clubinho' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
] as const;
