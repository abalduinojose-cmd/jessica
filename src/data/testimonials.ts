export interface Testimonial {
  tutorName: string;
  petName: string;
  petBreed: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}

/* TODO: substituir por depoimentos reais de clientes (Google, WhatsApp ou Instagram) */
export const testimonials: Testimonial[] = [
  {
    tutorName: 'Mariana S.',
    petName: 'Theo',
    petBreed: 'Shih Tzu',
    rating: 5,
    text: 'O Theo sempre volta lindo, cheiroso e, o mais importante, tranquilo. Dá pra ver que ele é tratado com carinho de verdade. O penteado com lacinho é a marca registrada!',
  },
  {
    tutorName: 'Carlos E.',
    petName: 'Mel',
    petBreed: 'Spitz Alemão',
    rating: 5,
    text: 'A Mel é medrosa e sempre sofria em pet shop. Com a Jessica foi diferente desde o primeiro banho: paciência, cuidado e um resultado impecável. Não troco por nada.',
  },
  {
    tutorName: 'Fernanda L.',
    petName: 'Bento',
    petBreed: 'Poodle',
    rating: 5,
    text: 'A tosa na tesoura ficou perfeita, no formato certinho. A Jessica entende o que a gente pede e ainda sugere o que fica melhor pro pet. Atendimento nota dez.',
  },
];
