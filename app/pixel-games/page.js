'use client';
import React from 'react';

import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { useGetDataByCategory } from '../api/api-hooks';
import { Preloader } from '../components/Preloader/Preloader';
function Pixel(props) {
  const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');
  return (
    <main className="main">
      {pixelGames ? (
        <CardsListSection type={'slider'} id="pixel" title="Пиксельные" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Pixel;
