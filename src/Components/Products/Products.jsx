import React from 'react'

import './products.css'
const Products = ({id,name,price,discription}) => {
  return (
    <div className='container'>
        <img src="https://picsum.photos/1200/900" alt="" />
        <div className='content'>
            <h3>{name}</h3>
            <p>{discription}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, soluta deserunt quaerat eius autem labore atque ipsa dolorum nulla adipisci suscipit blanditiis voluptates doloremque, ut magni dignissimos laborum. Distinctio, magni?</p>
            <code>${price}</code>
        </div>

    </div>
  )
}

export default Products