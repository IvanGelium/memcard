import { useState } from 'react'

function Card({ gyph, clickFunc, apeList, key }) {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      className="card"
      onClick={() => {
        if (clicked) {
          return
        }
        clickFunc(apeList)
        setClicked(true)
      }}
      key={key}
    >
      <div className="load hide">
        <div className="rotator "></div>
      </div>
      <img className="gyph" src={gyph} alt="gyph_01" />
    </div>
  )
}

export default Card
