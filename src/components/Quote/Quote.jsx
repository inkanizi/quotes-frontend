import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
  return (
    <div className='quote'>
        <div className='quote-rate'>
            <FontAwesomeIcon icon={faArrowUp}/>
            <div className='quote-rating'>
                <span>20</span>
            </div>
            <FontAwesomeIcon icon={faArrowDown}/>
        </div>
        <div className='quote-content'>
            <span className='quote-content-text'>Хорошее воспитание — это умение скрывать, как много мы думаем о себе и как мало о других.</span>
            <div className='quote-source'>
                <span>Марк Твен</span>
            </div>
            <div className='quote-tags'>
                <span>жизненные цитаты</span>
                <span>воспитание</span>
            </div>
        </div>
    </div>
  )
}

export default Quote