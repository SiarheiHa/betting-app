import api from 'api';
import EventItem from 'components/event-item';
import ListGroup from 'components/list-group/ListGroup';
import ListGroupItem from 'components/list-group/ListGroupItem';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OddItem } from 'types';
import EventListHead from './event-list-head';

import './EventList.scss';

const sortGamesByDate = (data: OddItem[]) => {
  return data.sort((a, b) => a.game.timestamp - b.game.timestamp);
};

const EventList = () => {
  const [oddItems, setOddItems] = useState<OddItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.getOdds().then((data) => {
      setOddItems(sortGamesByDate(data.response));
    });
  }, []);

  const navigateToEventPage = (id: number) => navigate(`/game/${id}`);

  return (
    <ListGroup>
      <ListGroupItem className='event-list-item head'>
        <EventListHead />
      </ListGroupItem>
      <>
        {oddItems.map(({ game }) => {
          return (
            <ListGroupItem
              key={game.id}
              className='event-list-item'
              onClick={() => navigateToEventPage(game.id)}
            >
              <EventItem game={game} />
            </ListGroupItem>
          );
        })}
      </>
    </ListGroup>
  );
};

export default EventList;
