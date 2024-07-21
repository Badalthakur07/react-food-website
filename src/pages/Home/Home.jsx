import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Food from '../../components/Food/Food'

import { useState } from 'react'
const Home = () => {
    const [category,setCategory] = useState('All')
  return (
    <div className='main-home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Food category={category} setCategory={setCategory}/> 
    </div>
  )
}

export default Home
