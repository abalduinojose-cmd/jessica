import { withBase } from '../config/site';

export interface VideoItem {
  src: string;
  title: string;
}

/* Reels do Instagram @jesgroomer, arquivos em /public/videos/ */
/* TODO: ajustar os títulos/legendas de cada vídeo se desejar */
export const videos: VideoItem[] = [
  { src: withBase('/videos/reel-01.mp4'), title: 'Transformação completa: banho, tosa e finalização' },
  { src: withBase('/videos/reel-02.mp4'), title: 'Bastidores do cuidado: carinho em cada detalhe' },
  { src: withBase('/videos/reel-03.mp4'), title: 'Resultado que fala por si: pet feliz, tutor apaixonado' },
];
