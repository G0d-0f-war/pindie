import React from 'react';
import styles from './Card.module.css';
function Card(props) {
  return (
    <article className={styles.card}>
      <img src={props.image} alt="" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.info}>
          <p className={styles.author}>
            Автор: <span className={styles.accent}>{props.developer}</span>
          </p>
          <p className={styles.votes}>
            Голосов на сайте: <span className={styles.accent}>{props.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
