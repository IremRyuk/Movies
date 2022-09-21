import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Movies/movies.css'

export default function Movies(props) {
    let main = props.main
  return (
    <div className='movie-item'>
        <p>Name:{main.name}</p>
      <img src={main.img} className="movie-item-imges" />
      <p style={{textTransform:'capitalize'}}>Year: {main.date} || Lan: {main.language}</p>
      <Link to={`/selected/${main.id}`}>Watch</Link>
    </div>
  )
}
