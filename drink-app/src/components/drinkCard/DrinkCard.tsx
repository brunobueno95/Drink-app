import styles from "./page.module.css"

interface Props{
    image:string
}

const DrinkCard = ({image}:Props) => {
  return (
    <div className={styles.drinkCard}>
      <div className={styles.blackLayer}/>
      <img src={image} alt={image} className={styles.img}/>
    </div>
  )
}

export default DrinkCard
