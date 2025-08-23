import React, { useState } from 'react';
import '../../styles/components/Contact.css';

const Contact: React.FC = () => {
  // フォームのデータを管理するstate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      alert('すべての項目を入力してください');
      return;
    }

    // ローディング状態を開始
    setIsLoading(true);

    // 送信処理のシミュレーション（実際のAPIコールの代わり）
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // フォームデータをコンソールに出力（実際の送信の代わり）
    console.log('送信データ:', { name, email, message });
    
    // ローディング終了
    setIsLoading(false);
    
    // 送信完了状態にする
    setIsSubmitted(true);
    
    // フォームをリセット
    setName('');
    setEmail('');
    setMessage('');
  };

  // 送信完了画面
  if (isSubmitted) {
    return (
      <div className="contact">
        <div className="container">
          <div className="contact__success">
            <div className="success-icon"></div>
            <h1 className="success-title">メッセージを送信しました！</h1>
            <p className="success-message">
              お問い合わせありがとうございます。<br />
              内容を確認し、数日以内にご返信いたします。
            </p>
            <button 
              className="back-button"
              onClick={() => setIsSubmitted(false)}
            >
              新しいメッセージを送る
            </button>
          </div>
        </div>
      </div>
    );
  }
// getImagePath関数を追加
  const getImagePath = (imageName: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/about-me' : '';
    return `${basePath}/${imageName}`;
  };
// メインのお問い合わせページ
return (
  <div className="contact">
    <div className="container">
      <div className="contact__header">
        <h1 className="contact__title">お問い合わせ</h1>
        <p className="contact__subtitle">
          ご質問やご相談がありましたら、お気軽にお声がけください。<br />
        </p>
      </div>
      {/* 右下固定の画像 */}
      <div className="contact__image">
        <a
          href = "https://www.tiktok.com/@zizikqindv0/video/7515345795151908104"
          target = "_blank"
          rel = "noopener noreferrer"
        >
          <img
            src={getImagePath("my-face.jpg")}
            alt="プロフィール画像"
            className="contact__image-img"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
      <div className="contact__form-container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
              <label className="form-label">お名前</label>
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="田中太郎"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">メールアドレス</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="TaroTanaka@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">メッセージ</label>
              <textarea
                className="form-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="お問い合わせ内容をご記入ください"
                rows={5}
                disabled={isLoading}
              />
            </div>

            <button 
              className="form-button" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? '送信中...' : 'メッセージを送信'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
