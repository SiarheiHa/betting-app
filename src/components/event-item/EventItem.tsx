import React from 'react';
import { Game } from 'types';

const EventItem = ({ game }: { game: Game }) => {
  return (
    <>
      <span>{game.date.slice(0, 10)}</span>
      <span>{game.date.slice(11, 16)}</span>
      <span>{game.teams.home.name}</span>
      <span>{game.teams.away.name}</span>
      <span>{game.status.long}</span>
    </>
  );
};

export default EventItem;
