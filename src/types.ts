export interface Parameters {
  date: string;
}

export interface Status {
  long: string;
  short: string;
  timer?: null | string;
}

export interface League {
  id: number;
  name: string;
  type: string;
  season: string | number;
  logo: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Home2 {
  quarter_1?: number | null;
  quarter_2?: number | null;
  quarter_3?: number | null;
  quarter_4?: number | null;
  over_time?: number | null;
  total?: number | null;
}

export interface Away2 {
  quarter_1?: number | null;
  quarter_2?: number | null;
  quarter_3?: number | null;
  quarter_4?: number | null;
  over_time?: number | null;
  total?: number | null;
}

export interface Scores {
  home: Home2;
  away: Away2;
}

export interface Game {
  id: number;
  date: string;
  time: string;
  timestamp: number;
  timezone: string;
  stage?: null | string;
  week?: null | string;
  status: Status;
  league: League;
  country: Country;
  teams: Teams;
  scores: Scores;
}

export interface ResponseObject {
  get: string;
  parameters: Parameters;
  errors: string[];
  results: number;
  response: Game[];
}
