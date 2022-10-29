import dev from './image/dev.png'
import blog1 from './image/blog1.jpg'
import blog2 from './image/blog2.jpg'
import blog3 from './image/blog3.jpg'
import blog4 from './image/blog4.jpg'
import blog5 from './image/blog5.jpg'
import blog6 from './image/blog6.jpg'
import blog7 from './image/blog7.png'
import { Link } from "react-router-dom";


function Blogs(){
    function Blog1() {
        window.open("https://dev.to/nickwarren47/communicating-with-a-json-server-with-get-post-delete-and-patch-requestsits-easier-than-you-think-3ca2");
     }
     function Blog2() {
        window.open("https://dev.to/nickwarren47/react-components-the-building-blocks-of-software-success-2ja5");
     }
     function Blog3() {
        window.open("https://dev.to/nickwarren47/sql-foundation-of-databases-2d39");
     }
     function Blog4() {
        window.open("https://dev.to/nickwarren47/encryption-authentication-and-authorization-in-ruby-on-rails-596a");
     }
     function Blog5() {
        window.open("https://dev.to/nickwarren47/react-weather-app-made-easy-1pfa");
     }
     function Blog6() {
        window.open("https://dev.to/nickwarren47/reflection-on-my-flatiron-school-software-engineering-bootcamp-20oa");
     }
     function Blog7() {
        window.open("https://dev.to/nickwarren47/7-tailwind-css-tips-i-wish-i-knew-earlier-2ple");
     }

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196836326-7bdc25c5-ff5a-451c-8710-2ead27475db7.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">TECHNICAL BLOGS</h2>
                <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 pl-8 pr-8">
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog4} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Encryption, Authentication, and Authorization in Ruby on Rails</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400" >This details the use of username/password encryption, authentication, and authorization in Ruby on Rails. The article shows code for setting up the authentication and authorization function in Rails. Additionally, the article describes the process of encryption using BCRYPT and Salting.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-1"> BCRYPT Encryption | Ruby User Authentication | Ruby User Authorization | Salting | Rainbow Tables</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4" onClick={Blog4}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog1} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Communicating with a JSON Server with GET, POST, DELETE, and PATCH Requests...It's Easier Than You Think</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400" >My first Software Engineering technical article that details the usefulness of GET, POST, DELETE, and PATCH Requests when communicating with an internal/external API. The blog gives specific code on using the different CRUD functions when communicating with the server. </p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog1}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog3} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">SQL - Foundation of Databases</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This blog details the use of SQL querying methods and their use with other software applications such as Active Record. The blog also goes into the history of the SQL databases. The blog lays the ground work for one of my next blogs that will discuss the 
                            use of Active Record and its ability to simplify SQL querying.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> SQL | Databases | SQL Querying | SQLite3</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog3}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog2} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">React Components - The Building Blocks of Software Success</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >My next Software Engineering article on the exciting implementation of the React.JS component feature. React's ability to compartmentalize various JavaScript functions is a revolutionary feature that is continuously shaping the way applications are created. </p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> React | Parent-Child Components | Props | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog2}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog5} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">React Weather App Made Easy!</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >In this blog, I discuss how I incorporated a weather app within my Scuba Pocket Guide app and how a developer can make their own React Weather app. I show how to get the API key, how to retrieve the data, and the code needed to 
                            display the data from the API. I also show how to create a location search feature using React useState.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> API Interface | React | Data Fetching with API Key | Tailwind CSS | Axios</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog5}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog6} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Reflection on My Flatiron School Software Engineering Bootcamp</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >I wrote this blog to talk about my time at Flatiron School's Software Engineering bootcamp and the lessons I learned about coding and about myself. I wanted the article to be a resource for others who will be participating in a tech bootcamp.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> Coding Advice | Bootcamp | Flatiron School</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog6}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-11/12">
                        <div>
                            <img src={blog7} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">7 Tailwind CSS Tips I Wish I Knew Earlier</h5>
                        <div className="p-4">
                            <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >When I was first learning how to use Tailwind CSS as my CSS UI kit in my apps, I faced a steep learning curve as Tailwind has many small details that will impact the way things will display. Additionally, Tailwind also uses many acronyms which can make deciphering it 
                            more difficult. To help others, I went through and listed my top 7 Tailwind CSS tips that greatly helped me to understand Tailwind faster. I got into details like how to apply colors, the meaning of the Tailwind acronyms, centering objects, and more.</p>
                        </div>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> Tailwind CSS | React | Tailwind Installation | Flowbite</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/><Link className="text-black hover:text-blue-700 transition duration-300 ease-in-out mb-4"  onClick={Blog7}>Blog Link</Link> </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Blogs;