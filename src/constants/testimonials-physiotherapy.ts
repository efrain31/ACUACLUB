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
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&scale=80',
    comment: 'La fisioterapia en AcuaClub me ayudó a recuperarme de mi lesión. ¡Excelentes especialistas!',
    likes: 234
  },
  {
    id: '2',
    userName: 'María González',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&scale=80',
    comment: 'Tras mi cirugía, el equipo de fisioterapia fue fundamental en mi recuperación. Muy profesionales.',
    likes: 189
  },
  {
    id: '3',
    userName: 'Juan Martínez',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan&scale=80',
    comment: 'He mejorado mi movilidad gracias a los tratamientos personalizados. Altamente recomendado.',
    likes: 267
  },
  {
    id: '4',
    userName: 'Laura Fernández',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Laura&scale=80',
    comment: 'El servicio de fisioterapia es de primera calidad. Me siento mucho mejor ahora.',
    likes: 156
  },
  {
    id: '5',
    userName: 'Diego López',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diego&scale=80',
    comment: 'Los especialistas en fisioterapia entienden realmente lo que necesitas. ¡Gracias AcuaClub!',
    likes: 298
  },
  {
    id: '6',
    userName: 'Ana Sánchez',
    userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&scale=80',
    comment: 'Después de varias sesiones, los resultados son increíbles. Definitivamente vale la pena.',
    likes: 312
  }
];
