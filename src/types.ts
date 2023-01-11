import React from 'react';

export interface Parameters {
  league: string;
  season: string;
  bookmaker: string;
  bet: string;
}

export interface League {
  id: number;
  name: string;
  type: string;
  season: string;
  logo: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Status {
  long: string;
  short: string;
  timer?: null | string;
}

export interface League2 {
  id: number;
  name: string;
  type: string;
  season: string;
  logo: string;
}

export interface Country2 {
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
  league: League2;
  country: Country2;
  teams: Teams;
  scores: Scores;
}

export interface Value {
  value: string;
  odd: string;
}

export interface Bet {
  id: number;
  name: string;
  values: Value[];
}

export interface Bookmaker {
  id: number;
  name: string;
  bets: Bet[];
}

export interface OddItem {
  league: League;
  country: Country;
  game: Game;
  bookmakers: Bookmaker[];
}

export interface ResponseObject<T> {
  get: string;
  parameters: Parameters;
  errors: string[];
  results: number;
  response: T[];
}

export enum FetchStatus {
  PENDING = 'pending',
  REJECTED = 'rejected',
  FULFILLED = 'fullfilled',
}

export interface State {
  oddItems: OddItem[];
  bets: { game: Game; bet: Value }[];
  status: FetchStatus;
}

export enum ActionType {
  SET_ODD_ITEMS = 'SET_ODD_ITEMS',
  SET_BET = 'SET_BET',
}

export interface ActionModel {
  type: ActionType;
}

export interface SetOddItems extends ActionModel {
  type: ActionType.SET_ODD_ITEMS;
  payload: OddItem[];
}
export interface SetBet extends ActionModel {
  type: ActionType.SET_BET;
  payload: { game: Game; bet: Value };
}

export type Action = SetOddItems | SetBet;

export interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
