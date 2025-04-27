import React from 'react';
// import '../styles/scss/components/_features.scss'; // この行を削除またはコメントアウト

const Features = () => {
  // ダミーの特徴データ
  const featuresData = [
    {
      id: 1,
      // icon: '💬', // Remove emoji
      title: 'リアルタイムチャット',
      description: '遅延なくメッセージを送受信できます。',
    },
    {
      id: 2,
      // icon: '👥', // Remove emoji
      title: 'グループチャット',
      description: '複数人での会話も簡単に行えます。',
    },
    {
      id: 3,
      // icon: '🔒', // Remove emoji
      title: 'セキュリティ',
      description: 'エンドツーエンド暗号化で会話を保護します。',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>EternalTalkの特徴</h2>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-item">
              {/* Use div for stylable icon placeholder */}
              <div className="feature-icon"></div> 
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 