export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Fonte única de verdade do FAQ: alimenta o componente visual
 * e o JSON-LD FAQPage (SEO) ao mesmo tempo.
 */
export const faq: FaqItem[] = [
  {
    question: 'Quanto tempo dura o banho e tosa?',
    answer:
      'Depende do porte, da pelagem e do serviço escolhido. Em média, um banho leva de 1h a 1h30, e banho + tosa completa entre 2h e 3h. Cada pet é atendido com calma, sem pressa e sem linha de produção.',
  },
  {
    question: 'Como faço para agendar um horário?',
    answer:
      'O agendamento é feito pelo WhatsApp. É só chamar, contar o porte e a raça do seu pet e escolher o melhor horário. Recomendo agendar com alguns dias de antecedência, principalmente para finais de semana.',
  },
  {
    question: 'Você atende pets idosos, medrosos ou que não gostam de tosa?',
    answer:
      'Sim, com todo o cuidado do mundo. Trabalho com manejo gentil, pausas e muita paciência. Pets idosos ou ansiosos recebem um atendimento mais tranquilo e adaptado ao ritmo deles. Casos de agressividade são avaliados individualmente pelo WhatsApp antes do agendamento.',
  },
  {
    question: 'Quais formas de pagamento você aceita?',
    answer:
      'Aceito Pix, dinheiro e cartões de débito e crédito. O pagamento é feito na entrega do pet, depois de você conferir (e se apaixonar pelo) resultado.',
  },
  {
    question: 'Tem serviço de leva e traz?',
    answer:
      'Consulte a disponibilidade de leva e traz para a sua região pelo WhatsApp. Dependendo do endereço e do horário, é possível combinar a busca e a entrega do seu pet com toda a segurança.',
  },
];
