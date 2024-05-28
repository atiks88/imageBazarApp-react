import React from 'react'
import "material-icons"
import "../App.css"


export default function PageIgnating({totalPages,activePages,setPageNo}) {

  const prev = ()=>{
    setPageNo((prev)=> prev-1);
  }

  const next = ()=>{
    setPageNo(activePages+1);
  }
  

  return (
    <div className='Pagination'>
       <button className='material-icons' onClick={prev} disabled={activePages == 1}>chevron_left</button>
       <span className='materialNumber'>{activePages}/{totalPages}</span>
       <button className='material-icons' onClick={next} disabled={activePages == totalPages}>chevron_right</button>
    </div>
  )
}

