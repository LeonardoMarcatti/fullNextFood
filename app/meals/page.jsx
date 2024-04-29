import Link from 'next/link'
import styles from './mealsPage.module.css'
import MealsGrid from '@/components/meals/mealsGrid'
import getMeals from '@/utils/meals'
import { Suspense } from 'react'

{
   /**
    * Usamos async aqui só para simular delay
    */
}

const AvailableMeals = async () => {
   const meals = await getMeals()
   return <MealsGrid meals={meals}/>
}

const Meals = () => {
   return <>
      <aside className={styles.aside}>
         <h1>Delicious food, created <span className={styles.highlight}>by you!</span></h1>
         <p>Choose your favorite meal and cook it yourself! It is easy and fun!</p>
         <p className={styles.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
         </p>
      </aside>
      <main className={styles.main}>
         <Suspense fallback={<h3 className={styles.loading}>Fetching meals...</h3>}>
            <AvailableMeals />
         </Suspense>
      </main>
   </>
}

export default Meals