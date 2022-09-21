import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Selected Movie Styles/selected.css'
import Data from '../storage/data.json'

export default function SelectedMovie() {
  let {Id} = useParams()
  let Inside = Data.filter(res=>res.id === parseInt(Id))
  console.log(Inside)
  let SM = Inside[0]
  return (
    <div className='selMovMain'>
      <center>
    <div className='selMov'>
      <div className='selMovImgProp'>
      <img src={SM.img} className='selMovImg' />
      </div>
      <div className='selMovInfo'>
      <p className='selMovName'>Movie Name : {SM.name}</p>
      <p className='selMovRelDate'>Release Date : {SM.date}</p>
      <p className='selMovLang'>Language : {SM.language}</p>
      <p className='selMovTitle'>Title : {SM.title}</p>
      </div>
    </div>
    </center>
    <center>
    <div className='selMovTrailer'>
    <iframe src={SM.video} title="YouTube video player" className='YoutubeTrailer' style={{frameBorder:'0',}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
    </center>
    </div>
  )
}
