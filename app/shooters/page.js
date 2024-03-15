'use client';
import React from 'react';

import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';
function Shooter(props) {
  const shooterGames = useGetDataByCategory(endpoints.games, 'shooter');
  return (
    <main className="main">
      {shooterGames ? (
        <CardsListSection type={'slider'} id="shooter" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Shooter;
