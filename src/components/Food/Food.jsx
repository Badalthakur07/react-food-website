import React, { useContext } from 'react'
import './Food.css'
import { StoreContext } from '../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'
const Food = ({category}) => {
  const {food_list} = useContext(StoreContext)

  return (
<div className='food-display'>
<h2>Top dishes near</h2>
<div className='food-display-list'>

{food_list.map((item,index)=>{
    return <Fooditem key={index} id={item.id} name={item.name} description ={item.description} price={item.price} image={item.image} />

})}
</div>
</div>
  )
}

export default Food
