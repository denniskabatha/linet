import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [emojis, setEmojis] = useState([])
  const [showText, setShowText] = useState(false)
  const emojiList = ['😂', '❤️', '💕', '🎶', '😊', '😍', '🤩', '😽', '😽', '🐷', '🐷','😁','👆','🥰','🤤','']

  useEffect(() => {
    const createEmoji = () => {
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)]
      const left = Math.random() * 100
      const animationDuration = 3 + Math.random() * 4
      const id = Date.now()
      
      setEmojis(prev => [...prev, { id, emoji, left, animationDuration }])
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== id))
      }, animationDuration * 1000)
    }

    const interval = setInterval(createEmoji, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fireworks-container">
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`firework firework-${i}`} />
      ))}
      <div className="birthday-text">
        Happy<br />Birthday<br />Linet
      </div>
      {emojis.map(({ id, emoji, left, animationDuration }) => (
        <div
          key={id}
          className="floating-emoji"
          style={{
            left: `${left}vw`,
            animationDuration: `${animationDuration}s`
          }}
        >
          {emoji}
        </div>
      ))}
      <button 
        className="press-me-button"
        onClick={() => setShowText(!showText)}
      >
        Press Me
      </button>
      {showText && (
        <div className="lorem-text">
          This page belongs to a very special person👉👈🐷.She has been a warrior to all and we Wish her  as she turns 29😊. Happy birthday!!!🥳🥳🥳.....-edited-by-dennis-
        </div>
      )}
    </div>
  )
}

export default App