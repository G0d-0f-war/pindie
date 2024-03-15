'use client';
import React from 'react';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';

function Popular(props) {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular');
  return (
    <main className="main">
      {popularGames ? (
        <CardsListSection type={'slider'} id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Popular;
