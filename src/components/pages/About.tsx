import React, { useState } from 'react';
import '../../styles/components/About.css';

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  year: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'experience'>('profile');

 // getImagePath関数を追加
  const getImagePath = (imageName: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/about-me' : '';
    return `${basePath}/${imageName}`;
  };
  

  const skills: Skill[] = [
    { name: 'VALORANT', level: 80 },
    { name: 'Minecraft', level: 60},
    { name: 'ゼルダの伝説', level: 50},
    { name: 'League of Legends', level: 100},
    { name: '崩壊:スターレイル', level: 90},
    { name: '原神', level: 70},
  ];

  const experiences: Experience[] = [
    {
      year: '2025',
      title: '堀大輔を崇拝し始める',
      description: '彼の動画を見て人生が変わりました'
    },
    {
      year: '2025',
      title: '京都デザイン&テクノロジー専門学校入学',
      description: '櫟村先生の覇王色の覇気に圧倒され、毎回気絶しています'
    },
    {
      year: '2025',
      title: '課金の限界突破',
      description: 'はじめてソシャゲで10万円以上課金しました。'
    },
    {
      year: '2024',
      title: 'League of Legendsを始める',
      description: 'いつのまにかどハマりしました。怖いです'
    }
  ];

  // スキルバーのアニメーション
  const [skillsVisible, setSkillsVisible] = useState(false);
  
  React.useEffect(() => {
    if (activeTab === 'skills') {
      const timer = setTimeout(() => setSkillsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setSkillsVisible(false);
    }
  }, [activeTab]);

  return (
    <div className="about">
      <div className="container">
        <div className="about__header">
          <h1 className="page-title">自己紹介</h1>
          <p className="page-subtitle">
            私についてもっと詳しく
          </p>
      {/* 右下固定の画像 */}
      <div className="contact__image">
        <a href = "https://www.tiktok.com/@zizikqindv0/video/7515345795151908104"
          target = "_blank"
          rel = "noopener noreferrer"
        >
        <img 
          src={getImagePath("my-face.jpg")} 
          alt="プロフィール画像" 
          className="contact__image-img"
          style = {{ cursor: "pointer" }}
        />
        </a>
        </div>
        </div>

        {/* タブナビゲーション */}
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'profile' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            プロフィール
          </button>
          <button
            className={`tab-button ${activeTab === 'skills' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            ゲーム
          </button>
          <button
            className={`tab-button ${activeTab === 'experience' ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            経歴
          </button>
        </div>

        {/* タブコンテンツ */}
        <div className="tab-content">
          {activeTab === 'profile' && (
            <div className="profile-content fade-in">
              <div className="profile-grid">
                <div className="profile-text">
                  <h2>こんにちは！</h2>
                  <p>
                    私は中島央貴です。現在、エンジニアを目指して学習を進めています。
                  </p>
                  
                  <h3>興味・関心</h3>
                  <ul className="interest-list">
                    <li>ゲーム</li>
                    <li>堀大輔</li>
                    <li>音楽</li>
                    <li>映画</li>
                    <li>バイト</li>
                  </ul>

                  <h3>目標</h3>
                  <p>
                    学生である内に多くの資格を取得し、将来はIT業界で活躍したいと考えています。
                  </p>
                </div>
                
                <div className="profile-info">
                  <h4>基本情報</h4>
                  <dl className="info-list">
                    <dt>名前</dt>
                    <dd>中島央貴(ナカシマヒロキ)</dd>
                    <dt>所在地</dt>
                    <dd>京都府</dd>
                    <dt>専攻</dt>
                    <dd>ITプログラマー専攻</dd>
                    <dt>趣味</dt>
                    <dd>ゲーム、面白い動画を見ること</dd>
                    <dt>好きな食べ物</dt>
                    <dd>ラーメン、寿司</dd>
                    <dt>得意なこと</dt>
                    <dd>面白い人を見つけること</dd>
                  </dl>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-content fade-in">
              <h2>モチベーション</h2>
              <p className="skills-description">
                僕の好きなゲームを中心に作成しました。
              </p>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="experience-content fade-in">
              <h2>私の人生</h2>
              <p className="experience-description">
                最近の出来事。
              </p>
              
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{exp.year}</div>
                      <h3 className="timeline-title">{exp.title}</h3>
                      <p className="timeline-description">{exp.description}</p>
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

export default About;
