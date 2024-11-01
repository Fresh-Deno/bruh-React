import React from 'react'
import './personcard.css'

const PersonCard = ({ name, age, info }) => {
    return (
        <div className='card'>
            <span className='user'>
                <img src="https://picsum.photos/200
" alt="" />
                <h2>{name}</h2>

            </span>
            <span className='description'>
                <p id='age'>{age}</p>
                <p id='info'>{info}</p>
            </span>
        </div>
    )
}

export default PersonCard