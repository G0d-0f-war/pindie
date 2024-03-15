'use client';
import Banner from './components/Banner/Banner';

import { CardsListSection } from './components/CardsListSection/CardsListSection';
import Promo from './components/Promo/Promo';
import { getGamesByCategory } from './data/data-utils';

export default function Home() {
  const popularGames = getGamesByCategory('popular');
  const newGames = getGamesByCategory('new');
  return (
    <main className="main">
      <Banner />

      <CardsListSection type={'slider'} id="popular" title="Популярное" data={popularGames} />
      <CardsListSection type={'slider'} id="new" title="Новое" data={newGames} />
      <Promo />
    </main>
  );
}
