import api from 'api';
import EventItem from 'components/event-item';
import ListGroup from 'components/list-group/ListGroup';
import ListGroupItem from 'components/list-group/ListGroupItem';
import { Context } from 'context/state';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionType } from 'types';
import EventListHead from './event-list-head';

import './EventList.scss';

const EventList = () => {
  // const [oddItems, setOddItems] = useState<OddItem[]>([]);
  const navigate = useNavigate();
  const {
    state: { oddItems, status },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    api.getOdds().then(({ response }) => {
      dispatch({ type: ActionType.SET_ODD_ITEMS, payload: response });
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
