import React from 'react';

const Features = () => {
  const featuresData = [
    {
      id: 1,
      // icon: '💬',
      title: 'リアルタイムチャット',
      description: '遅延なくメッセージを送受信できます。',
    },
    {
      id: 2,
      // icon: '👥',
      title: 'グループチャット',
      description: '複数人での会話も簡単に行えます。',
    },
    {
      id: 3,
      // icon: '🔒',
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
              {/* アイコン表示用のdivに変更 */}
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