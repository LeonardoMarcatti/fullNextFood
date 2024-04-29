// Não foi colocado a diretiva use client pois esse componente vai estar dentro de outro maior que sim, usa tal diretiva

import styles from './imagePicker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image'

const ImagePicker = ({label, name}) => {
   const [image, setImage] = useState(null)
   const imageRef = useRef()

   const handleButton = () => {
      imageRef.current.click()
   }

   const handleImage = (e) => {
      const file = e.target.files[0]

      if (!file) {
         setImage(null)
         return
      }

      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => setImage(fileReader.result)

   }

   return <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
         <div className={styles.preview}>
            {
               !image && <p>No image selected yet</p>
            }

            {
               image && <Image src={image} fill />
            }
         </div>
         <input type="file" name={name} id={name}  accept='image/png, image/jpeg, image/jpg' className={styles.input} ref={imageRef} onChange={handleImage} hidden/>
         <button type="button" className={styles.button} onClick={handleButton}>Pick Image</button>
      </div>
   </div>
}

export default ImagePicker