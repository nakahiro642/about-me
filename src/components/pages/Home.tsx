import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Home.css';

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = useMemo(() => [
    '睡眠不足です',
    '早く帰りたいです',
    '生理欲求には逆らえません'
  ], []);

  // タイピングエフェクト
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (currentIndex < currentMessage.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // メッセージが完了したら次のメッセージへ
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentMessageIndex, messages]);

  // スムーススクロール関数
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title fade-in">
              こんにちは！<br />
              私の名前は<span className="hero__name">中島央貴</span>です
            </h1>
            <div className="hero__typing">
              <p className="typing-text">{displayText}<span className="cursor">|</span></p>
            </div>
            <div className="hero__actions">
              <Link to="/about" className="btn btn-primary">
                もっと詳しく
              </Link>
              <button 
                onClick={() => scrollToSection('featured')} 
                className="btn btn-secondary"
              >
                作品を見る
              </button>
            </div>
          </div>
          <div className="hero__image">
            <img 
              src="https://via.placeholder.com/400x400/2563eb/ffffff?text=Profile" 
              alt="プロフィール画像" 
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* 特集セクション */}
      <section id="featured" className="featured py-16">
        <div className="container">
          <h2 className="section-title text-center mb-12">Featured Works</h2>
          <div className="grid grid-cols-3">
            <div className="card feature-card">
              <img 
                src="https://via.placeholder.com/300x200/7c3aed/ffffff?text=Project+1" 
                alt="プロジェクト1" 
                className="feature-image"
              />
              <h3>Reactアプリケーション</h3>
              <p className="text-muted">
                モダンなUIライブラリを使用したWebアプリケーション
              </p>
              <Link to="/portfolio" className="btn btn-primary">
                詳細を見る
              </Link>
            </div>
            
            <div className="card feature-card">
              <img 
                src="https://via.placeholder.com/300x200/f59e0b/ffffff?text=Project+2" 
                alt="プロジェクト2" 
                className="feature-image"
              />
              <h3>TypeScript API</h3>
              <p className="text-muted">
                型安全性を重視したバックエンドAPI開発
              </p>
              <Link to="/portfolio" className="btn btn-primary">
                詳細を見る
              </Link>
            </div>
            
            <div className="card feature-card">
              <img 
                src="https://via.placeholder.com/300x200/10b981/ffffff?text=Project+3" 
                alt="プロジェクト3" 
                className="feature-image"
              />
              <h3>レスポンシブサイト</h3>
              <p className="text-muted">
                全デバイス対応のモダンWebサイト
              </p>
              <Link to="/portfolio" className="btn btn-primary">
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="skills py-16">
        <div className="container">
          <h2 className="section-title text-center mb-12">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                <li className="skill-item">React</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">CSS3</li>
                <li className="skill-item">HTML5</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools</h3>
              <ul className="skill-list">
                <li className="skill-item">Git</li>
                <li className="skill-item">Vite</li>
                <li className="skill-item">ESLint</li>
                <li className="skill-item">VS Code</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Design</h3>
              <ul className="skill-list">
                <li className="skill-item">UI/UX</li>
                <li className="skill-item">Responsive</li>
                <li className="skill-item">Accessibility</li>
                <li className="skill-item">Animation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="cta py-16">
        <div className="container">
          <div className="cta__content text-center">
            <h2 className="cta__title">一緒にプロジェクトを作りませんか？</h2>
            <p className="cta__description">
              新しいアイデアや技術に興味があります。お気軽にお声がけください。
            </p>
            <Link to="/contact" className="btn btn-primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
