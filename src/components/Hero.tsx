import React from 'react';
// import '../styles/scss/components/_hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>EternalTalkへようこそ</h1>
          <p>いつでも、どこでも、大切な人とのつながりを。</p>
          <button className="btn btn-primary">今すぐ始める</button>
        </div>
        {/* ここにイメージやイラストを追加することもできます */}
        {/* <img src="hero-image.png" alt="Chat illustration" className="hero-image" /> */}
      </div>
    </section>
  );
};

export default Hero; 