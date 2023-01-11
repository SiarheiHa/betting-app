import { Action, ActionType, OddItem, State } from 'types';

const sortGamesByDate = (data: OddItem[]) => {
  return data.sort((a, b) => a.game.timestamp - b.game.timestamp);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_ODD_ITEMS:
      return {
        ...state,
        oddItems: sortGamesByDate(action.payload),
      };
    case ActionType.SET_BET: {
      return {
        ...state,
        bets: [...state.bets, action.payload],
      };
    }
    case ActionType.SHOW_MESSAGE: {
      console.log('aaaaaaaaaaaaaaaaaa');

      return {
        ...state,
        messageVisible: true,
        message: action.payload,
      };
    }
    case ActionType.HIDE_MESSAGE: {
      return {
        ...state,
        messageVisible: false,
      };
    }

    default:
      return state;
  }
};
