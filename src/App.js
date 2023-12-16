import React, { useState, useEffect } from 'react';
import manisya from './images/manisya.png'
import Header from './components/header';
import { createUserScore, getUserScores } from './firebase/userScores';
import AlertComponent from './components/alert';
import UserScoreList from './components/userScoreList';
function App() {
  const [isClicked, setIsClicked] = useState(false); 
  const [isClickable, setIsClickable] = useState(false);
  const [clickCount, setClickCount] = useState(0)
  const [userName, setUserName] = useState('')
  const [isSendable, setIsSendable] = useState(false)
  const [message, setMessage] = useState('')
  const [userScores, setUserScores] = useState([])
  const [totalScore, setTotalScore] = useState(0)
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
  const getScore = () => {
    getUserScores(setUserScores, setTotalScore)
  }
  useEffect(() => {
    getScore()
  }, [])

  const clickCreateUserScore = () => {
    createUserScore(userName, clickCount, setMessage)
    getScore()
  }
  
  return (
    <div>
      <Header />
      <div className='container mx-auto p-4 text-xl'>
        <AlertComponent 
          message={message}
        />
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

        <img src={manisya} className={`mx-auto mt-4 cursor-pointer object-scale-down h-48 w-96 ${isClicked ? 'animate-pop' : ''}`} alt='manisya' onClick={handleClick} />
        <div className='text-center'>{clickCount}</div>
        <div className='flex justify-center mt-4'>
        {isSendable ? 
          <button className='bg-blue-700 transition-transform transform hover:scale-110 ease-out duration-300 text-white rounded-lg w-16 h-10' onClick={clickCreateUserScore}>そうしん</button> : 
          <button className='bg-blue-700 transition-transform transform  ease-out duration-300 text-white rounded-lg w-16 h-10' disabled>そうしん</button>
          }
        </div>
        
        <div className='grid grid-cols-12'>
          <div className='col-span-6'>
            ランキング
          <UserScoreList
            userScores={userScores}
          />
          </div>
          <div className='col-span-6'>
            いままでふられたかいすう
            <div className='text-center'>
              {totalScore} かい
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
