export interface User {
  _id: string;
  name: string;
  password: string;
  role: 'Guerrier' | 'Alchimiste' | 'Sorcier' | 'Espions' | 'Enchanteur';
  friends?: string[];
  img?: string;
}

export interface Login {
  name: string;
  password: string;
}

export interface Token {
  refresh: string;
  access: string;
}
