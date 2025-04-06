import { use, useState } from 'react'
import { useEffect } from 'react'
import '../styles/App.css'
import ThemeBut from './themeButton'
import Card from './card'
import Button from './buttons'
import gyph1 from '../assets/gyph_01.gif'
import gyph2 from '../assets/gyph_02.gif'
import gyph3 from '../assets/gyph_03.gif'
import gyph4 from '../assets/gyph_04.gif'
import gyph5 from '../assets/gyph_05.gif'
import gyph6 from '../assets/gyph_06.gif'
import gyph7 from '../assets/gyph_07.gif'
import gyph8 from '../assets/gyph_08.gif'
import gyph9 from '../assets/gyph_09.gif'
import gyph10 from '../assets/gyph_10.gif'
import gyph11 from '../assets/gyph_11.gif'
import gyph12 from '../assets/gyph_12.gif'
import gyph13 from '../assets/gyph_13.gif'
import gyph14 from '../assets/gyph_14.gif'
import gyph15 from '../assets/gyph_15.gif'
import gyph16 from '../assets/gyph_16.gif'
import gyph17 from '../assets/gyph_17.gif'
import gyph18 from '../assets/gyph_18.gif'
import gyph19 from '../assets/gyph_19.gif'
import gyph20 from '../assets/gyph_20.gif'
const gyphs = [
  gyph1,
  gyph2,
  gyph3,
  gyph4,
  gyph5,
  gyph6,
  gyph7,
  gyph8,
  gyph9,
  gyph10,
  gyph11,
  gyph12,
  gyph13,
  gyph14,
  gyph15,
  gyph16,
  gyph17,
  gyph18,
  gyph19,
  gyph20,
]

function inter(diff) {
  switch (diff) {
    case 'легко':
      return 8
    case 'средне':
      return 12
    case 'трудно':
      return 16
    case 'псих':
      return 20
    default:
      return 0
  }
}

function shuffleApeList(array) {
  let currentIndex = array.length
  let curArra = array
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function please() {
  const a = []
  for (let i = 0; i < 21; i++) {
    a.push(gyph2)
  }
  return a
}

const winArray = please()

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function App() {
  const [score, setScore] = useState(0)
  const [theme, setTheme] = useState(localStorage.getItem('dark'))
  document.querySelector('body').setAttribute('date-theme', theme)
  //
  const [diff, setDiff] = useState('легко')

  const [cards, setCards] = useState(shuffleApeList(initList(diff)))
  const [clicked, setClicked] = useState([])
  useEffect(() => {
    setCards(shuffleApeList(initList(diff)))
    setScore(0)
  }, [diff])
  const [win, setWin] = useState(false)

  useEffect(() => {
    if (score === inter(diff)) {
      setWin(true)
    }
  }, [score])

  const fun = (id) => {
    if (clicked.includes(id)) {
      setCards(shuffleApeList(initList(diff)))
      setScore(0)
      setClicked([])
      return
    }

    setScore(score + 1)
    setClicked([...clicked, id])
    setCards(shuffleApeList(cards))
  }
  function initList(diff) {
    const array = []
    for (let i = 0; i < inter(diff); i++) {
      array.push(gyphs[i])
    }
    return array
  }

  if (win) {
    return (
      <div>
        <div id="header2">
          <h1>Победа</h1>
        </div>
        <div id="cardField">
          {winArray.map((card) => (
            <Card gyph={card} key={card} fun={() => fun(card)} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div id="header">
        <div id="headLeft">
          <h1>Запомни их всех</h1>
          <div id="buttons">
            <Button value="легко" setDiff={setDiff} diff={diff} />
            <Button value="средне" setDiff={setDiff} diff={diff} />
            <Button value="трудно" setDiff={setDiff} diff={diff} />
            <Button value="псих" setDiff={setDiff} diff={diff} />
          </div>
        </div>
        <div id="sideCont">
          <div id="scoreCont">
            <div id="score"> Очки:{' ' + score}</div>
            <div id="total">
              {diff}:{' ' + inter(diff)}
            </div>
          </div>
          <ThemeBut theme={theme} setTheme={setTheme} />
        </div>
      </div>
      <div id="cardField">
        {cards.map((card) => (
          <Card gyph={card} key={card} fun={() => fun(card)} />
        ))}
      </div>
    </div>
  )
}

export default App
