import React, { useState } from 'react';
import manisya from './images/manisya.png'
import Header from './components/header';
import { createUserScore } from './firebase/userScores';
function App() {
  const [isClicked, setIsClicked] = useState(false); 
  const [isClickable, setIsClickable] = useState(false);
  const [clickCount, setClickCount] = useState(0)
  const [userName, setUserName] = useState('')
  const [isSendable, setIsSendable] = useState(false)
  const handleClick = () => {
    if (!isClickable) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 90); 
    setClickCount(prevCount => prevCount + 1)
  }

  const startClicking = () => {
    if (!userName) {
      alert("名前を入力してください")
      return
    }
    setIsClickable(true);
    setClickCount(0); 
    setTimeout(() => {
      setIsClickable(false);
      alert("時間切れ！")
      setIsSendable(true)
    }, 10000); 
  };

  
  return (
    <div>
      <Header />
      <div className='container mx-auto p-4 text-xl'>
        <div className='text-center'>クリックしてmanisyaをふろう!</div>
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-10'>
          <input type="text" className="border-2 text-sm rounded-lg block w-full p-2.5 border-gray-700 placeholder-gray-700" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="name" />
          </div>
          <div className='col-span-2'>
          <button className="bg-blue-700 transition-transform transform hover:scale-110 ease-out duration-300 text-white rounded-lg w-full h-full" onClick={startClicking}>
            start
          </button>
          </div>
        </div>

        <img src={manisya} className={`mx-auto mt-4 cursor-pointer ${isClicked ? 'animate-pop' : ''}`} alt='manisya' onClick={handleClick} />
        <div className='text-center'>{clickCount}</div>
        <div className='flex justify-center mt-4'>
        {isSendable ? 
          <button className='bg-blue-700 transition-transform transform hover:scale-110 ease-out duration-300 text-white rounded-lg w-16 h-10'>そうしん</button> : 
          <button className='bg-blue-700 transition-transform transform  ease-out duration-300 text-white rounded-lg w-16 h-10' disabled>そうしん</button>
          }
        </div>
        {userName} {clickCount}
        <button onClick={()=> createUserScore(userName, clickCount)}>hoge</button>
      </div>
    </div>
  );
}

export default App;
