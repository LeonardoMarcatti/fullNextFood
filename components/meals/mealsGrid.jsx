import styles from './mealsGrid.module.css'
import MealItem from './mealItem'

const MealsGrid = ({meals}) => {
   return <ul className={styles.meals}>
      {
         meals.map(el => <li key={el.id}>
            <MealItem {...el} />
            </li> )
      }
   </ul>
}

export default MealsGrid