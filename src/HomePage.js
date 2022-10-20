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
import rails from './image/rails.jpg'
import postgres from './image/postgres.png'
import sqlite from './image/sqlite.png'
import html from './image/html.png'
import css from './image/css.png'
import semantic from './image/semantic.jpg'
import tailwind from './image/tailwind.jpg'
import { Link } from "react-router-dom";

function HomePage(){

    function GitHub() {
        window.open("https://github.com/nickwarren47?tab=repositories");
     }

    function Linkedin() {
        window.open("https://www.linkedin.com/in/nick-warren-co/");
    }

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <div className="flex items-center justify-center">
                <img src={nick} alt="" className="w-1/6 h-1/6 rounded-full my-7"
                />
            </div>
                <h2 className="text-center text-5xl font-bold font-mono mb-4">NICK WARREN</h2>
                <div className="flex items-center justify-center">
                    <div className="inline-flex">
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={processor} alt=""/>Software Engineer /</p> 
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={scientist} alt=""/>Scientist /</p>
                        <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-9 w-9 mr-2" src={oxygen} alt=""/>Scuba Diver</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="inline-flex my-7">
                        <p className="text-center text-3xl font-bold font-mono ml-12"><img className="inline h-9 w-9 mr-2" src={email} alt=""/>Email</p> 
                        <p className="text-center text-3xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={GitHub}>GitHub</Link></p>
                        <p className="text-center text-3xl font-bold font-mono ml-12 group"><img className="inline h-7 w-7 mr-2" src={linkedin} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={Linkedin}>LinkedIn</Link></p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="my-6 container flex justify-center">
                        <h3 className="text-center text-3xl font-bold font-mono w-10/12">About Me
                        <p className="text-2xl font-bold font-mono "> In 2016, I graduated from the University of Colorado with a Bachelors of Arts degree in Geology and a minor in Business Administration. While at CU, 
                        I wrote and defended my honors thesis infront of a panel of 4 professors. After successfuly defending my thesis, I graduated with Cum Laude honors. I then worked for the oil and gas industry for 5 years. At my Geological Technician position at 
                        Fracture ID inc., I was taught to use Python code to analyze and modify data. This started my Software Engineering journey as I began to grow an interest in coding. As I started to enjoy coding more and more, I decided to become formaly educated in 
                        Fullstack Software Engineering in the Flatiron School bootcamp program. At Flatiron, I learned to code in JavaScript, React, Ruby, and Ruby on Rails. Additionally, I studied SQLite3, Postgresql, Sinatra, JSON, Tailwind CSS, Semantic UI, HTML, and CSS. After graduating
                        from the Flatiron School program, I am now creating various web applications such as the Scuba Pocket Guide and Wanderlust (please see the Projects tab to learn more).
                        </p>
                        </h3>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={divider} alt="" className="w-6/12 h-1/12 mr-4"/>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-center text-3xl font-bold font-mono mb-8">Software Languages and Frameworks</h2>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-6 gap-4 pl-8 pr-8">
                        <p className="text-center text-2xl font-bold font-mono ml-10"><img className="h-20 w-20 mr-10" src={javascript} alt=""/>JavaScript</p> 
                        <p className="text-center text-2xl font-bold font-mono ml-14 mr-14"><img className="h-20 w-20" src={react} alt=""/>React</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={ruby} alt=""/>Ruby</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={rails} alt=""/>Rails</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={postgres} alt=""/>Postgresql</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={sqlite} alt=""/>SQLite3</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={tailwind} alt=""/>Tailwind CSS</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={semantic} alt=""/>Semantic UI</p>
                        <p className="text-center text-2xl font-bold font-mono ml-14"><img className="h-20 w-20" src={html} alt=""/>HTML</p>
                        <p className="text-center text-2xl font-bold font-mono ml-6"><img className="h-20 w-20" src={css} alt=""/>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;