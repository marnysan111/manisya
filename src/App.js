import React, { useState } from 'react';
import manisya from './images/manisya.png'
import Header from './components/header';
function App() {
  const [isClicked, setIsClicked] = useState(false); 
  const [isClickable, setIsClickable] = useState(false);
  const [clickCount, setClickCount] = useState(0)
  const [userName, setUserName] = useState('')
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
    setTimeout(() => setIsClickable(false), 10000); 
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
        <div></div>
      </div>
    </div>
  );
}

export default App;
