import styles from './mealsPage.module.css'

const LoadingSpinner = () => {
   return <h3 className={styles.loading}>Fetching meals...</h3>
}

export default LoadingSpinner