import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/App.css'
import ThemeBut from './themeButton'
import Card from './card'
import logic from '../logic'

document
  .querySelector('body')
  .setAttribute('date-theme', localStorage.getItem('theme'))

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  document.querySelector('body').setAttribute('date-theme', theme)
  const [diff, setDiff] = useState(4)
  const [AL, setAL] = useState(logic.initApeList(diff))
  useEffect(() => {
    setAL(AL)
  }, [AL])

  return (
    <div>
      <div id="header">
        <div id="headLeft">
          <h1>Запомни их всех</h1>
          <div id="buttons">
            <div className="button" id="easy">
              Легко
            </div>
            <div className="button" id="medium">
              Средне
            </div>
            <div className="button" id="hard">
              Трудно
            </div>
            <div className="button" id="insane">
              Псих
            </div>
          </div>
        </div>
        <div id="sideCont">
          <div id="scoreCont">
            <div id="score"> Очки: 5</div>
            <div id="total"> Легко: 8</div>
          </div>
          <ThemeBut theme={theme} setTheme={setTheme} />
        </div>
      </div>
      <div id="cardField">{AL}</div>
    </div>
  )
}

export default App
