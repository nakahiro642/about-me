import React, { useState } from 'react';
import '../../styles/components/About.css';

interface Skill {
  name: string;
  level: number;
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'experience'>('profile');

  const skills: Skill[] = [
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 85 },
  ];

  const experiences = [
    {
      year: '2024',
      title: 'フロントエンド学習開始',
      description: 'ReactとTypeScriptを中心とした学習を開始。現代的なWeb開発手法を習得中。'
    },
    {
      year: '2023',
      title: 'プログラミング学習開始',
      description: 'HTML、CSS、JavaScriptの基礎から学習をスタート。Web技術の基盤を固める。'
    },
    {
      year: '2022',
      title: '大学入学',
      description: 'コンピューターサイエンス分野での学習を開始。理論と実践のバランスを重視。'
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
            私についてもっと詳しく知っていただけます
          </p>
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
            スキル
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
                    私は田中太郎と申します。現在、フロントエンドエンジニアを目指して学習を進めています。
                    特にReactとTypeScriptを中心とした現代的なWeb開発に興味を持っています。
                  </p>
                  
                  <h3>興味・関心</h3>
                  <ul className="interest-list">
                    <li>ユーザーインターフェースデザイン</li>
                    <li>アクセシビリティ</li>
                    <li>パフォーマンス最適化</li>
                    <li>モダンなJavaScriptフレームワーク</li>
                    <li>オープンソース貢献</li>
                  </ul>

                  <h3>目標</h3>
                  <p>
                    ユーザーにとって使いやすく、美しいWebアプリケーションを作ることを目標としています。
                    技術的な実装だけでなく、UXやアクセシビリティも重視した開発を心がけています。
                  </p>
                </div>
                
                <div className="profile-image">
                  <img 
                    src="https://via.placeholder.com/300x400/2563eb/ffffff?text=About+Me" 
                    alt="プロフィール詳細画像" 
                  />
                  <div className="profile-info">
                    <h4>基本情報</h4>
                    <dl className="info-list">
                      <dt>名前</dt>
                      <dd>田中太郎</dd>
                      <dt>所在地</dt>
                      <dd>東京都</dd>
                      <dt>学習分野</dt>
                      <dd>フロントエンド開発</dd>
                      <dt>趣味</dt>
                      <dd>読書、音楽、映画鑑賞</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-content fade-in">
              <h2>技術スキル</h2>
              <p className="skills-description">
                現在学習中および習得済みの技術スキルです。継続的に学習を進めています。
              </p>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
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

              <div className="skill-categories">
                <div className="skill-category">
                  <h3>フロントエンド</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Sass/SCSS</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>ツール・その他</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Vite</span>
                    <span className="skill-tag">Webpack</span>
                    <span className="skill-tag">ESLint</span>
                    <span className="skill-tag">Prettier</span>
                    <span className="skill-tag">VS Code</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="experience-content fade-in">
              <h2>学習経験</h2>
              <p className="experience-description">
                これまでの学習の歩みと成長の記録です。
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

              <div className="learning-goals">
                <h3>今後の学習予定</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <h4>Next.js</h4>
                    <p>SSRとSSGを活用したパフォーマンスの高いアプリケーション開発</p>
                  </div>
                  <div className="goal-item">
                    <h4>テスト</h4>
                    <p>Jest、React Testing Libraryを使用したユニットテスト</p>
                  </div>
                  <div className="goal-item">
                    <h4>バックエンド</h4>
                    <p>Node.js、Express.jsでのAPI開発</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
