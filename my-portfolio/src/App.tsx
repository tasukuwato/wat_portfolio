import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './sections/About';
import Timeline from './sections/Timeline';

function App() {

  const careerEvents = [
    {
      year: 2020,
      title: '大学 入学',
      description: '工学部情報工学科に入学しました。'
    },
    {
      year: 2022,
      title: 'インターンシップ',
      description: 'ソフトウェア開発会社でのインターンシップに参加しました。'
    },
    // 他のイベントを追加
  ];

  return (
    <div className='App'>
      <header className="App-header">
        {/* 各セクションのコンポーネントを配置 */}
          <About
            name="Wato Tasuku"
            age={20}
            university="Meijo University"
            department="Information Engineering"
            />
          <Timeline events={careerEvents} />

          
          <p>Welcome to Wato's Portfolio</p>
      </header>
    </div>
  );
}

export default App;
