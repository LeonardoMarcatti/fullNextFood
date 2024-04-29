'use client'

import { usePathname } from "next/navigation"
import styles from './navLinks.module.css'
import Link from "next/link"

const NavLinks = () => {
   const path = usePathname()
   {/* Pega a url da página atual */}
   return <nav className={styles.nav}>
      <ul>
         <li><Link href="/meals" className={path.startsWith('/meals') ? styles.active : ''}>Meals</Link></li>
         <li><Link href="/community" className={path.startsWith('/community')? styles.active : ''}>Foodies Community</Link></li>
      </ul>
   </nav>
}

export default NavLinks