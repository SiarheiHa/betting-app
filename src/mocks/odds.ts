import { OddItem, ResponseObject } from 'types';

export const oddsMOCK: ResponseObject<OddItem> = {
  get: 'odds',
  parameters: {
    league: '12',
    season: '2022-2023',
    bookmaker: '3',
    bet: '1',
  },
  errors: [],
  results: 18,
  response: [
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326705,
        date: '2023-01-05T00:30:00+00:00',
        time: '00:30',
        timestamp: 1672878600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'After Over Time',
          short: 'AOT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-3.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 159,
            name: 'Toronto Raptors',
            logo: 'https://media-2.api-sports.io/basketball/teams/159.png',
          },
          away: {
            id: 148,
            name: 'Milwaukee Bucks',
            logo: 'https://media-3.api-sports.io/basketball/teams/148.png',
          },
        },
        scores: {
          home: {
            quarter_1: 12,
            quarter_2: 26,
            quarter_3: 21,
            quarter_4: 38,
            over_time: 4,
            total: 101,
          },
          away: {
            quarter_1: 13,
            quarter_2: 26,
            quarter_3: 24,
            quarter_4: 34,
            over_time: 7,
            total: 104,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.54',
                },
                {
                  value: 'Draw',
                  odd: '17.00',
                },
                {
                  value: 'Away',
                  odd: '3.07',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326708,
        date: '2023-01-05T01:00:00+00:00',
        time: '01:00',
        timestamp: 1672880400,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 150,
            name: 'New Orleans Pelicans',
            logo: 'https://media-3.api-sports.io/basketball/teams/150.png',
          },
          away: {
            id: 142,
            name: 'Houston Rockets',
            logo: 'https://media-2.api-sports.io/basketball/teams/142.png',
          },
        },
        scores: {
          home: {
            quarter_1: 45,
            quarter_2: 30,
            quarter_3: 23,
            quarter_4: 21,
            over_time: null,
            total: 119,
          },
          away: {
            quarter_1: 22,
            quarter_2: 30,
            quarter_3: 21,
            quarter_4: 35,
            over_time: null,
            total: 108,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.40',
                },
                {
                  value: 'Draw',
                  odd: '14.50',
                },
                {
                  value: 'Away',
                  odd: '3.64',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326707,
        date: '2023-01-05T01:00:00+00:00',
        time: '01:00',
        timestamp: 1672880400,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 149,
            name: 'Minnesota Timberwolves',
            logo: 'https://media-1.api-sports.io/basketball/teams/149.png',
          },
          away: {
            id: 156,
            name: 'Portland Trail Blazers',
            logo: 'https://media-1.api-sports.io/basketball/teams/156.png',
          },
        },
        scores: {
          home: {
            quarter_1: 29,
            quarter_2: 31,
            quarter_3: 29,
            quarter_4: 24,
            over_time: null,
            total: 113,
          },
          away: {
            quarter_1: 24,
            quarter_2: 29,
            quarter_3: 32,
            quarter_4: 21,
            over_time: null,
            total: 106,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '2.13',
                },
                {
                  value: 'Draw',
                  odd: '13.00',
                },
                {
                  value: 'Away',
                  odd: '1.95',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-1.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326704,
        date: '2023-01-05T00:30:00+00:00',
        time: '00:30',
        timestamp: 1672878600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 151,
            name: 'New York Knicks',
            logo: 'https://media-2.api-sports.io/basketball/teams/151.png',
          },
          away: {
            id: 158,
            name: 'San Antonio Spurs',
            logo: 'https://media-2.api-sports.io/basketball/teams/158.png',
          },
        },
        scores: {
          home: {
            quarter_1: 39,
            quarter_2: 23,
            quarter_3: 32,
            quarter_4: 23,
            over_time: null,
            total: 117,
          },
          away: {
            quarter_1: 29,
            quarter_2: 26,
            quarter_3: 34,
            quarter_4: 25,
            over_time: null,
            total: 114,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.27',
                },
                {
                  value: 'Draw',
                  odd: '16.00',
                },
                {
                  value: 'Away',
                  odd: '4.80',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326706,
        date: '2023-01-05T01:00:00+00:00',
        time: '01:00',
        timestamp: 1672880400,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-3.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 136,
            name: 'Chicago Bulls',
            logo: 'https://media-2.api-sports.io/basketball/teams/136.png',
          },
          away: {
            id: 134,
            name: 'Brooklyn Nets',
            logo: 'https://media-2.api-sports.io/basketball/teams/134.png',
          },
        },
        scores: {
          home: {
            quarter_1: 40,
            quarter_2: 29,
            quarter_3: 19,
            quarter_4: 33,
            over_time: null,
            total: 121,
          },
          away: {
            quarter_1: 33,
            quarter_2: 26,
            quarter_3: 26,
            quarter_4: 27,
            over_time: null,
            total: 112,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '3.09',
                },
                {
                  value: 'Draw',
                  odd: '13.00',
                },
                {
                  value: 'Away',
                  odd: '1.58',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326710,
        date: '2023-01-05T03:00:00+00:00',
        time: '03:00',
        timestamp: 1672887600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 145,
            name: 'Los Angeles Lakers',
            logo: 'https://media-2.api-sports.io/basketball/teams/145.png',
          },
          away: {
            id: 147,
            name: 'Miami Heat',
            logo: 'https://media-1.api-sports.io/basketball/teams/147.png',
          },
        },
        scores: {
          home: {
            quarter_1: 32,
            quarter_2: 20,
            quarter_3: 27,
            quarter_4: 33,
            over_time: null,
            total: 112,
          },
          away: {
            quarter_1: 23,
            quarter_2: 25,
            quarter_3: 30,
            quarter_4: 31,
            over_time: null,
            total: 109,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '4.50',
                },
                {
                  value: 'Draw',
                  odd: '17.00',
                },
                {
                  value: 'Away',
                  odd: '1.32',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-1.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326711,
        date: '2023-01-05T03:00:00+00:00',
        time: '03:00',
        timestamp: 1672887600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 141,
            name: 'Golden State Warriors',
            logo: 'https://media-1.api-sports.io/basketball/teams/141.png',
          },
          away: {
            id: 140,
            name: 'Detroit Pistons',
            logo: 'https://media-1.api-sports.io/basketball/teams/140.png',
          },
        },
        scores: {
          home: {
            quarter_1: 26,
            quarter_2: 30,
            quarter_3: 32,
            quarter_4: 31,
            over_time: null,
            total: 119,
          },
          away: {
            quarter_1: 34,
            quarter_2: 26,
            quarter_3: 31,
            quarter_4: 31,
            over_time: null,
            total: 122,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.46',
                },
                {
                  value: 'Draw',
                  odd: '17.00',
                },
                {
                  value: 'Away',
                  odd: '3.38',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-1.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326709,
        date: '2023-01-05T03:00:00+00:00',
        time: '03:00',
        timestamp: 1672887600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 157,
            name: 'Sacramento Kings',
            logo: 'https://media-2.api-sports.io/basketball/teams/157.png',
          },
          away: {
            id: 132,
            name: 'Atlanta Hawks',
            logo: 'https://media-1.api-sports.io/basketball/teams/132.png',
          },
        },
        scores: {
          home: {
            quarter_1: 30,
            quarter_2: 28,
            quarter_3: 30,
            quarter_4: 29,
            over_time: null,
            total: 117,
          },
          away: {
            quarter_1: 30,
            quarter_2: 31,
            quarter_3: 30,
            quarter_4: 29,
            over_time: null,
            total: 120,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '2.04',
                },
                {
                  value: 'Draw',
                  odd: '13.00',
                },
                {
                  value: 'Away',
                  odd: '2.14',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326713,
        date: '2023-01-06T00:30:00+00:00',
        time: '00:30',
        timestamp: 1672965000,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 138,
            name: 'Dallas Mavericks',
            logo: 'https://media-2.api-sports.io/basketball/teams/138.png',
          },
          away: {
            id: 133,
            name: 'Boston Celtics',
            logo: 'https://media-2.api-sports.io/basketball/teams/133.png',
          },
        },
        scores: {
          home: {
            quarter_1: 20,
            quarter_2: 26,
            quarter_3: 19,
            quarter_4: 30,
            over_time: null,
            total: 95,
          },
          away: {
            quarter_1: 29,
            quarter_2: 35,
            quarter_3: 25,
            quarter_4: 35,
            over_time: null,
            total: 124,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '2.45',
                },
                {
                  value: 'Draw',
                  odd: '12.50',
                },
                {
                  value: 'Away',
                  odd: '1.75',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-2.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326714,
        date: '2023-01-06T01:00:00+00:00',
        time: '01:00',
        timestamp: 1672966800,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 142,
            name: 'Houston Rockets',
            logo: 'https://media-2.api-sports.io/basketball/teams/142.png',
          },
          away: {
            id: 160,
            name: 'Utah Jazz',
            logo: 'https://media-2.api-sports.io/basketball/teams/160.png',
          },
        },
        scores: {
          home: {
            quarter_1: 23,
            quarter_2: 33,
            quarter_3: 30,
            quarter_4: 28,
            over_time: null,
            total: 114,
          },
          away: {
            quarter_1: 31,
            quarter_2: 33,
            quarter_3: 31,
            quarter_4: 36,
            over_time: null,
            total: 131,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '3.40',
                },
                {
                  value: 'Draw',
                  odd: '14.00',
                },
                {
                  value: 'Away',
                  odd: '1.45',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326712,
        date: '2023-01-06T00:00:00+00:00',
        time: '00:00',
        timestamp: 1672963200,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-3.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 153,
            name: 'Orlando Magic',
            logo: 'https://media-2.api-sports.io/basketball/teams/153.png',
          },
          away: {
            id: 146,
            name: 'Memphis Grizzlies',
            logo: 'https://media-1.api-sports.io/basketball/teams/146.png',
          },
        },
        scores: {
          home: {
            quarter_1: 20,
            quarter_2: 23,
            quarter_3: 35,
            quarter_4: 37,
            over_time: null,
            total: 115,
          },
          away: {
            quarter_1: 22,
            quarter_2: 43,
            quarter_3: 27,
            quarter_4: 31,
            over_time: null,
            total: 123,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '3.44',
                },
                {
                  value: 'Draw',
                  odd: '13.50',
                },
                {
                  value: 'Away',
                  odd: '1.44',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-1.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326715,
        date: '2023-01-06T03:00:00+00:00',
        time: '03:00',
        timestamp: 1672974000,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Game Finished',
          short: 'FT',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 139,
            name: 'Denver Nuggets',
            logo: 'https://media-2.api-sports.io/basketball/teams/139.png',
          },
          away: {
            id: 144,
            name: 'Los Angeles Clippers',
            logo: 'https://media-3.api-sports.io/basketball/teams/144.png',
          },
        },
        scores: {
          home: {
            quarter_1: 32,
            quarter_2: 34,
            quarter_3: 36,
            quarter_4: 20,
            over_time: null,
            total: 122,
          },
          away: {
            quarter_1: 15,
            quarter_2: 17,
            quarter_3: 27,
            quarter_4: 32,
            over_time: null,
            total: 91,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.57',
                },
                {
                  value: 'Draw',
                  odd: '14.00',
                },
                {
                  value: 'Away',
                  odd: '2.85',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-2.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326729,
        date: '2023-01-08T01:00:00+00:00',
        time: '01:00',
        timestamp: 1673139600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 138,
            name: 'Dallas Mavericks',
            logo: 'https://media-2.api-sports.io/basketball/teams/138.png',
          },
          away: {
            id: 150,
            name: 'New Orleans Pelicans',
            logo: 'https://media-1.api-sports.io/basketball/teams/150.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.43',
                },
                {
                  value: 'Draw',
                  odd: '17.00',
                },
                {
                  value: 'Away',
                  odd: '3.58',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326728,
        date: '2023-01-08T01:00:00+00:00',
        time: '01:00',
        timestamp: 1673139600,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 136,
            name: 'Chicago Bulls',
            logo: 'https://media-1.api-sports.io/basketball/teams/136.png',
          },
          away: {
            id: 160,
            name: 'Utah Jazz',
            logo: 'https://media-2.api-sports.io/basketball/teams/160.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.95',
                },
                {
                  value: 'Draw',
                  odd: '13.00',
                },
                {
                  value: 'Away',
                  odd: '2.25',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-1.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326730,
        date: '2023-01-08T01:30:00+00:00',
        time: '01:30',
        timestamp: 1673141400,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 141,
            name: 'Golden State Warriors',
            logo: 'https://media-1.api-sports.io/basketball/teams/141.png',
          },
          away: {
            id: 153,
            name: 'Orlando Magic',
            logo: 'https://media-3.api-sports.io/basketball/teams/153.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.46',
                },
                {
                  value: 'Draw',
                  odd: '17.00',
                },
                {
                  value: 'Away',
                  odd: '3.38',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-2.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326731,
        date: '2023-01-08T03:00:00+00:00',
        time: '03:00',
        timestamp: 1673146800,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-3.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 157,
            name: 'Sacramento Kings',
            logo: 'https://media-2.api-sports.io/basketball/teams/157.png',
          },
          away: {
            id: 145,
            name: 'Los Angeles Lakers',
            logo: 'https://media-3.api-sports.io/basketball/teams/145.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '1.25',
                },
                {
                  value: 'Draw',
                  odd: '14.00',
                },
                {
                  value: 'Away',
                  odd: '4.40',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326736,
        date: '2023-01-08T23:00:00+00:00',
        time: '23:00',
        timestamp: 1673218800,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-1.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 147,
            name: 'Miami Heat',
            logo: 'https://media-3.api-sports.io/basketball/teams/147.png',
          },
          away: {
            id: 134,
            name: 'Brooklyn Nets',
            logo: 'https://media-2.api-sports.io/basketball/teams/134.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '2.20',
                },
                {
                  value: 'Draw',
                  odd: '12.00',
                },
                {
                  value: 'Away',
                  odd: '1.77',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      league: {
        id: 12,
        name: 'NBA',
        type: 'League',
        season: '2022-2023',
        logo: 'https://media-1.api-sports.io/basketball/leagues/12.png',
      },
      country: {
        id: 5,
        name: 'USA',
        code: 'US',
        flag: 'https://media-3.api-sports.io/flags/us.svg',
      },
      game: {
        id: 326727,
        date: '2023-01-07T23:00:00+00:00',
        time: '23:00',
        timestamp: 1673132400,
        timezone: 'UTC',
        stage: null,
        week: null,
        status: {
          long: 'Not Started',
          short: 'NS',
          timer: null,
        },
        league: {
          id: 12,
          name: 'NBA',
          type: 'League',
          season: '2022-2023',
          logo: 'https://media-2.api-sports.io/basketball/leagues/12.png',
        },
        country: {
          id: 5,
          name: 'USA',
          code: 'US',
          flag: 'https://media-2.api-sports.io/flags/us.svg',
        },
        teams: {
          home: {
            id: 158,
            name: 'San Antonio Spurs',
            logo: 'https://media-1.api-sports.io/basketball/teams/158.png',
          },
          away: {
            id: 133,
            name: 'Boston Celtics',
            logo: 'https://media-1.api-sports.io/basketball/teams/133.png',
          },
        },
        scores: {
          home: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
          away: {
            quarter_1: null,
            quarter_2: null,
            quarter_3: null,
            quarter_4: null,
            over_time: null,
            total: null,
          },
        },
      },
      bookmakers: [
        {
          id: 3,
          name: '1xBet',
          bets: [
            {
              id: 1,
              name: '3Way Result',
              values: [
                {
                  value: 'Home',
                  odd: '9.60',
                },
                {
                  value: 'Draw',
                  odd: '19.00',
                },
                {
                  value: 'Away',
                  odd: '1.12',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
