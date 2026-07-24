import type { ImageMetadata } from 'astro';
import pet01 from '../assets/galeria/pet-01.jpg';
import pet07 from '../assets/galeria/pet-07.jpg';
import pet02 from '../assets/galeria/pet-02.jpg';
import pet03 from '../assets/galeria/pet-03.jpg';
import pet04 from '../assets/galeria/pet-04.jpg';
import pet05 from '../assets/galeria/pet-05.jpg';
import pet06 from '../assets/galeria/pet-06.jpg';

export interface GalleryItem {
  image: ImageMetadata;
  alt: string;
}

/* Fotos reais do estúdio — processadas pelo astro:assets (AVIF/WebP) */
export const galleryItems: GalleryItem[] = [
  {
    image: pet07,
    alt: 'Jessica abraçada com um Yorkshire recém-tosado no colo',
  },
  {
    image: pet01,
    alt: 'Jessica abraçada com um cão de gravata do Super-Homem, recém-saído do banho',
  },
  {
    image: pet02,
    alt: 'Golden Retriever com coroa e gravatinha ao lado da Jessica no estúdio',
  },
  {
    image: pet03,
    alt: 'Selfie da Jessica com um buldogue de laço azul após a tosa',
  },
  {
    image: pet04,
    alt: 'Jessica segurando um cão felpudo cinza no colo depois do banho',
  },
  {
    image: pet05,
    alt: 'Gato de gravatinha do Garfield após o banho, olhando para a câmera',
  },
  {
    image: pet06,
    alt: 'Jessica com a tesoura de tosa em cenário natalino do estúdio',
  },
];
