import React, { useContext, useEffect } from 'react'
import { Hero } from '../components/Hero'

import OfferedServicesBar from '../components/OfferedServicesBar'

import { ExclusiveOffersBar } from '../components/ExclusiveOffersBar'

import FoodCard from '../components/FoodCard'
import { customerFeedbackData } from '../assets/customerFeedbackData'
import FeedbackCard from '../components/FeedbackCard'

import { FoodContext } from '../contexts/FoodContext'
import FoodsWeOfferBar from '../components/FoodsWeOfferBar'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
    const {products} =useContext(FoodContext)
    const navigate=useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div className=' w-full min-h-[100vh] mb-[10vh] '>

            <Hero />
            {
                /**offerd services section... */

            }
            <section className='w-full flex flex-col gap-5 mt-10 '>

                <OfferedServicesBar />

            </section>

            {
                /** Exclusive offers section... */

            }
            <section className='w-full flex flex-col gap-5 mt-28'>
                <h1 className='text-3xl  text-start'>Get excluisve discounts 💥</h1>
                <ExclusiveOffersBar />

            </section>

            {
                /**Offerd foods section... */

            }
            <section className='w-full flex flex-col gap-5 mt-28'>
                <h1 className='text-3xl  text-start '>Foods we offer</h1>
               <FoodsWeOfferBar/>

            </section>


            {
                /**Our best sellers products */

            }

            <section className='w-full flex flex-col gap-5 mt-28'>
                <h1 className='text-3xl  text-start '>New Dishes</h1>
                <div className='w-full flex  gap-5 flex-wrap'>
                    {
                        products.reverse().slice(0,Math.min(6,products?.length)).map((food) => <FoodCard food={food} />)
                    }


                </div>
            </section>


            {
                /**quality assurance section... */

            }
            <section className='w-full sm:flex  min-h-[300px]  gap-5 mt-28 items-center '>

                <div className='sm:w-1/2 w-full  flex items-center justify-center'>
<img className='max-h-[400px] ' src={'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868918.jpg?uid=R136542985&ga=GA1.1.1179909901.1721219002&semt=ais_hybrid'}/>
                </div>
                <div className='sm:w-1/2 w-full h-full   text-start'>
                    <h1 className='text-2xl font-semibold text-[var(--primary-color)]'>Quality</h1>
                    <h1 className='text-4xl font-semibold text-black my-3'>Exploring the reach flavor and diverse of the world</h1>
                    <p className='text-base'>At GoodFood, we bring you the rich and diverse flavors of the world, crafted with the freshest ingredients and authentic recipes. Whether it’s a classic Italian pizza or exotic global cuisines, every bite is a journey of taste and quality. Experience the joy of gourmet dining from the comfort of your home.</p>
                    <button onClick={()=>navigate('/menu')} className='px-4 py-2 rounded-full text-white bg-[var(--primary-color)] mt-6'>Explore</button>

                </div>

            </section>


            {
                /**what our customer says section... */

            }
            <section className='w-full flex flex-col gap-5 my-28  items-center '>

                <h1 className='text-3xl font-semibold  text-start '>What our customer says</h1>
                <div className='flex gap-5 flex-wrap'>
                    {

                        customerFeedbackData.map((feedback) => <FeedbackCard feedback={feedback} />)
                    }
                </div>

            </section>


        </div>
    )
}

export default Homepage