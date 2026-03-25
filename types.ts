
export interface Product {
  id: string;
  name: string;
  description: string;
  weight: string;
  image: string;
  featured?: boolean;
}

export interface Sector {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
