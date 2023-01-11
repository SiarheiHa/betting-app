import { Action, ActionType, OddItem, State } from 'types';

const sortGamesByDate = (data: OddItem[]) => {
  return data.sort((a, b) => a.game.timestamp - b.game.timestamp);
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ODD_ITEMS:
      return {
        ...state,
        oddItems: sortGamesByDate(action.payload),
      };
    default:
      return state;
  }
};
