import React from 'react'
import SideBar from './pages/SideBar'
import MainBoard from './components/MainBoard';

const App = () => {
  return (
    <div className="bg-[#1f1f1f]  flex ">
      <div className="inline-block ">
        <SideBar />
      </div>
        <MainBoard />
    </div>
  );
}

export default App