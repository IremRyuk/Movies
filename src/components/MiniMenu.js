import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Mini Styles/mini.css'

export default function MiniMenu() {
    let onTop = () =>{
        window.scrollTo(0,0)
      }
  return (
    <div className='miniMenu'>
    <ul className='miniUl'>
        <li className='miniLi' onClick={()=>{onTop()}}><Link to='/'>Home</Link></li>
        <li className='miniLi' onClick={()=>{onTop()}}><Link to='/news'>News</Link></li>
        <li className='miniLi' onClick={()=>{onTop()}}><Link to='/contacts'>Contact Us</Link></li>
        <li className='miniLi' onClick={()=>{onTop()}}><Link to='/request'>Request</Link></li>
      </ul>
    </div>
  )
}
