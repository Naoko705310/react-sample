/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // srcフォルダ内の全てのJavaScript/TypeScriptファイルを対象
  ],
  theme: {
    extend: {
      screens: {
        'artboard': '1280px', // Custom breakpoint for 1280px
      },
      maxWidth: {
        'custom': '960px', // カスタム幅を追加
      },
      fontFamily: {
        hiragino: ['"Hiragino Kaku Gothic Pro"', 'sans-serif'],
      },
      height: {
        '15': '60px', // カスタムサイズを追加
      },
      spacing: {
        '7.5': '30px',
      },
      margin: {
        '70': '70px',
      },
    },
  },
  plugins: [],
}