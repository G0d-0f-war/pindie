'use client';
import React from 'react';

import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';
function Tds(props) {
  const tdsGames = useGetDataByCategory(endpoints.games, 'TDS');
  return (
    <main className="main">
      {tdsGames ? (
        <CardsListSection type={'slider'} id="TDS" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Tds;
