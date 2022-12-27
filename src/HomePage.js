// import { Avatar } from 'flowbite-react';
import nick from './image/nick.jpg'
import scientist from './image/scientist.png'
import processor from './image/processor.png'
import oxygen from './image/oxygen.png'
import divider from './image/divider.png'
import email from './image/email.png'
import github from './image/github.png'
import linkedin from './image/linkedin.png'
import javascript from './image/javascript.png'
import react from './image/react.png'
import ruby from './image/ruby.png'
import rails from './image/rails.png'
import postgres from './image/postgres.png'
import sqlite from './image/sqlite.png'
import html from './image/html.png'
import css from './image/css.png'
import semantic from './image/semantic.png'
import tailwind from './image/tailwind.png'
import { Link } from "react-router-dom";
import blogLogo from './image/blogLogo.png'


function HomePage(){

    function GitHub() {
        window.open("https://github.com/nickwarren47?tab=repositories");
    }
    function Linkedin() {
        window.open("https://www.linkedin.com/in/nick-warren-co/");
    }
    function Blogs() {
        window.open("https://dev.to/nickwarren47");
    }

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <div className="flex items-center justify-center">
                <img src={nick} alt="" className="rounded-full my-7 sm:w-3/6 xsm:w-2/5 md:7/12 lg:w-5/12 xl:w-2/12 xl:"
                />
            </div>
                <h2 className="text-center text-5xl font-bold font-mono mb-4">NICK WARREN</h2>
                <div className="flex items-center justify-center">
                    <div className="sm:columns-1 xsm:columns-1 lg:flex inline-flex md:inline-flex md:m-3 sm:m-3">
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={processor} alt=""/>Software Engineer /</p> 
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={scientist} alt=""/>Scientist /</p>
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={oxygen} alt=""/>Scuba Diver</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="inline-flex my-7">
                        <p className="text-center text-3xl font-bold font-mono ml-12"><img className="inline h-9 w-9 mr-2" src={email} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={() => window.location = 'mailto:nickwarren47@gmail.com'}>Email</Link></p> 
                        <p className="text-center text-3xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={GitHub}>GitHub</Link></p>
                        <p className="text-center text-3xl font-bold font-mono ml-12 group"><img className="inline h-7 w-7 mr-2" src={linkedin} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={Linkedin}>LinkedIn</Link></p>
                        <p className="text-center text-3xl font-bold font-mono ml-12 group"><img className="inline h-7 w-7 mr-2" src={blogLogo} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={Blogs}>Blogs</Link></p>
                    </div>
                </div>
                <div className="flex content-center justify-center my-6 xsm:w-8/12 xsm:mx-auto sm:w-9/12 sm:mx-auto 2xl:w-7/12 2xl:mx-auto text-xl">
                        <h3 className="text-center text-3xl font-bold font-mono">About Me
                        <p className="text-2xl font-bold font-mono"> In 2016, I graduated from the University of Colorado with a Bachelors of Arts degree in Geology and a minor in Business Administration. While at CU, 
                        I wrote and defended my honors thesis in front of a panel of 4 professors. After successfuly defending my thesis, I graduated with Cum Laude honors. I then worked for the oil and gas industry for 5 years. While working as a Geological Technician, 
                        I was taught to use Python code to analyze and modify data. This started my Software Engineering journey as my interest in coding continued to grow. I decided to become formally educated in 
                        Fullstack Software Engineering in the Flatiron School bootcamp program. At Flatiron, I learned to code in JavaScript, React, Ruby, and Ruby on Rails. Additionally, I studied SQLite3, Postgresql, Sinatra, JSON, Tailwind CSS, Semantic UI, HTML, and CSS. After graduating
                        from the Flatiron School program, I am now creating various web applications such as the Scuba Pocket Guide and Wanderlust (please see the Projects tab to learn more).
                        </p>
                        </h3>
                </div>
                <div className="flex items-center justify-center">
                    <img src={divider} alt="" className="w-6/12 h-1/12 mr-4"/>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-center text-3xl font-bold font-mono mb-8">Software Languages and Frameworks</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="grid grid-cols-6 gap-4 pl-8 pr-8">
                        <img className="h-40 w-40 mr-10 rounded-2xl" src={javascript} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={react} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={ruby} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={rails} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={postgres} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={sqlite} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={tailwind} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={semantic} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={html} alt=""/>
                        <img className="h-40 w-40 rounded-2xl" src={css} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;