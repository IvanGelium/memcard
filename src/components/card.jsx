import { useState } from 'react'

function Card({ gyph, fun }) {
  return (
    <div className="card" onClick={fun} id={gyph}>
      <div className="load hide">
        <div className="rotator "></div>
      </div>
      <img className="gyph" src={gyph} alt=" " />
    </div>
  )
}

export default Card
