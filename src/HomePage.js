// import { Avatar } from 'flowbite-react';
import nick from './image/nick.jpg'
import scientist from './image/scientist.png'
import processor from './image/processor.png'
import oxygen from './image/oxygen.png'

function HomePage(){

    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <div className="flex items-center justify-center">
                <img src={nick} alt="" className="w-1/6 h-1/6 rounded-full my-5"
                />
            </div>
                <h2 className="text-center text-5xl font-bold font-mono mb-4">NICK WARREN</h2>
                <div className="inline-flex pl-80">
                    <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-10 w-10 mr-1" src={processor} alt=""/>Software Engineer /</p> 
                    <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-10 w-10 mr-1" src={scientist} alt=""/>Scientist /</p>
                    <p className="text-center text-4xl font-bold font-mono ml-2"><img className="inline h-10 w-10 mr-1" src={oxygen} alt=""/>Scuba Diver</p>
                </div>
            </div>

            
        </div>
    )
}

export default HomePage;