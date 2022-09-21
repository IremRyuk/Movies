import React, { useEffect, useState } from 'react'
import Data from '../storage/data.json'
import '../styles/News styles/news.css'
import Movies from './Movies'
export default function Home() {
  let[start,setStart] = useState(0)
  useEffect(()=>{
    // slideshow(carousel)
    let slideshow = setInterval(()=>{
if(start<pictures.length-1){
  setStart(start+1)
} else if(start === 3){
  setStart(start-3)
}
    },1500);
    return()=>clearInterval(slideshow)
  })
  // new movies sliders
  let newMoviesScrollRight = () =>{
let slider = document.getElementById('slider')
slider.scrollLeft  = slider.scrollLeft  + 150
  }
  let newMoviesScrolleft = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 150
  }
// slideshow(carousel) pictures
  let pictures = [  
    'https://geekvibesnation.com/wp-content/uploads/2021/03/2859.jpg',
    'https://i2.wp.com/cdn.flickeringmyth.com/wp-content/uploads/2022/07/samaritan-sylvester-stallone.jpg?resize=780,470',
    'https://m.media-amazon.com/images/M/MV5BYzQ0ODBlMjQtZTgxNy00MTI5LTk4MjUtMmNhZmNmYTZlOGJjXkEyXkFqcGdeQXVyMjg3NTU2Mzk@._V1_.jpg',
    'https://i0.wp.com/www.giantfreakinrobot.com/wp-content/uploads/2021/02/keanu-reeves-john-wick-900x506.jpg?resize=900%2C506&ssl=1',
  ]

  return (
    <div className='home'>
      {/* slideshow(carousel) */}
      <div className='home-carousel'>
        <img src={pictures[start]} alt='carousel' className='home-carousel-imgs' />
      </div>
      {/* new movies */}
      <center>
      <p className='home-header'>UpComing Movies</p>
        <div className='mainNewSlider'>
      <div>
        <button onClick={()=>newMoviesScrolleft()} className="slider-btn-left">Prev</button>
        </div>
      <div className='home-new-movies' id='slider'>
        <div className='home-new-movies-items'>
          <img src='https://geekvibesnation.com/wp-content/uploads/2021/03/2859.jpg'  className="home-new-movies-items-imges" />
          <p>Pinocchio</p>
        </div>
        <div className='home-new-movies-items'>
          <img src='https://i2.wp.com/cdn.flickeringmyth.com/wp-content/uploads/2022/07/samaritan-sylvester-stallone.jpg?resize=780,470' className="home-new-movies-items-imges" />
          <p>Samaritan</p>
        </div>
        <div className='home-new-movies-items'>
          <img src='https://i0.wp.com/www.giantfreakinrobot.com/wp-content/uploads/2021/02/keanu-reeves-john-wick-900x506.jpg?resize=900%2C506&ssl=1' className="home-new-movies-items-imges" />
          <p>john wick</p>
        </div>
        <div className='home-new-movies-items'>
          <img src="https://a.ltrbxd.com/resized/film-poster/4/1/5/8/4/1/415841-homebound-0-230-0-345-crop.jpg?v=36cfd37dc4" className="home-new-movies-items-imges" />
          <p>homebound</p>
        </div>
        <div className='home-new-movies-items'>
          <img src="https://m.media-amazon.com/images/M/MV5BNTEwYzk3Y2UtZDE5NS00YzQ2LWI3NzMtNGIzY2IwNmRmY2VjXkEyXkFqcGdeQXVyODQzMDMzMzE@._V1_FMjpg_UX1000_.jpg" className="home-new-movies-items-imges" />
          <p>This is Joan Collins</p>
        </div>
      </div>
      <div>
       <button onClick={()=>newMoviesScrollRight()} className="slider-btn-right">Next</button>
      </div>
      </div>
      </center>
      {/* all movies */}
      <center>
      <div className='movies-list'>
    {Data.map(res=><Movies main={res} key={res.id}/>)}
</div>
</center>
    </div>
  )
}
