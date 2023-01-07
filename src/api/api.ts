import { oddsMOCK } from 'mocks/odds';
import { ResponseObject, OddItem } from 'types';

enum Endpoint {
  GAMES = '/games',
  ODDS = '/odds',
}
const apiBase = 'https://v1.basketball.api-sports.io';
const myHeaders = new Headers();
myHeaders.append('x-apisports-key', '1e078e9186025ca0e10dddca29b521da');

class Api {
  private getResource = async (url: string): Promise<Response> => {
    const res = await fetch(`${apiBase}${url}`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res;
  };

  getOdds = async () => {
    return Promise.resolve(oddsMOCK);
    const response = await this.getResource(
      Endpoint.ODDS + '?league=12&season=2022-2023&bookmaker=3&bet=1',
    );
    const jsonString = await response.text();
    return JSON.parse(jsonString) as ResponseObject<OddItem>;
  };
}

const api = new Api();

export default api;
