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
  image: string;
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
    { name: 'League of Legends', level: 90},
    { name: '崩壊:スターレイル', level: 80},
    { name: '原神', level: 70},
  ];

  const experiences: Experience[] = [
    {
      year: '2025',
      title: '京都デザイン&テクノロジー専門学校入学',
      description: '全授業真面目に受けています。(夢の中で)',
      image: getImagePath('school.jpg')
    },
    {
      year: '2025',
      title: '京都共栄学園卒業',
      description: 'いい高校でしたね。',
      image: getImagePath('graduation.jpg')
    },
    {
      year: '2024',
      title: 'プログラミング学習開始',
      description: 'C言語を少し学んでいました。',
      image: getImagePath('programming.jpg')
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
        <img 
          src={getImagePath("my-face.jpg")} 
          alt="プロフィール画像" 
          className="contact__image-img"
        />
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
            経験
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
                    <li>高速タイピング</li>
                    <li>音楽</li>
                    <li>映画</li>
                    <li>バイト</li>
                  </ul>

                  <h3>目標</h3>
                  <p>
                    優れたUI/UXを持つサイトを作成することです。
                  </p>
                </div>
                
                <div className="profile-info">
                  <h4>基本情報</h4>
                  <dl className="info-list">
                    <dt>名前</dt>
                    <dd>中島央貴</dd>
                    <dt>所在地</dt>
                    <dd>京都府</dd>
                    <dt>専攻</dt>
                    <dd>ITプログラマー専攻</dd>
                    <dt>趣味</dt>
                    <dd>ゲーム、思いっきり寝ること</dd>
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
              <h2>経歴</h2>
              <p className="experience-description">
                おおまかな記録です。
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
