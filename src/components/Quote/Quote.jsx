import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
  return (
    <div className='quote'>
        <div className='quote-content'>
            <span className='quote-content-text'>Хорошее воспитание — это умение скрывать, как много мы думаем о себе и как мало о других.</span>
            <div className='quote-source'>
                <span>Марк Твен</span>
            </div>
            <div className='quote-actions'>
                <div className='quote-tags'>
                    <span>жизненные цитаты</span>
                    <span>воспитание</span>
                </div>
                <FontAwesomeIcon icon={faHeart} size={"2x"} color={"#2f3bdf"}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

export default Quote