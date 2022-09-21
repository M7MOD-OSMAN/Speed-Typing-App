import React, { useState, useEffect, useRef } from 'react'
import useWordGame from './hooks/useWordGame'
import './styles.css'
function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
    desiredTime,
    handleDesiredTimeChange,
    handleDesiredTime,
  } = useWordGame()

  return (
    <div>
      <h1>
        The faster you type, the faster you communicate with others.
        <br /> How fast do you type?
      </h1>
      <p>Set the time</p>
      <input
        className='specify'
        type='number'
        value={desiredTime}
        onChange={handleDesiredTimeChange}
        placeholder='specify a number'
      />
      <button className='set-btn' onClick={handleDesiredTime}>
        SET
      </button>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
