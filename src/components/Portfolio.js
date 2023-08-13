import React from 'react'
import hardRock from "../assets/images/6.jpg"
import restaurant from "../assets/images/5.jpg"
import meal from "../assets/images/4.jpg"
import weather from "../assets/images/1.png"
import cvCreator from "../assets/images/2.jpg"
import twitter from "../assets/images/twitter.jpg"
const Portfolio = () => {
    const projects = [
        {
            id :1,
            img : hardRock,
            github: "https://github.com/GeorgiosDev/Hard-Rock-Cafe",
            page:"https://animated-stardust-849bd6.netlify.app/"
        },
        {
            id:2,
            img:restaurant,
            github:"https://github.com/GeorgiosDev/Restaurant",
            page:"https://georgiosdev.github.io/Restaurant/"
        },
        {
            id:3,
            img:meal,
            github:"https://github.com/GeorgiosDev/Meal-app",
            page:"https://georgiosdev.github.io/Meal-app/"
        },
        {
            id:4,
            img:weather,
            github:"https://github.com/GeorgiosDev/Weather-App-Odin",
            page:"https://deverakis-weather-application.herokuapp.com/"
        },
        {
            id:5,
            img:cvCreator,
            github: "https://github.com/GeorgiosDev/CV-creator",
            page:"https://famous-cajeta-70037e.netlify.app/"
        },
        {
            id:6,
            img:twitter,
            github:"https://github.com/GeorgiosDev/twitter-clone",
            page:"https://tourmaline-platypus-bdf468.netlify.app/home"
        }
    ]


   return (
    <div name="Portfolio" id="portfolio-section" className='bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-full'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'> 
            <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6 '>Some of my projects !!!</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 lg:px-12'>
            {projects.map(({ id, img, github, page }) => {
                return (
                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                        <img src={img} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex flex-row items-center justify-center'>
                            <button className='w-full px-6 py-3 m-2 duration-200 hover:scale-105' onClick={() => window.open(page, '_blank')}>Demo</button>
                            <button className='w-full px-6 py-3 m-2 duration-200 hover:scale-105' onClick={() => window.open(github, '_blank')}>Code</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
</div>

    )
}

export default Portfolio
