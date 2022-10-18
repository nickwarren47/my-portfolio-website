// import React, {useState} from 'react'
// import { Card } from 'flowbite-react'
// import tailwind from './image/tailwind.jpg'
import scuba from './image/scubaPocket.jpg'
import github from './image/github.png'
import heroku from './image/heroku.png'

function Projects(){

    // const[projects, setProjects] = useState("")

    // const searchResults = projects.filter(project => (
    //     diveLog.dive_site_name.toLowerCase().includes(search.toLowerCase()) ||
    //     diveLog.dive_site_country.toLowerCase().includes(search.toLowerCase())
    // )

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
                <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">PROJECTS</h2>
                <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 pl-8 pr-8">
                    <div className="pt-6 pr-1 pl-6 pb-40 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={scuba} alt="" className="h-5/6 w-11/12 pl-3 rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Scuba Pocket Guide App</h5>
                        <p className="font-medium text-black mb-3 dark:text-gray-400" >This app allows the user (diver) the ability to search various scuba dive sites (either by country or dive site name) in the Caribbean sea. When the diver finds the site, they can view info about 
                        dive site conditions and animals present at site. The animals each have their own card that has the name, species name, size, description, and warning if the animal/coral is dangerous. Addtionally, divers can search weather conditions at dive sites. Once divers sign in, they can 
                        add dive logs and customize their user profile.</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default Projects;
