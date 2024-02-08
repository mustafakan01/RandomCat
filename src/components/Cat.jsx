import React, { useState } from 'react'

export default function Cat() {
    const [imgUrl, setImgUrl] = useState("");
    const callImg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
   

  return (
    <div className='container'>
        <div className='box'>
            <h2>Enjoy the kittie</h2>
            <img src="https://www.zaytung.com/fotos/yeni_baslayanlar_icin_kedi_3.jpg"/>
            <button onClick={()=> callImg()}>Click Me</button>
        </div>
    </div>
  )
}
