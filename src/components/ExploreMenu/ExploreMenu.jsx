import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    console.log(setCategory)
return (
  
<div className='exploremenu' id='explore-menu'>
<h1>Explore our menu</h1>
<p className='menu-text'>Choose from a diverse menu featuring a delete</p>
<div className='menu-list'>{menu_list.map((item,index)=>{
return(
<div onClick={()=>(prev=>prev=== item.menu_name?'All'
: item.menu_name)} key={index} className='item'>
<img className={category === item.menu_name ? 'active':''} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
</div>
)
 })}
</div>
<hr/> 
</div>
  )
}

export default ExploreMenu
