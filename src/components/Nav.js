import React, { useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import IremRyukImg from '../Img/IremRyuk.jpg'
import '../styles/Nav Styles/nav.css'

export default function Nav() {
    let[currentSize,setCurrentSize] = useState(window.innerWidth)
    let[btnChange,setBtnChange] = useState(true)
    let DisplayOff = useRef()
    useEffect(()=>{
      // resize on mini screens
        let time = setInterval(()=>{window.addEventListener('resize',()=>{
            setCurrentSize(window.innerWidth)
        })},100);
        return () => clearInterval(time)
    })
    let onOff = () =>{
        if(btnChange){
            DisplayOff.current.style.display = 'block'
        }else if(!btnChange){
            DisplayOff.current.style.display = 'none'
        }
        setBtnChange(!btnChange) 
    }
    let onTop = () =>{
      window.scrollTo(0,0)
    }
  return (
    <div className='nav' id='nav'>
        <div className='nav-photo'>
<Link to='/'><img src={IremRyukImg} alt='nav-foto' className='nav-photo-res' /></Link>
        </div>
      <ul className='nav-ul'>
        <li className='nav-li' onClick={()=>{onTop()}}><Link to='/news'>News</Link></li>
        <li className='nav-li' onClick={()=>{onTop()}}><Link to='/'>Home</Link></li>
        <li className='nav-li' onClick={()=>{onTop()}}><Link to='/contacts'>Contact Us</Link></li>
        <li className='nav-li' onClick={()=>{onTop()}}><Link to='/request'>Request</Link></li>
      </ul>
      <div onClick={()=>onOff()} className='btnSee'><i className={btnChange?'fa-solid fa-bars':"fa-solid fa-circle-xmark"}></i></div>
              {/* mini */}
              {currentSize<=800 && ( 
<div className='nav-mini' ref={DisplayOff}>
<ul className='nav-ul-mini'>
  <li className='nav-li-mini'><Link to='/'>Home</Link></li>
  <li className='nav-li-mini'><Link to='/news'>News</Link></li>
  <li className='nav-li-mini'><Link to='/contacts'>Contact Us</Link></li>
  <li className='nav-li-mini'><Link to='/request'>Request</Link></li>
</ul>
</div>
              )}
    </div>
  )
}
