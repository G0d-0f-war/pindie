import Styles from './Overlay.module.css';

export const Overlay = ({ isOpened, closePopup }) => {
  return (
    <div
      onClick={() => closePopup()}
      className={`${Styles['overlay']} ${isOpened && Styles['overlay_is-opened']}`}></div>
  );
};
