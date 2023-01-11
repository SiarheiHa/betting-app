import MessageBlock from 'components/message-block';
import GamePage from 'components/pages/game';
import MainPage from 'components/pages/main';
import NotFoundPage from 'components/pages/notFound';
import { AppState } from 'context';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <header>header</header>
      <main>
        <AppState>
          <MessageBlock />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/game/:id' element={<GamePage />} />
            <Route path='/404' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate to={'/404'} replace />} />
          </Routes>
        </AppState>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
