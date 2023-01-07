import React from 'react';

const columns = ['date', 'time GMT', 'home', 'away', 'status'];

const EventListHead = () => {
  return (
    <>
      {columns.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </>
  );
};

export default EventListHead;
