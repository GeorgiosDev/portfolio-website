import React from 'react';
import { Link } from 'react-scroll';
import hero from '../assets/images/hero.jpg';
import arrow from '../assets/images/arrow.png';

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b  from-black to-gray-700" id="home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl sm:text-7xl font-semibold text-white">Welcome to my Website</h2>
          <p className="text-gray-100 py-4 max-w-md text-2xl font-medium">
            My name is Georgios Deverakis.I am from Greece and i am a certified Front-End Developer with 3+ years of experience. Take a look at my website. 
          </p>
          <div>
            <Link
              to="portfolio-section" 
              smooth={true} 
              offset={-70} 
              duration={500} 
            >
              <button 
                className="group text-white w-fit px-6 py-3 my-2 
                flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <img src={arrow} alt="down-arrow" className="w-6 h-6 ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={hero} alt="my profile pic" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

