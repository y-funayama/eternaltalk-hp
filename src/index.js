import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App.tsx exists now

const rootElement = document.getElementById('root');

// rootElementがnullでないことを確認してからcreateRootを呼び出す
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
} 