import React, { useState } from 'react';
import '../../styles/components/Interests.css';

// 音楽の情報を定義する型
interface Music {
  id: number;
  title: string;
  artist: string;
  description: string;
  image: string;
  rating: number;
  link: string;
}

// 趣味の情報を定義する型
interface Hobby {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Interests: React.FC = () => {
  // どのタブが選択されているかを管理
  const [activeTab, setActiveTab] = useState<'music' | 'hobbies'>('music');

 // getImagePath関数を追加
  const getImagePath = (imageName: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/about-me' : '';
    return `${basePath}/${imageName}`;
  };

  
  // 音楽のデータ
  const music: Music[] = [
    {
      id: 1,
      title: '僕のこと',
      artist: 'Mrs. GREEN APPLE',
      description: 'Mrs. GREEN APPLEの名曲。心に響く歌詞とメロディが特徴。',
      image: getImagePath('images/me.png'),
      rating: 5,
      link: 'https://youtu.be/xefpHEg5UIA?si=FYhRPl-867jPvVJP'
    },
    {
      id: 2,
      title: 'Plazma',
      artist: '米津玄師',
      description: '米津玄師の人気曲。独特な世界観とメロディが魅力。',
      image: getImagePath('images/fake_plazma.jpg'),
      rating: 5,
      link: 'https://youtu.be/fp3F6TqBsAU?si=J_xlGE4nXEVzOryK'
    },
    {
      id: 3,
      title: 'Soranji',
      artist: 'Mrs. GREEN APPLE',
      description: 'Mrs. GREEN APPLEの名曲。心に残る歌詞と美しいメロディ。',
      image: getImagePath('images/fake_soranji.jpg'),
      rating: 5,
      link: 'https://youtu.be/44cICMd3jW4?si=N1CArp7x5-ej_0Eq'
    }
  ];

  // 趣味のデータ
  const hobbies: Hobby[] = [
    {
      id: 1,
      title: 'ゲーム',
      description: '強気に行くのが僕のプレイスタイルです。',
      image: getImagePath('images/controller.png'),
      tags: ['FPS','TPS', 'RPG']
    },
    {
      id: 2,
      title: '寝ること',
      description: '寝ることは最高のリフレッシュ方法です。',
      image: getImagePath('images/no_sleep.png'),
      tags: ['リラックス', '健康']
    },
    {
      id: 3,
      title: 'バイト',
      description: 'お金を稼ぐために頑張っています。',
      image: getImagePath('images/job.jpg'),
      tags: ['仕事', '経験']
    }
  ];

  // 星の評価を表示する関数
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

  return (
    <div className="interests">
      <div className="container">
        {/* ページのヘッダー部分 */}
        <div className="interests__header">
          <h1 className="page-title">趣味・興味</h1>
          <p className="page-subtitle">
            私の興味や好きなものをご紹介します
          </p>

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

        {/* タブのコンテンツ表示部分 */}
        <div className="tab-content">

          {/* 音楽タブが選択されている場合 */}
          {activeTab === 'music' && (
            <div className="music-content fade-in">
              <h2>🎵 お気に入りの音楽</h2>
              <p className="section-description">
                作業中のBGMやリラックスタイムに聴く音楽をご紹介。
              </p>
              <div className="items-grid">
                {music.map((track) => (
                  <div key={track.id} className="item-card">
                    <div className="item-image">
                      <img src={track.image} alt={track.title} />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">{track.title}</h3>
                      <p className="item-subtitle">{track.artist}</p>
                      <p className="item-description">{track.description}</p>
                      {renderStars(track.rating)}
                      <a 
                        href={track.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="youtube-link"
                      >
                        🎵 YouTubeで聴く
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 趣味タブが選択されている場合 */}
          {activeTab === 'hobbies' && (
            <div className="hobbies-content fade-in">
              <h2>🎯 趣味・活動</h2>
              <p className="section-description">
                日常生活で楽しんでいる活動や趣味をご紹介します。
              </p>
              <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                  <div key={hobby.id} className="hobby-card">
                    <div className="hobby-image">
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
    </div>
  );
};

export default Interests;
