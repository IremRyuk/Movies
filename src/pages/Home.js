import React, { useState } from 'react'
import Data from '../storage/data.json'
import Movies from './Movies'
import '../styles/Home Styles/home.css'

export default function Category() {
  let [search,setSearch] = useState('')
  let [dataList,setDataList] = useState(Data)
  let [change,setChange] = useState(true)
  let filterMovies = (categories) => {
let filters = Data.filter((res)=>{
  return res.category === categories
})
setDataList(filters)
  }
  return (
    <div className='category'>
      <center><div className='cat-search'>
        <input type='text' className='cat-search-input' placeholder='movie...' onChange={(e)=>setSearch(e.target.value)} />
      </div></center>
      <center>
      <div className='cat-list'>
        <button onClick={()=>{setDataList(Data)}}>All</button>
        <button onClick={()=>filterMovies('fantasy')}>Fantasy</button>
        <button onClick={()=>filterMovies('anime')}>Anime</button>
        <button onClick={()=>filterMovies('horror')}>Horror</button>
        <button onClick={()=>filterMovies('documentary')}>Documentary</button>
        <button onClick={()=>filterMovies('action')}>Action</button>
      </div>
      </center>
      <div className='cat-movies'>
        {dataList.filter((re)=>{
          if(search===''){
            return re
          }
          else if(re.name.toLowerCase().includes(search.toLowerCase())){
            return search
          }
        }).map(res=>
          <Movies key={res.id} main={res} turth={change}/>
        )}
      </div>
    </div>
  )
}
