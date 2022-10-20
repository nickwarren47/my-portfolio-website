import { Carousel } from 'flowbite-react'

function NickActivities() {


    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">NICK'S ACTIVITIES</h2>
            <div>
            <div className="flex items-center justify-center">
                    <div className="my-6 container flex justify-center">
                        <h3 className="text-center text-4xl font-bold font-mono w-10/12">My SCUBA Diving Adventures
                        <p className="text-2xl font-bold font-mono my-4"> When my wife and I met, she told me that she was an avid SCUBA diver and had all her own gear. I had never met someone (especially being in a land locked state) 
                        that would plan trips just to go SCUBA diving and would bring their own gear. Naturally, I was interested in the idea of being able to breath under water and to see the sea life in their own environment. So I decided to take 
                        take the plunge. We went to Montego Bay, Jamaica to get my Padi Open Water diver certification. It is a decision I have never regretted! The first time jumping into the water with all of my scuba gear on was at first extremely frightening but 
                        when I was on the sea floor and looked up to see the waves crashing above my head, I knew this was the sport for me. We have now dove in Jamaica, the Bahamas, California, and Australia. Additionally, we have snorkled in Israel, Hawaii, Mexico, and in the very cold water of Colorado. 
                        Below are photos of the wildlife we've seen and the places we've been on our adventures.
                        </p>
                        </h3>
                    </div>
                </div>
            <div className="h-96 w-4/12 container mx-auto rounded-2xl">
                <Carousel slideInterval={5000}>
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161729-68e3835e-9634-43ef-97a2-9f325516ed10.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193162247-791af73a-5187-439d-a1c7-bee9cebaa60d.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161731-0a783715-7f5f-4f12-b58f-2b6c2a0bc1d1.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161272-37e71dc8-568f-4277-a7c2-95fb086fb54d.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161274-a444114a-8c95-48f2-8a82-7a32388f623a.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161275-ed996267-0dde-4770-be6a-4f17bd8a025a.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193162023-4e912a26-7cb3-4ed9-b33f-9020b6ac2663.PNG"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161288-6930ca12-e604-483e-bdc5-b9b53e6013b2.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161292-598b133e-a3b7-4286-92fe-eee13a720c6e.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161295-ac2b2fb4-2430-4b98-9a70-d37b534d8392.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>
            </div>
            <div className="flex items-center justify-center">
                    <div className="my-6 container flex justify-center">
                        <h3 className="text-center text-4xl font-bold font-mono w-full">My Other Hobbies
                        <p className="text-2xl font-bold font-mono my-4"> Much to my wife's chagrin, I have many hobbies. To start, I am a die hard Rockhound. I have travelled to many different US states and countries in search of interesting
                        rocks and minerals. It is a hobbie that has been shared in my family for 3 generations. As my grandfather used to say, "We all have a bad case of the Rock Pox." In addition to rockhounding, I am also an avid photographer, woodworker,
                        welder, and mountain biker. Below are photos from my photography, woodworking, biking, and welding hobbies. Note: The images are all modals and you can click them to exapnd the images.
                        </p>
                        </h3>
                    </div>
                </div>
            </div>
 
        </div>
    )
}

export default NickActivities;

