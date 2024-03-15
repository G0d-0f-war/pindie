'use client';
import React, { useState, useEffect } from 'react';
import styles from './Promo.module.css';

function Promo(props) {
  const [codeIsVisible, setCodeIsVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (codeIsVisible) {
      timeout = setTimeout(() => {
        setCodeIsVisible(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [codeIsVisible]);

  const handleButtonClick = () => {
    setCodeIsVisible(true);
  };
  return (
    <section className={styles.promo}>
      <div className="promo__description-block">
        <h2 className={styles.title}>Твой промо-код</h2>
        <p className={styles.description}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button onClick={() => handleButtonClick()} className={`button ${styles.button}`}>
          {codeIsVisible ? (
            <span className={styles['promo-code']}>WEBTEENS10</span>
          ) : (
            'Получить код'
          )}
        </button>
      </div>
      <img src="./images/promo-illustration.svg" alt="Собака" className={styles.image} />
    </section>
  );
}

export default Promo;
