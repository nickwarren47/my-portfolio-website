// import React, {useState} from 'react'
import { Card } from 'flowbite-react'
import tailwind from './image/tailwind.jpg'

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
                    <div className="pt-6 pr-1 pl-6 pb-40 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-full">
                        <div>
                            <img src={tailwind} alt="" className="h-4/6 w-11/12 pl-1 rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Scuba Pocket Guide App</h5>
                        <p className="font-medium text-black mb-3 dark:text-gray-400" ></p>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default Projects;
