import React from 'react';

const api = {
  key: '6ba3485b3b43951b512dee50005ecdfb',
  base: 'https://home.openweathermap.org/data/2.5',
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='search...' />
          Hel lo
        </div>
      </main>
    </div>
  );
}

export default App;
