import React from 'react';
import styles from './Banner.module.css';
function Banner(props) {
  return (
    <section className={styles.banner}>
      <div className={styles.description}>
        <h1 className={styles.title}>Портал инди-игр от&nbsp;студентов Яндекс Практикума</h1>
        <div className={styles.text__block}>
          <p className={styles.text}>
            Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете
            играть прямо на сайте. А если у вас есть аккаунт пользователя — получаете возможность
            голосовать за игры.
          </p>
        </div>
        <a href="#popular" className={`button ${styles.link}`}>
          Смотреть игры
        </a>
      </div>
      <img
        src="./images/banner-illustration.jpg"
        alt="Рука, утопленная в желтом фоне"
        className={styles.image}
      />
    </section>
  );
}

export default Banner;
