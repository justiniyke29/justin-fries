import React from 'react'
import {} from '@mui/material'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import ProfilePics from './Profile.jpg'

const Header = () => {
  return (
    <header>
        <img src="https://t3.ftcdn.net/jpg/01/17/01/48/360_F_117014878_tBedOsCmOExeF4Zuq43nGPU0qpBMsxfb.jpg" 
        alt='imageLogo'
        className='logo' />
        <div className='inputBox'>
            <SearchRounded className='searchIcon'/>
            <input type="text" placeholder='Search' />
        </div>

        <div className='shoppingCart'>
            <ShoppingCartRounded className='cart' />
            <div className='cart_content'>
                <p>2</p>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='imgBox'>
                <img src={ProfilePics} alt='profile' className='profilePic' />
            </div>
            <h2 className='userName'>Anyanwu Justin</h2>
        </div>
        <div className= 'toggle'>
            <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header