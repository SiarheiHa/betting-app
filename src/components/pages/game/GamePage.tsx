import { Context } from 'context/state';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ActionType, Value } from 'types';

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { oddItems },
    dispatch,
  } = useContext(Context);
  const [currentBet, setCurrentBet] = useState<Value | null>(null);
  const oddItem = oddItems.find(({ game }) => String(game.id) === id);
  const handleBet = () => {
    if (oddItem && currentBet) {
      dispatch({
        type: ActionType.SHOW_MESSAGE,
        payload: `You bet on the ${currentBet.value} (Game ${game.teams.home.name} - ${game.teams.away.name})`,
      });
      dispatch({ type: ActionType.SET_BET, payload: { game: oddItem.game, bet: currentBet } });
      navigate('/');
    }
  };

  useEffect(() => {
    if (!oddItem) {
      navigate('/');
    }
  }, [oddItem, navigate]);

  if (!oddItem) return null;
  const { game, bookmakers } = oddItem;
  const bets = bookmakers[0].bets[0].values;

  return (
    <>
      <p>game page</p>
      <NavLink to='/'>main page</NavLink>
      <p>{game.date.slice(0, 10)}</p>
      <p>{game.date.slice(11, 16)}</p>
      <h2>
        {game.teams.home.name} - {game.teams.away.name}
      </h2>
      {game.status.long !== 'Not Started' && 'Sorry you can`t bet for this event'}
      {game.status.long === 'Not Started' && (
        <form>
          <p>Go bet!</p>
          <div>
            {bets.map((bet) => {
              const { value, odd } = bet;
              return (
                <div key={value}>
                  <input
                    type='radio'
                    id='bet'
                    name='bet'
                    value={value}
                    checked={currentBet?.value === value}
                    onChange={() => setCurrentBet(bet)}
                  />
                  <label htmlFor='bet'>
                    {value} - odd {odd}
                  </label>
                </div>
              );
            })}
            <button disabled={!currentBet} onClick={handleBet}>
              Bet!
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default GamePage;
