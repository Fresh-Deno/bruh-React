import React from 'react'
const Users = [
    { name: 'Yash', age: 17, id: 1 },
    { name: 'jyddd', age: 18, id: 2 },
    { name: 'bd', age: 17, id: 3 },
    { name: 'snsj', age: 18, id: 4 },
    { name: 'hsis', age: 17, id: 5 },
    { name: 'sji', age: 18, id: 6 },
]
const Card = () => {
    return (
        <div className='card'>
            <ol>
                <User name='Yash'/>
            </ol>
        </div>
    )
}

const User = (props) => {
    return <li>name: {props.name}</li>
}

export default Card;