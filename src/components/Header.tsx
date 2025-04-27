import React from 'react';
// import '../styles/scss/components/_header.scss'; // この行を削除またはコメントアウト
// 仮のロゴパスを使用します。後でユーザーが提供するパスに置き換えます。
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="EternalTalk Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#features">特徴</a></li>
              <li><a href="#pricing">料金</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-secondary">ログイン</button>
            <button className="btn btn-primary">新規登録</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 