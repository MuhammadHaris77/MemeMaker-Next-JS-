'use client'
import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation';

const page =  () => {
    //    console.log(searchParams.id,searchParams.url)

    const searchParams = useSearchParams(); // Hook to access search parameters
    const url = searchParams.get('url'); // Replace 'url' with your query parameter key
    const id = searchParams.get('id'); // Replace 'url' with your query parameter key

    React.useEffect(() => {
        if (url && id) {
          console.log(`URL Param: ${url}`);
          
          console.log(`URL Param: ${id}`);
          // Add your logic here
        }
      }, [url]);

    // const {url} = searchParams 

const text1= useRef()
const text2= useRef()
const [img,setImg]=  useState('')


const generateMemes= async (e)=>{
 e.preventDefault()
    console.log(text1.current.value,text2.current.value)


    
const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=MuhammadHaris2&password=qureshi12&text0=${text1.current?.value}&text1=${text2.current?.value}` , 
    {
    method: 'POST'
})
const response = await data.json()
console.log(response.data.url);
setImg(response.data.url)

}

    return (
        <div className=''>
            <Navbar btn="Home Paege" />
            <br />
            <div className="card lg:card-side bg-base-100  my-5 m-auto  w-[60%] shadow-xl">
                <figure style={{ width: "40%" , }}>
                    <img src={url}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <form action="" onSubmit={generateMemes} className='m-auto text-center m-2 '>
                        <input type="text" placeholder="Enter your Memes Text? " ref={text1} className="input input-bordered m-2 w-full max-w-xs" />
                        <input type="text" placeholder="Enter your Memes Text? " ref={text2} className="input input-bordered m-2 w-full max-w-xs" />
                        <br />
                        <button className="btn btn-neutral m-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Generate</button>

                    </form>
                </div>
            </div>



            <p></p>




<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
 { img ? <img src={img}
   alt="meme generated image" />  : <div className=' text-center'>
<span className="loading loading-spinner loading-lg"></span>
   </div> 

 }   <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    )



    
}

export default page