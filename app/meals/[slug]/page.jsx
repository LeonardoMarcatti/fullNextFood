import { getMeal } from '@/utils/meals'
import styles from './mealDetails.module.css'
import Image from "next/image"
import {notFound} from 'next/navigation'

const MealDetails = async ({params}) => {
   const meal = await getMeal(params.slug)
   if (!meal) {
      notFound()
   }
   meal.instructions =  meal.instructions.replace(/\n/g,'<br />')
   return <>
      <aside className={styles.header}>
         <div className={styles.image}>
            <Image src={meal.image} title={meal.title} alt={meal.title} fill />
         </div>
         <div className={styles.headerText}>
            <h1>{meal.title}</h1>
            <p className={styles.creator}></p> by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            <p className={styles.summary}>{meal.summary}</p>
         </div>
      </aside>
      <main>
         <p className={styles.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
      </main>
   </>
}

export default MealDetails