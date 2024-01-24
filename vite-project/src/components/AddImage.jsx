import React, { useState } from 'react'
import "./AddImage.css"

const AddImage = () => {

    const [addImage, setAddImage] = useState([])

    

  return (
    <div className='imageDiv'>
      <section className='boxImage'> <img src={addImage} alt="Image" /></section>

      <input type="file" onChange={(e)=> setAddImage(URL.createObjectURL(e.target.files[0]))}/>
    </div>
  )
}

export default AddImage
