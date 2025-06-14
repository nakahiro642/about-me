import React, { useState } from 'react';
import '../../styles/components/Interests.css';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  rating: number;
}

interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  description: string;
  image: string;
  rating: number;
}

interface Music {
  id: number;
  title: string;
  artist: string;
  album: string;
  description: string;
  image: string;
  rating: number;
}

const Interests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'books' | 'movies' | 'music' | 'hobbies'>('books');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const books: Book[] = [
    {
      id: 1,
      title: 'リーダブルコード',
      author: 'Dustin Boswell, Trevor Foucher',
      description: '美しいコードを書くための実践的なテクニックが学べる名著。プログラマー必読の一冊。',
      image: 'https://via.placeholder.com/200x280/2563eb/ffffff?text=Book+1',
      rating: 5
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      description: 'JavaScriptの良い部分に焦点を当てた、効率的なプログラミングのためのガイド。',
      image: 'https://via.placeholder.com/200x280/7c3aed/ffffff?text=Book+2',
      rating: 4
    },
    {
      id: 3,
      title: 'デザインの教室',
      author: 'サトウヒロシ',
      description: 'デザインの基本原則と実践的なテクニックを学べるデザイン入門書。',
      image: 'https://via.placeholder.com/200x280/f59e0b/ffffff?text=Book+3',
      rating: 4
    }
  ];

  const movies: Movie[] = [
    {
      id: 1,
      title: 'ソーシャル・ネットワーク',
      director: 'David Fincher',
      year: 2010,
      description: 'Facebookの創設者マーク・ザッカーバーグの物語。テクノロジーと人間関係を描いた秀作。',
      image: 'https://via.placeholder.com/200x300/10b981/ffffff?text=Movie+1',
      rating: 5
    },
    {
      id: 2,
      title: 'Her/世界でひとつの彼女',
      director: 'Spike Jonze',
      year: 2013,
      description: 'AIとの恋愛を描いた近未来SF映画。技術と感情の関係性を探る作品。',
      image: 'https://via.placeholder.com/200x300/ef4444/ffffff?text=Movie+2',
      rating: 4
    },
    {
      id: 3,
      title: 'スティーブ・ジョブズ',
      director: 'Danny Boyle',
      year: 2015,
      description: 'Apple創設者の人生を描いた伝記映画。革新的なビジョンと人間性の複雑さを描く。',
      image: 'https://via.placeholder.com/200x300/8b5cf6/ffffff?text=Movie+3',
      rating: 4
    }
  ];

  const music: Music[] = [
    {
      id: 1,
      title: 'Weightless',
      artist: 'Marconi Union',
      album: 'Ambient',
      description: '科学的に最もリラックスできる音楽として作られた楽曲。集中したいときに最適。',
      image: 'https://via.placeholder.com/200x200/06b6d4/ffffff?text=Music+1',
      rating: 5
    },
    {
      id: 2,
      title: 'Porcelain',
      artist: 'Moby',
      album: 'Play',
      description: 'エレクトロニカの名曲。作業中のBGMとして愛聴している一曲。',
      image: 'https://via.placeholder.com/200x200/84cc16/ffffff?text=Music+2',
      rating: 4
    },
    {
      id: 3,
      title: 'Comptine d\'un autre été',
      artist: 'Yann Tiersen',
      album: 'Le Fabuleux Destin d\'Amélie Poulain',
      description: '映画「アメリ」のサウンドトラック。美しいピアノの旋律が心を癒す。',
      image: 'https://via.placeholder.com/200x200/f97316/ffffff?text=Music+3',
      rating: 5
    }
  ];

  const hobbies = [
    {
      id: 1,
      title: 'プログラミング',
      description: '新しい技術や言語を学ぶことが好きです。特にフロントエンド技術に興味があります。',
      image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Programming',
      tags: ['React', 'TypeScript', 'JavaScript']
    },
    {
      id: 2,
      title: '写真撮影',
      description: '街歩きをしながらの風景撮影が趣味です。特に夕暮れ時の光の表現が好きです。',
      image: 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=Photography',
      tags: ['風景', '街スナップ', '夕暮れ']
    },
    {
      id: 3,
      title: 'カフェ巡り',
      description: 'コーヒーの味を楽しみながら、新しいカフェを発見するのが好きです。',
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Coffee',
      tags: ['コーヒー', 'カフェ', 'リラックス']
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={`star ${star <= rating ? 'star--filled' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="interests">
      <div className="container">
        <div className="interests__header">
          <h1 className="page-title">趣味・興味</h1>
          <p className="page-subtitle">
            私の興味や好きなものをご紹介します
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'books' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('books')}
          >
            📚 読書
          </button>
          <button
            className={`tab-button ${activeTab === 'movies' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('movies')}
          >
            🎬 映画
          </button>
          <button
            className={`tab-button ${activeTab === 'music' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('music')}
          >
            🎵 音楽
          </button>
          <button
            className={`tab-button ${activeTab === 'hobbies' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('hobbies')}
          >
            🎯 趣味
          </button>
        </div>

        {/* タブコンテンツ */}
        <div className="tab-content">
          {activeTab === 'books' && (
            <div className="books-content fade-in">
              <h2>📖 愛読書</h2>
              <p className="section-description">
                技術書からデザイン本まで、幅広く読んでいます。
              </p>
              <div className="items-grid">
                {books.map((book) => (
                  <div key={book.id} className="item-card">
                    <div className="item-image" onClick={() => openLightbox(book.image)}>
                      <img src={book.image} alt={book.title} />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">{book.title}</h3>
                      <p className="item-subtitle">著者: {book.author}</p>
                      <p className="item-description">{book.description}</p>
                      {renderStars(book.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'movies' && (
            <div className="movies-content fade-in">
              <h2>🎬 好きな映画</h2>
              <p className="section-description">
                テクノロジーをテーマにした作品を中心に楽しんでいます。
              </p>
              <div className="items-grid">
                {movies.map((movie) => (
                  <div key={movie.id} className="item-card">
                    <div className="item-image" onClick={() => openLightbox(movie.image)}>
                      <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">{movie.title}</h3>
                      <p className="item-subtitle">監督: {movie.director} ({movie.year})</p>
                      <p className="item-description">{movie.description}</p>
                      {renderStars(movie.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'music' && (
            <div className="music-content fade-in">
              <h2>🎵 お気に入りの音楽</h2>
              <p className="section-description">
                作業中のBGMやリラックスタイムに聴く音楽をご紹介。
              </p>
              <div className="items-grid">
                {music.map((track) => (
                  <div key={track.id} className="item-card">
                    <div className="item-image" onClick={() => openLightbox(track.image)}>
                      <img src={track.image} alt={track.title} />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">{track.title}</h3>
                      <p className="item-subtitle">{track.artist} - {track.album}</p>
                      <p className="item-description">{track.description}</p>
                      {renderStars(track.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hobbies' && (
            <div className="hobbies-content fade-in">
              <h2>🎯 趣味・活動</h2>
              <p className="section-description">
                日常生活で楽しんでいる活動や趣味をご紹介します。
              </p>
              <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                  <div key={hobby.id} className="hobby-card">
                    <div className="hobby-image" onClick={() => openLightbox(hobby.image)}>
                      <img src={hobby.image} alt={hobby.title} />
                    </div>
                    <div className="hobby-content">
                      <h3 className="hobby-title">{hobby.title}</h3>
                      <p className="hobby-description">{hobby.description}</p>
                      <div className="hobby-tags">
                        {hobby.tags.map((tag) => (
                          <span key={tag} className="hobby-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ライトボックス */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage} alt="拡大表示" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Interests;
