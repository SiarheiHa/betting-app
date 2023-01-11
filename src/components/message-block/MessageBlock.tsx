import { Context } from 'context/state';
import React, { useContext, useEffect } from 'react';
import { ActionType } from 'types';

const MessageBlock = () => {
  const {
    state: { messageVisible, message },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (messageVisible) {
      setTimeout(() => {
        dispatch({ type: ActionType.HIDE_MESSAGE });
      }, 5000);
    }
  });

  if (!messageVisible) return null;

  return <h4>{message}</h4>;
};

export default MessageBlock;
