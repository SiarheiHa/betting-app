import { ResponseObject } from 'types';

enum Endpoint {
  GAMES = '/games',
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

  getGames = async () => {
    const response = await this.getResource(Endpoint.GAMES + '?date=2023-01-07');
    const result_1 = await response.text();
    return JSON.parse(result_1) as ResponseObject;
  };
}

export default Api;
