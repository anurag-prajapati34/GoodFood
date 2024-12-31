import React, { useContext, useEffect } from 'react'
import foodImage from '../assets/images/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faList } from '@fortawesome/free-solid-svg-icons'
import FoodCategoryBar from '../components/FoodCategoryBar'

import FoodCard from '../components/FoodCard'
import { FoodContext } from '../contexts/FoodContext'
const Menupage = () => {
  const {foodFilteredCategory} =useContext(FoodContext)
  const {products}=useContext(FoodContext)
  console.log("products:",products);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='w-full mb-[50vh]'>
      {/**menu page header banner. */}
      <div className='sm:h-[250px] h-[200px] rounded-xl text-center flex  items-center justify-center bg-[var(--secondary-color)] py-6 px-2 sm:gap-4 gap-1'>
        <div className='w-[70%] h-full flex flex-col justify-end items-start  md:gap-4 gap-2 text-start'>
          <h1 className='sm:text-4xl text-3xl font-bold text-[var(--primary-color)] '>#Menu</h1>
          <p className='md:text-base text-sm hide-on-sm'>From irresistible appetizers to mouthwatering mains and delightful desserts, our menu is curated to satisfy every craving. Indulge in a world of flavors, where every dish is made with love, passion, and the finest ingredients. Whether you're dining solo or with loved ones, there's something for everyone to savor. </p>
          <div className='md:flex gap-2 items-start '>
            <div className='text-black sm:text-base text-xs sm:px-4 px-1 md:mb-0 mb-1 py-2 border bg-white rounded-lg shadow-lg flex gap-1 items-center justify-center'>
              <FontAwesomeIcon className='text-green-600' icon={faBowlFood} />
              Get tasty foods
            </div>
            <div className='text-black sm:text-base text-xs sm:px-4 md:mb-0 mb-1 py-2 border bg-white rounded-lg shadow-lg flex gap-1 items-center justify-center px-1'>
              <FontAwesomeIcon className='text-green-600' icon={faList} />
              Browse over large menu
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${foodImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[30%] h-full rounded-xl'>



        </div>
      </div>
      {/*page body */}

      {/**filter bar  */}
      <section className='mt-10 w-full'>
        <FoodCategoryBar />
      </section>
      {
        /**foods dispaly section */

      }

      <section className='w-full flex flex-col gap-5 mt-10'>
        <h1 className='text-3xl  text-start '>{foodFilteredCategory} </h1>
        <div className='w-full flex  gap-5 flex-wrap'>
          {
            products.map((food) => 
            
            {
              if(food?.category==foodFilteredCategory){
                return <FoodCard food={food} />
              }
              else if(foodFilteredCategory=='All'){
                return <FoodCard food={food}/>
              }
            })
          }


        </div>
      </section>

    </div>
  )
}

export default Menupage