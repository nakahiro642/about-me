import React, { useState } from 'react';
import '../../styles/components/Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 名前の検証
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'お名前は2文字以上で入力してください';
    }

    // メールアドレスの検証
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    // 件名の検証
    if (!formData.subject.trim()) {
      newErrors.subject = '件名を入力してください';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = '件名は5文字以上で入力してください';
    }

    // メッセージの検証
    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // エラーがある場合、入力時にクリア
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 実際の送信処理（ここではシミュレーション）
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('フォームデータ:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '🐙',
      description: 'プロジェクトのソースコードをご確認いただけます'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      description: '日常の学習記録や技術的な発見をツイートしています'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      description: 'プロフェッショナルなネットワーキングに使用しています'
    },
    {
      name: 'Email',
      url: 'mailto:example@example.com',
      icon: '📧',
      description: '直接メールでもお気軽にご連絡ください'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="contact">
        <div className="container">
          <div className="submission-success">
            <div className="success-icon">✅</div>
            <h1>メッセージを送信しました！</h1>
            <p>
              お問い合わせいただき、ありがとうございます。<br />
              できるだけ早くご返信いたします。
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setIsSubmitted(false)}
            >
              新しいメッセージを送信
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__header">
          <h1 className="page-title">お問い合わせ</h1>
          <p className="page-subtitle">
            ご質問やご相談がございましたら、お気軽にお声がけください
          </p>
        </div>

        <div className="contact__content">
          {/* お問い合わせフォーム */}
          <div className="contact__form-section">
            <h2>メッセージを送る</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  お名前 <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                  placeholder="田中太郎"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  メールアドレス <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                  placeholder="example@example.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  件名 <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                  placeholder="お問い合わせの件名"
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  メッセージ <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={6}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${isSubmitting ? 'btn--loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : 'メッセージを送信'}
              </button>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div className="contact__info-section">
            <h2>その他の連絡方法</h2>
            <p className="contact__info-description">
              SNSやその他の方法でもお気軽にご連絡ください。
            </p>
            
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">{link.icon}</div>
                  <div className="social-content">
                    <h3 className="social-name">{link.name}</h3>
                    <p className="social-description">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__additional-info">
              <h3>レスポンス時間</h3>
              <p>
                通常、24時間以内にご返信いたします。<br />
                緊急の場合は、直接メールでご連絡ください。
              </p>
              
              <h3>対応可能な内容</h3>
              <ul className="capability-list">
                <li>Web開発に関するご相談</li>
                <li>技術的な質問</li>
                <li>プロジェクトのご提案</li>
                <li>学習に関するアドバイス</li>
                <li>その他のご質問</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
