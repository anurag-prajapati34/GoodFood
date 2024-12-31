import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCartShopping, faMagnifyingGlass, faShop, faX } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext'
import '../styles/Navbar.css'
import ProfilePopup from './ProfilePoup'
const Navbar = () => {
  const [isProfilePopup, setIsProfilePopup] = useState(false);
  const { logedInUser, logOut } = useContext(FirebaseAuthContext);
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);
  return (
    <div className='w-full flex justify-between py-2 items-center sticky top-0 bg-white z-50'>
      {/* //logo */}
      <NavLink to='/' className='sm:text-4xl text-2xl font-bold text-[var(--primary-color)]'>GoodFood</NavLink>
      {/* //options */}
      <div className='flex gap-4 nav-otions'>

        <NavLink to={'/'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Home</NavLink>
        <NavLink to='/menu' className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Menu</NavLink>
      
        <NavLink to={'/about'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>About</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Contact us</NavLink>
        


      </div>
      {/* //actionicons */}
      <div className='text-lg flex gap-4 items-center '>
        {/* /search */}
        <FontAwesomeIcon onClick={() => setIsMenuBarVisible(true)} className='menu-sidebar-icon cursor-pointer' icon={faBars} />
        {/* /cart */}
        <NavLink to={'/cart'}>  <FontAwesomeIcon icon={faCartShopping} /></NavLink>
        {/* /login */}
        {/* <FontAwesomeIcon onClick={() => setIsProfilePopup(true)} icon={faUser} /> */}
        {
          logedInUser?<ProfilePopup/>:<NavLink to={'/login'} className='h-full px-4 border-2 rounded-xl border-[var(--primary-color)] text-black'>Sign in</NavLink>
        }
      </div>




{/***menu bar */}
      <div className={`fixed min-h-[100vh] top-0 right-0 h-full w-full flex ${isMenuBarVisible ? 'visible' : 'hidden'}`}>
        <div onClick={() => setIsMenuBarVisible(false)} className='flex flex-1 '>

        </div>
        <div className='flex flex-col w-[50vw] max-w-[400px] bg-[var(--primary-color)] py-4 items-start px-5'>
          <FontAwesomeIcon onClick={() => setIsMenuBarVisible(false)} className='cursor-pointer font-bold text-xl' icon={faX} />
          <div className='flex flex-col gap-4 mt-5'>

            <NavLink to={'/'} className='text-lg cursor-pointer '>Home</NavLink>
            <NavLink to='/menu' className='text-lg cursor-pointer '>Menu</NavLink>
            <NavLink to={'/orders'} className='text-lg cursor-pointer '>Orders</NavLink>
            <NavLink to={'/about'} className='text-lg cursor-pointer '>About</NavLink>
            <NavLink to='/contact' className='text-lg cursor-pointer '>Contact us</NavLink>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar