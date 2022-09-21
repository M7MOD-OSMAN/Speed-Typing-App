import { useState, useEffect, useRef } from 'react'

function useWordGame(startingTime = 10) {
  const [text, setText] = useState('')
  const [desiredTime, setDesiredTime] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(desiredTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter((word) => word !== '').length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(desiredTime)
    setText('')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  function handleDesiredTimeChange(e) {
    const { value } = e.target
    setDesiredTime(value)
  }

  function handleDesiredTime() {
    setTimeRemaining(desiredTime)
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {
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
  }
}

export default useWordGame
