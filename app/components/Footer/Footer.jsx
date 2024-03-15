import React from 'react';
import Link from 'next/link';
function Footer(props) {
  return (
    <footer className="footer">
      <Link href="./index.html" className="footer__logo">
        <span className="footer__logo-name">pindie</span>
        <span className="footer__logo-copy">, XXI век</span>
      </Link>
      <ul className="social-list">
        <li className="social-list__item">
          <Link href="" className="button social-list__link">
            YT
          </Link>
        </li>
        <li className="social-list__item">
          <Link href="" className="button social-list__link">
            ВК
          </Link>
        </li>
        <li className="social-list__item">
          <Link href="" className="button social-list__link">
            TG
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
