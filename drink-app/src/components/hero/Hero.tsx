import React from 'react'
import Neon from "../../assets/neon-2.png"
import styles from "./page.module.css"
 
interface Props{
    title:string;
    children:string;
    btnText:string;
}
const Hero = ({title, children, btnText}: Props) => {
  return (
    <div className={styles.heroSection}>
    <div className={styles.textBox}>
      <h1>{title}</h1>

      <p className={styles.pInContainer}>
        {" "}
    {children}
      </p>
      <button className={styles.btnJoin}>
       {btnText}
      </button>
    </div>

    <img src={Neon} className={styles.imgHero} />
  </div>
  )
}

export default Hero
