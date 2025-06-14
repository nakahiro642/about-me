import React, { useState } from 'react';
import '../../styles/components/Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'app' | 'other';
  link?: string;
  github?: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'app' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Eコマースサイト',
      description: 'Reactで構築された現代的なEコマースプラットフォーム。レスポンシブデザインとユーザビリティを重視した設計。',
      image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=E-commerce',
      technologies: ['React', 'TypeScript', 'CSS3', 'React Router'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'タスク管理アプリ',
      description: 'ドラッグ&ドロップ機能を持つタスク管理アプリケーション。直感的な操作性を実現。',
      image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Task+App',
      technologies: ['React', 'TypeScript', 'CSS3', 'Local Storage'],
      category: 'app',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'ポートフォリオサイト',
      description: '現在ご覧いただいているサイトです。React + TypeScriptで作成されています。',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Portfolio',
      technologies: ['React', 'TypeScript', 'CSS3', 'Vite'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: '天気予報アプリ',
      description: 'OpenWeather APIを使用した天気予報アプリケーション。位置情報対応。',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Weather+App',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'API'],
      category: 'app',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'レスポンシブランディングページ',
      description: 'モバイルファーストで設計されたランディングページ。アニメーション効果も含む。',
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Landing+Page',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'ブログプラットフォーム',
      description: 'マークダウンエディター付きのブログプラットフォーム。記事の作成・編集が可能。',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Blog+Platform',
      technologies: ['React', 'TypeScript', 'Markdown', 'CSS3'],
      category: 'other',
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'すべて' },
    { key: 'web', label: 'Webサイト' },
    { key: 'app', label: 'アプリケーション' },
    { key: 'other', label: 'その他' }
  ] as const;

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <h1 className="page-title">ポートフォリオ</h1>
          <p className="page-subtitle">
            これまでに制作した作品をご紹介します
          </p>
        </div>

        {/* フィルター */}
        <div className="portfolio__filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-button ${selectedCategory === category.key ? 'filter-button--active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* プロジェクト一覧 */}
        <div className="portfolio__grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-details">詳細を見る</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>該当するプロジェクトがありません。</p>
          </div>
        )}
      </div>

      {/* モーダル */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-technologies">
                  <h4>使用技術</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      サイトを見る
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
