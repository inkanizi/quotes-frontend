import React from 'react'

const QuoteList = () => {
  const tabs = ["1late", "2late", "3late"]

  return (
    <div className='quotelist'>
        <h1>New Quotes</h1>
        <div className='quotelist-btn-category'>
          {tabs.map((elem, i)=>{
            return(
              <button key={i}>{elem}</button>
            )
          })}
        </div>
        <div className='quotelist-btn-line'></div>
        <div className='quotelist-content'>
          <h2 style={{"opacity": "0.3"}}>Тут будет список новых цитат</h2>
        </div>
    </div>
  )
}

export default QuoteList