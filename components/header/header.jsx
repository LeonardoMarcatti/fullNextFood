import Link from "next/link"
import Image from "next/image"
import logoImage from '@/assets/logo.png'
import styles from './header.module.css'
import HeaderBack from "./headerBack"
import NavLinks from "./navLinks"

const Header = () => {
   return <>
    <HeaderBack />
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        {/* <img src={logoImage.src} alt="" srcset="" /> */}
        <Image src={logoImage} alt="Food plate" title="Food plate" priority /> 
        {
          /** Melhor forma de inserir imagens
           *  priority desabilita o lazy loading que é padrão das imagens
          */
        }
        Next Level Food
      </Link>
      <NavLinks />
    </header>
   </>
}

export default Header