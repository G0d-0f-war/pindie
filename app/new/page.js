'use client';
import React from 'react';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';
function New(props) {
  const newGames = useGetDataByCategory(endpoints.games, 'new');
  return (
    <main className="main">
      {newGames ? (
        <CardsListSection type={'slider'} id="new" title="Новые" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default New;
