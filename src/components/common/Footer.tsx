import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__title">MY PORTFOLIO</h3>
            <p className="footer__description">
              React + TypeScriptで作成したポートフォリオサイトです。
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4 className="footer__section-title">サイトマップ</h4>
              <ul className="footer__list">
                <li><Link to="/" className="footer__link">ホーム</Link></li>
                <li><Link to="/about" className="footer__link">自己紹介</Link></li>
                <li><Link to="/portfolio" className="footer__link">ポートフォリオ</Link></li>
                <li><Link to="/interests" className="footer__link">趣味・興味</Link></li>
                <li><Link to="/contact" className="footer__link">お問い合わせ</Link></li>
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">SNS</h4>
              <ul className="footer__list">
                <li>
                  <a 
                    href="https://github.com" 
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="footer__tech">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
