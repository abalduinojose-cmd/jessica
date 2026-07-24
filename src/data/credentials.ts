import type { IconName } from './icons';

export interface Credential {
  icon: IconName;
  title: string;
}

export const credentials: Credential[] = [
  { icon: 'clock', title: '10 anos no mercado pet' },
  { icon: 'graduation', title: 'Formada em banho e tosa' },
  { icon: 'heart', title: 'Apaixonada por animais' },
  { icon: 'sparkles', title: 'Especialista em penteados pet' },
  { icon: 'award', title: 'Fiz da paixão minha profissão' },
];
