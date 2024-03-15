'use client';
import React from 'react';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';
function Runners(props) {
  const runnersGames = useGetDataByCategory(endpoints.games, 'runner');
  return (
    <main className="main">
      {runnersGames ? (
        <CardsListSection type={'slider'} id="runner" title="Ранеры" data={runnersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Runners;
