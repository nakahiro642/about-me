import React, { useState } from 'react';
import '../../styles/components/news.css';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: 'announcement' | 'update' | 'achievement';
  image?: string;
}


  
const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'announcement' | 'update' | 'achievement'>('all');

   // getImagePath関数を追加
  const getImagePath = (imageName: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/about-me' : '';
    return `${basePath}/${imageName}`;
  };

  const newsItems: NewsItem[] = [
    //追加予定
    {
      id: 1,
      title: 'サイトオープンのお知らせ',
      content: 'この度、私のポートフォリオサイトを作成しました。',
      date: '2025-07-05',
      category: 'announcement'
    },
    {
      id: 2,
      title: '資格取得',
      content: 'AI900の資格を取得しました。次は基本情報技術者試験を目指します。',
      date: '2025-04-30',
      category: 'achievement'
    },
    {
      id: 3,
      title: 'サイトを最新の状態に更新しました',
      content: 'サイトのデザインとコンテンツを更新しました。',
      date: '2025-07-26',
      category: 'update'
    },
    {
      id: 4,
      title: '海外研修に参加します',
      content: 'かなり楽しみです。',
      date: '2025-08-23',
      category: 'announcement'
    }
  ];

  const categories = [
    { key: 'all' as const, label: 'すべて' },
    { key: 'announcement' as const, label: 'お知らせ' },
    { key: 'update' as const, label: '更新情報' },
    { key: 'achievement' as const, label: '実績' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems.sort((a, b) => {
        // サイトオープンのお知らせ（id: 1）を最上位に固定
        if (a.id === 1) return -1;
        if (b.id === 1) return 1;
        // その他は日付順（新しい順）
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    : newsItems.filter(item => item.category === selectedCategory)
    .sort((a, b) => {
        // サイトオープンのお知らせ（id: 1）を最上位に固定
        if (a.id === 1) return -1;
        if (b.id === 1) return 1;
        // その他は日付順（新しい順）
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

  return (
    <>
      {/* 右下固定の画像 */}
      <div className="contact__image">
        <a
          href="https://www.tiktok.com/@zizikqindv0/video/7515345795151908104"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={getImagePath("my-face.jpg")}
            alt="プロフィール画像"
            className="contact__image-img"
          />
        </a>
      </div>

      <div className="news">
      <div className="container">
        <div className="news__header">
          <h1 className="page-title">ニュース</h1>
          <p className="page-subtitle">
            最新の情報をお知らせします
          </p>
        </div>

        {/* フィルター */}
        <div className="news__filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-button ${selectedCategory === category.key ? 'filter-button--active' : ''}`}
              onClick={() => setSelectedCategory(category.key as 'all' | 'announcement' | 'update' | 'achievement')}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* ニュース一覧 */}
        <div className="news__grid">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <div key={item.id} className="news-item">
                <div className="news-date">{item.date}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-content">{item.content}</p>
                <span className={`category-badge ${item.category}`}>
                  {categories.find(cat => cat.key === item.category)?.label}
                </span>
              </div>
            ))
          ) : (
            <div className="no-news">
              <p>まだニュースがありません。</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default News;
