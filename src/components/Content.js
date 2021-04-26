import React from 'react'
import ImageOne from '../images/egg.jpeg';
import ImageTwo from '../images/egg-2.jpeg';

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img className="h-full rounded mb-20 shadow" src={ImageOne} alit="Egg One"></img>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, Delicious and nutritions</p>
          <span>$16</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img className="h-full rounded mb-20 shadow" src={ImageTwo} alit="Egg Two"></img>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, Delicious and nutritions</p>
          <span>$16</span>
        </div>
      </div>
    </>
  )
}

export default Content
