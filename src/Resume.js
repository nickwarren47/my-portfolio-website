import React from "react";
import PDF from "./Nick_Warren_Resume.pdf";

function Resume(){


    return(
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/196274688-9ed1ce2b-1c68-4998-a448-75553ca991ef.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <h2 className="text-center text-7xl font-bold font-mono mb-4 my-10">RESUME</h2>
                <embed
                    className="mr-auto ml-auto h-screen w-3/6"
                    src={PDF}
                    type="application/pdf"
                    // height={900}
                    // width={700}
                />
            <br/>
            </div>
        </div>
    )
}

export default Resume;