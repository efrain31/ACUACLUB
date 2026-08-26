export interface FacilityItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const facilitiesData: FacilityItem[] = [
  {
    id: 1,
    image: '/img/37.jpeg',
    title: 'ORIENTACIÓN FITNESS',
    description: 'A partir de una breve encuesta, conversación y evaluación del movimiento, tu entrenador va a recomendar el programa ideal para iniciar y lograr tus metas fitness.'
  },
  {
    id: 2,
    image: '/img/38.jpeg',
    title: 'WORKOUT GRUPAL',
    description: 'A partir de una breve encuesta, conversación y evaluación del movimiento, tu entrenador va a recomendar el programa ideal para iniciar y lograr tus metas fitness.'
  },
  {
    id: 3,
    image: '/img/40.jpeg',
    title: 'ENTRENAMIENTO PERSONALIZADO',
    description: 'A partir de una breve encuesta, conversación y evaluación del movimiento, tu entrenador va a recomendar el programa ideal para iniciar y lograr tus metas fitness.'
  },
  {
    id: 4,
    image: '/img/41.jpeg',
    title: 'ENTRENAMIENTO ACUÁTICO',
    description: 'Programas especializados en piscina que combinan resistencia, flexibilidad y bajo impacto en las articulaciones.'
  }
];
