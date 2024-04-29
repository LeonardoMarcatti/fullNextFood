import React from "react";
import {useFormStatus} from 'react-dom'

const MealsSubmitButton = () => {
   const {pending} = useFormStatus()
   // Esse hook só funciona dentro da tag form e por isso criamos esse componente
   return <button type="submit" disabled={pending}>
      {
         pending ? 'Submiting...' : 'Share Meals'
      }
   </button>
}

export default MealsSubmitButton