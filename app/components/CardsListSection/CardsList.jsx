import React from 'react';
import styles from './CardsListSection.module.css';
import Card from '../Card/Card';
import Link from 'next/link';
function CardList(props) {
  return (
    <section className={styles.list}>
      <h2 className={styles.title} id={props.id}>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {props.data.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link href={`/games/${item.id}`} className={styles.link}>
              <Card {...item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
