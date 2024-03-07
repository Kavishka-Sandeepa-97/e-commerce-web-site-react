import React from 'react'
import './Popular.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item.jsx'
function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular_item'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.img} old_price={item.oldPrice} new_price={item.newPrice}/>
        })}
      </div>
    </div>
  )
}

export default Popular
