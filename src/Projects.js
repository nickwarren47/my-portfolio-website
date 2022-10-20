// import React, {useState} from 'react'
// import { Card } from 'flowbite-react'
// import tailwind from './image/tailwind.jpg'
import scuba from './image/scubaPocket.jpg'
import github from './image/github.png'
import heroku from './image/heroku.png'
import youtube from './image/youtube.png'
import wanderlust from './image/wanderlust.jpg'
import beer from './image/beer.png'
import destiny from './image/destiny.jpg'
import coders from './image/coders.png'



function Projects(){

    // const[projects, setProjects] = useState("")

    // const searchResults = projects.filter(project => (
    //     diveLog.dive_site_name.toLowerCase().includes(search.toLowerCase()) ||
    //     diveLog.dive_site_country.toLowerCase().includes(search.toLowerCase())
    // )

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196836326-7bdc25c5-ff5a-451c-8710-2ead27475db7.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
                <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">PROJECTS</h2>
                <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 pl-8 pr-8">
                    <div className="pb-32 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={scuba} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Scuba Pocket Guide App</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This app allows the user (diver) the ability to search various scuba dive sites (either by country or dive site name) in the Caribbean sea. When the diver finds the site, they can view info about 
                            dive site conditions and animals present at site. The animals each have their own card that has the name, species name, size, description, and warning if the animal/coral is dangerous. Addtionally, divers can search weather conditions at dive sites. Once divers sign in, they can 
                            add dive logs and customize their user profile. The user validations on the backend require the diver, when signing in, to provide tangible inputs and prevents from loading malicious data. Additionally, the backend also uses BCRYPT exncryption to secure passwords and user info.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Software Languages/Frameworks used: </h2>
                           <p className="text-center text-xl font-medium pb-4"> React | Ruby | Ruby on Rails | Tailwind CSS | JSON Routing | Internal & External API</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={youtube} alt=""/>Demo Link</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={wanderlust} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Wanderlust Travel App</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This app allows the user to view various countries and to leave comments for each travel destination. The </p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Software Languages/Frameworks used: </h2>
                           <p className="text-center text-xl font-medium pb-4"> React | Ruby | Ruby on Rails | Tailwind CSS | JSON Routing | Internal API</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={youtube} alt=""/>Demo Link</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={beer} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Home Brewer Recipe App</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This app allows the user to view and search for various beer brewing recipes. The app allows the user to search for beers based on "beer name, hops variety, yeast name, malt name, food pairing, ABV value, IBU value, and EBC value." 
                            Once the user finds the beer, they can click on the beer to view the beer recipe through a popup. Additionally, the user can save the beer to the "Favorites" page. The app is connected to an external API to retrieve the beer data. The app itself is developed using strictly Vanilla JavaScript, HTML, and CSS. With the CSS function of this app, I was also 
                            able to include a "hamburger" menu that consolidates the navbar menu when the screen is minimized.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Software Languages/Frameworks used: </h2>
                           <p className="text-center text-xl font-medium pb-4"> Vanilla JavaScript | HTML | CSS | JSON Routing | External API</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={youtube} alt=""/>Demo Link</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={coders} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Coder's Keys App</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This app allows the user </p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Software Languages/Frameworks used: </h2>
                           <p className="text-center text-xl font-medium pb-4"> React | Active Record | DB.json Database | Semantic UI | JSON Routing</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={youtube} alt=""/>Demo Link</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={destiny} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Star Wars - Forge Your Destiny App</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This app was made for avid Star wars fans. The app allows a user to select either the "Light Side" or "Dark Side" of the Force depending on their preference. From there, the app directs them to either Jedi ("light side") or Sith ("dark side").
                            While there, the user can view different prominent Jedi or Sith characters from the Star Wars franchise. They can also see the Jedi/Sith's name, whether they are Jedi or Sith, and their species. Users can also venture to other tabs that talk about the meaning of each lightsaber's color and the type of lightsabers. Finally, users can add a Jedi or a Sith character in the character form tab. Note: this app use a poly repo for the backend and frontend parts of the app (see GitHub links below) </p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Software Languages/Frameworks used: </h2>
                           <p className="text-center text-xl font-medium pb-4"> React | Ruby | Sinatra | Semantic UI | JSON Routing | Internal API</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={heroku} alt=""/>Heroku Link</p> 
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link (Frontend)</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={github} alt=""/>GitHub Link (Backend)</p>
                                <p className="text-center text-xl font-bold font-mono ml-12"><img className="inline h-7 w-7 mr-2" src={youtube} alt=""/>Demo Link</p>
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
