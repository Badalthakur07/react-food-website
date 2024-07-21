import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const Fooditem = ({id,name,price,description,image}) => {

const [itemcount, setItemCount] = useState(0);


  return (
<div className='food-item'>
 <div className='container'>
 <img className='img' src={image}/>
 {!itemcount
  ?<img className='add' onClick={()=>setItemCount(prev=> prev+1)} src={assets.add_icon_white}/>
  :<div className='food-item-counter'>
  <img onClick={()=>setItemCount(prev=> prev-1)} src={assets.remove_icon_red} alt='' />
  <p>{itemcount}</p>
  <img onClick={()=>setItemCount(prev=> prev++)} src={assets.remove_icon_green} />
  
  </div>
 }
</div>
<div className='info'>
<div className='rating'>
<p>{name}</p>
<img src={assets.rating_starts}></img> 
</div>
<p className='food-item-desc'>{description}</p>
<p className='food-item-price'>${price}.00</p>
</div>
</div>
)
}

export default Fooditem
