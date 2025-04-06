import gyph1 from './assets/gyph_01.gif'
import gyph2 from './assets/gyph_02.gif'
import gyph3 from './assets/gyph_03.gif'
import gyph4 from './assets/gyph_04.gif'
import gyph5 from './assets/gyph_05.gif'
import gyph6 from './assets/gyph_06.gif'
import gyph7 from './assets/gyph_07.gif'
import gyph8 from './assets/gyph_08.gif'
import gyph9 from './assets/gyph_09.gif'
import gyph10 from './assets/gyph_10.gif'
import gyph11 from './assets/gyph_11.gif'
import gyph12 from './assets/gyph_12.gif'
import gyph13 from './assets/gyph_13.gif'
import gyph14 from './assets/gyph_14.gif'
import gyph15 from './assets/gyph_15.gif'
import gyph16 from './assets/gyph_16.gif'
import gyph17 from './assets/gyph_17.gif'
import gyph18 from './assets/gyph_18.gif'
import gyph19 from './assets/gyph_19.gif'
import gyph20 from './assets/gyph_20.gif'
import Card from './components/card'
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

function initApeList(diff) {
  let apeList = []
  for (let i = 0; i < diff; i++) {
    apeList.push(
      Card({
        gyph: gyphs[i],
        clickFunc: shuffleApeList,
        apeList,
        key: gyphs[i],
      })
    )
  }
  return apeList
}

// function keyGen() {
//   return `a${Math.random()}`
// }

function shuffleApeList(array) {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  console.log(array)
}

export default { initApeList, shuffleApeList }
