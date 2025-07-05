export interface Country {
  awsRegion: string;
  capital?: string;
  code: ID;
  continent: Continent;
  currencies: string[];
  currency?: string;
  emoji: string;
  emojiU: string;
  languages: Language[];
  name: string;
  native: string;
  phone: string;
  phones: string[];
  states: State[];
  subdivisions: Subdivision[];
}

interface Continent {
  code: ID;
  countries: Country[];
  name: string;
}

interface State {
  code?: string;
  country: Country;
  name: string;
}

interface Language {
  code: ID;
  name: string;
  native: string;
  rtl: boolean;
}

interface Subdivision {
  code: ID;
  emoji: string;
  name: string;
}

type ID = number | string;
