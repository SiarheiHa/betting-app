import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <p>oops!</p>
      <NavLink to='/'>main page</NavLink>
    </>
  );
};

export default NotFoundPage;
