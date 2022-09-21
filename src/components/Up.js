import React from 'react'
import '../styles/Mini Styles/mini.css'

export default function Up() {
    let up = () =>{window.scrollTo(0,0)}
  return (
    <div className='up' onClick={()=>up()}>
<i className="fa-solid fa-angles-up"/>
     </div>
  )
}
