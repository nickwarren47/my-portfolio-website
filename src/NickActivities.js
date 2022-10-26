import { Carousel } from 'flowbite-react'
import React, {useState} from "react"
import {Modal} from "flowbite-react";


function NickActivities() {
    const [pic, setPic] = useState("")
    const [alt, setAlt] = useState("")
    const [desc, setDesc] = useState("PLACEHOLDER")
    const [modal, setModal] = useState(false);

    function toggleModal(e){
        setPic(e)
        setModal(!modal)
    }


    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">MORE ABOUT NICK</h2>
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
            <div className="h-96 w-7/12 container mx-auto rounded-2xl">
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
                        src="https://user-images.githubusercontent.com/106715328/197255737-259010dd-2e97-47a9-a7bb-82bf0c3432af.jpg"
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
                        src="https://user-images.githubusercontent.com/106715328/197282561-33251fef-bc22-4d2b-a70e-b4bf3ffaab5e.JPG"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/197282563-9afc70a4-4a9d-4a38-a058-1c8b6addee99.JPG"
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
                    <div className='w-4/5'>
                        <p className="text-2xl font-bold font-mono my-4 text-center"> In addition to SCUBA diving, I am also a wildlife, landscape, and mineral photographer. I enjoy traveling to different locations to 
                        get the perfect photo. Below are some of my photos fro places such as Jamaica, Bahamas, Israel, Hawaii, Colorado, Arizona, and many more. My favorite photos are those when you get the timing perfectly. 
                        For example, the photo of the elk raming their horns together or the rain drop between the leaves. Please enjoy looking through them.
                        </p>
                        <p className="text-3xl font-bold font-mono my-16 text-center">Note: you can click the images to expand them and see their descriptions.</p>
                    </div>
            </div>
            
            <div className="flex items-center justify-center">
            <div className="grid grid-cols-5 gap-3 pl-24 pr-24 container mx-auto">
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Quail family in Arizona"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197260650-79a84962-cb45-4e84-bd8e-06a9e67bbcce.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Autumnal shower in Colorado"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197260651-19b8441c-f7bf-44f0-959c-fecde02c4058.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Elk in Estes Park, CO"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197260652-3b7e4fee-642c-46c1-a6c4-07d584707d9f.JPG" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Hiked to summit (14,272 ft) of Quandary Peak, CO"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197260653-eccecf0a-af96-4c02-8c68-eca082f5ac8a.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Mining for Amazonite and Quartz crystals in Lake George, Colorado"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308886-1acf6de2-52f1-49b1-b90f-b3ecd61bde4e.JPG" alt="mining" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Crazy Lace Agates after they were tumbled in my rock tumbler"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197292375-e5e43895-3c81-4e04-9f94-01f294ffd8e3.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Boat skimming across the Caribbean Sea in Nassau, Bahamas"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308339-a80b2de7-ef4f-433b-ae3d-b55e8e0a08b4.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Sunset over Ala Wai boat harbor in Honolulu, Hawaii"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197292387-135b9cd0-66aa-4701-bc86-fb27d5739cb5.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Delecate Arch in Arches National Park, Moab, Utah"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308751-c0f8b3a8-fe50-4951-942d-db8268d9112d.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Sunset on beach in Montego Bay, Jamaica"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197292578-9ab48bfc-6dc8-4fb6-9029-1580c03a4f43.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Overlooking Lake Dillon on a fall day in Colorado"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308299-c5911e97-d7e5-4fa7-b813-a2461ac136f3.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("A blue Mosque minaret overlooking the Medditeranean Sea in Tel Aviv, Israel"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308486-32916048-e063-47e5-be6a-b9799d76af1a.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Bruno Canyon Jasper mineral photo"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308513-d105fa6c-efe8-4fcd-b6e7-d5bf03eef864.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("A scenic view of the Aspen trees on Guenilla Pass, Colorado"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197308662-1a189bdf-6e96-4806-8623-24cca9479db6.jpg" alt="" className="h-11/12 w-11/12"/>
                </div>
                <div>
                    <img onClick={(e) => {toggleModal(e.target.src); setDesc("Lionfish showing me its frills"); setAlt(e.target.alt)}} src="https://user-images.githubusercontent.com/106715328/197309007-591406bf-06bd-4d8e-9597-ca9de69ac8cd.JPG" alt="" className="h-11/12 w-11/12"/>
                </div>
                <Modal
                    show={modal}
                    onClose={toggleModal}
                >
                    <Modal.Header>
                        {desc}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <img src={pic} alt={alt}/>
                        </div>
                    </Modal.Body>
                </Modal>
                </div>
            </div>
            <div className="h-10"></div>
            </div>
        </div>
    )
}

export default NickActivities;

