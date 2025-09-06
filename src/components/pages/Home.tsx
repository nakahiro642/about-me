import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Home.css';

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  // ベースパスを動的に取得
  const getImagePath = (imageName: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/about-me' : '';
    return `${basePath}/${imageName}`;
  };
  
  const messages = useMemo(() => [
    '基本情報技術者の勉強をしています',
    'ゲームと寝ることが趣味です',
    'ジャンクフードが大好きです',
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
            </div>
          </div>
          <div className="hero__image">
            <div className="photo-grid">
              <div className="photo-item">
                <img 
                  src={getImagePath("images/old_man.png")} 
                  alt="写真1" 
                  className="grid-image"
                />
              </div>
              <div className="photo-item">
                <img 
                  src={getImagePath("images/interesting_face.png")} 
                  alt="写真2" 
                  className="grid-image"
                />
              </div>
              <div className="photo-item">
                <img 
                  src={getImagePath("images/intersting_man.jpg")} 
                  alt="写真3" 
                  className="grid-image"
                />
              </div>
              <div className="photo-item">
                <img 
                  src={getImagePath("images/muringo.jpg")} 
                  alt="写真4" 
                  className="grid-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="cta py-16">
        <div className="container">
          <div className="cta__content text-center">
            <h2 className="cta__title">私に質問等がありますか？</h2>
            <p className="cta__description">
              お気軽にご連絡ください
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
