import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles/scss/main.scss'; // メインSCSSファイルをインポート

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* 他のセクションをここに追加できます */}
      </main>
      <Footer />
    </div>
  );
}

export default App; 