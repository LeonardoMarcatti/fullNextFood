'use server'
// Dentro de funções devemos garantir que será rodada apenas no servidor pq os efeitos de um server component são sentidos no front end

import {redirect} from 'next/navigation'
import { saveMeal } from "./meals";
import { revalidatePath } from 'next/cache';

const validInput = (text) => text && text.trim() != ''

const handleSubmit = async (prevState ,formData) => {
      const meal = {
      title: formData.get('title'),
      instructions: formData.get('instructions'),
      summary: formData.get('summary'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      image: formData.get('image'),
   }

   if (validInput(meal.title) || validInput(meal.summary) || validInput(meal.instructions) || validInput(meal.creator) || validInput(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || !meal.image.size == 0) {

      return {
         message: 'Invalid input!'
    }
   }


   await saveMeal(meal)
   revalidatePath('/meals')
   // Quando voltamos a página meals o cache é eliminado e as refeições são buscadas no banco
   //

   redirect('/meals')
 }

 export {handleSubmit}