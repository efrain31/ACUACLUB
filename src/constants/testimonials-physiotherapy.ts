export interface PhysiotherapyTestimonial {
  id: string;
  userName: string;
  userImage: string;
  comment: string;
  likes: number;
}

export const PHYSIOTHERAPY_TESTIMONIALS: PhysiotherapyTestimonial[] = [
  {
    id: '1',
    userName: 'Carlos Rodríguez',
    userImage: '/img/26.jpg',
    comment: 'La fisioterapia en AcuaClub me ayudó a recuperarme de mi lesión. ¡Excelentes especialistas!',
    likes: 234
  },
  {
    id: '2',
    userName: 'María González',
    userImage: '/img/26.jpg',
    comment: 'Tras mi cirugía, el equipo de fisioterapia fue fundamental en mi recuperación. Muy profesionales.',
    likes: 189
  },
  {
    id: '3',
    userName: 'Juan Martínez',
    userImage: '/img/26.jpg',
    comment: 'He mejorado mi movilidad gracias a los tratamientos personalizados. Altamente recomendado.',
    likes: 267
  },
  {
    id: '4',
    userName: 'Laura Fernández',
    userImage: '/img/26.jpg',
    comment: 'El servicio de fisioterapia es de primera calidad. Me siento mucho mejor ahora.',
    likes: 156
  },
  {
    id: '5',
    userName: 'Diego López',
    userImage: '/img/26.jpg',
    comment: 'Los especialistas en fisioterapia entienden realmente lo que necesitas. ¡Gracias AcuaClub!',
    likes: 298
  },
  {
    id: '6',
    userName: 'Ana Sánchez',
    userImage: '/img/26.jpg',
    comment: 'Después de varias sesiones, los resultados son increíbles. Definitivamente vale la pena.',
    likes: 312
  }
];
