// ===== COMMON TYPES =====

export interface BaseProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  dark?: boolean;
}

// ===== PRICING TYPES =====

export enum PricingTier {
  BASIC = 'basic',
  SOCIO = 'socio',
  PREMIUM = 'premium',
}

export interface PricingPlan {
  id: string;
  name: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  image: string;
  featured?: boolean;
  cta: string;
  ctaLink?: string;
  tier: PricingTier;
}

// ===== TESTIMONIAL TYPES =====

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  review: string;
  image: string;
}

// ===== FAQ TYPES =====

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ===== PRODUCT TYPES =====

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  cta: string;
  ctaLink?: string;
}

// ===== FACILITY TYPES =====

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface FacilitySection {
  title: string;
  features: Facility[];
}

// ===== BUTTON TYPES =====

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// ===== CARD TYPES =====

export interface CardProps extends BaseProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  price?: string | number;
  featured?: boolean;
  onClick?: () => void;
  footer?: React.ReactNode;
}

// ===== NAVIGATION TYPES =====

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavigationProps extends BaseProps {
  links: NavLink[];
  onLinkClick?: (href: string) => void;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

// ===== SITE CONFIG =====

export interface SiteConfig {
  brand: {
    name: string;
    logoUrl: string;
  };
  navigation: NavLink[];
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

// ===== HOOK RETURN TYPES =====

export interface AccordionState {
  openId: string | null;
  toggle: (id: string) => void;
  open: (id: string) => void;
  close: (id: string) => void;
}

export interface CarouselState {
  currentIndex: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}
