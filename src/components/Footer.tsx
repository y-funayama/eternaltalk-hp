import React from 'react';
// import '../styles/scss/components/_footer.scss'; // この行を削除またはコメントアウト

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} EternalTalk. All rights reserved.</p>
        {/* 必要に応じて他のリンクや情報を追加 */}
        {/* <nav>
          <a href="/privacy">プライバシーポリシー</a>
          <a href="/terms">利用規約</a>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer; 