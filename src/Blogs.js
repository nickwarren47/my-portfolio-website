import scuba from './image/scubaPocket.jpg'
import dev from './image/dev.png'
import blog1 from './image/blog1.jpg'
import blog2 from './image/blog2.jpg'
import blog3 from './image/blog3.jpg'
import blog4 from './image/blog4.jpg'
import blog5 from './image/blog5.jpg'



function Blogs(){


    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">TECHNICAL BLOGS</h2>
                <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 pl-8 pr-8">
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={blog1} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Communicating with a JSON Server with GET, POST, DELETE, and PATCH Requests...It's Easier Than You Think</h5>
                        <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >My first Software Engineering technical article that details the usefulness of GET, POST, DELETE, and PATCH Requests when communicating with an internal/external API. The blog gives specific code on using the different CRUD functions when communicating with the server. </p>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/>Blog Link</p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={blog2} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">React Components - The Building Blocks of Software Success</h5>
                        <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >My next Software Engineering article on the exciting implementation of the React.JS component feature. React's ability to compartmentalize various JavaScript functions is a revolutionary feature that is continuously shaping the way applications are created. </p>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/>Blog Link</p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={blog3} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">SQL - Foundation of Databases</h5>
                        <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This blog details the use of SQL querying methods and their use with other software applications such as Active Record.</p>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/>Blog Link</p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={blog4} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Encryption, Authentication, and Authorization in Ruby on Rails</h5>
                        <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >This details the use of username/password encryption, authentication, and authorization in Ruby on Rails. The article shows code for setting up the authentication and authorization function in Rails. Additionally, the article describes the process of encryption using BCRYPT and Salting.</p>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/>Blog Link</p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 pb-28 ml-auto mr-auto h-5/6 w-8/12">
                        <div>
                            <img src={blog5} alt="" className="h-5/6 w-full rounded-lg"/>
                        </div>
                        <br/>
                        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Reflection on My Flatiron School Software Engineering Bootcamp</h5>
                        <p className="font-medium text-lg text-black mb-3 dark:text-gray-400 pb-4" >I wrote this blog to talk about my time at Flatiron School's Software Engineering bootcamp and the lessons I learned about coding and about myself. I wanted the article to be a resource for others who will be participating in a tech bootcamp.</p>
                        <h2 className="text-center text-xl font-bold"> Subjects: </h2>
                           <p className="text-center text-xl font-medium pb-4"> JSON | Routing | Server-Client Interaction | JavaScript</p>
                        <div className="flex items-center justify-center">
                            <div className="inline-flex my-5">
                                <p className="text-center text-xl font-bold font-mono"><img className="inline h-7 w-7 mr-2" src={dev} alt=""/>Blog Link</p> 
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