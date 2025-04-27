/// <reference types="react-scripts" />

// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.gif';
// declare module '*.bmp';
// declare module '*.tiff';
// declare module '*.svg';

// 上記の代わりに、より包括的な設定を使用することもできます:
declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.svg' {
  const value: any;
  export default value;
}
declare module '*.jpeg' {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const value: any;
  export default value;
} 