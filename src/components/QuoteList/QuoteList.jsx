import React from 'react'
import Quote from '../Quote/Quote'

const QuoteList = () => {
  const tabs = ["New quote", "Editor's Choice"]
  const quotes = [1,2,3,4,5,6,7]

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
          {quotes.map((obj, i)=>{
            return(
              <Quote key={i}/>
            )
          })}
        </div>
    </div>
  )
}

export default QuoteList