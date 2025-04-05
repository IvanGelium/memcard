import { useState } from 'react'
import '../styles/App.css'
import ThemeBut from './themeButton'

document
  .querySelector('body')
  .setAttribute('date-theme', localStorage.getItem('theme'))

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  document.querySelector('body').setAttribute('date-theme', theme)

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
      <div id="cardField">
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
        <div className="card">
          <div className="load">
            <div className="rotator"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
