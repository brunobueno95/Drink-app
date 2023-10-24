import styles from "./page.module.css"
import BG from "../../assets/bar1.jpg"
import DrinksCarousel from "../../components/drinkCarousel/DrinksCarousel"
import Hero from "../../components/hero/Hero"
import IconList from "../../components/iconList/IconList"
import NavBar from "../../components/navigation/NavBar"

const LandingPage = () => {
  return (
    <>
      <div className={styles.page}>
        <img src={BG} className={styles.bgImage} />
        
        <div className={styles.contentHighZIndex}>
         
          {" "}
          <NavBar/>
          <Hero title="Techno Drinks" btnText="Join us">
            Are you a passionate enthusiast of alcoholic beverages or someone
            who enjoys the art of mixology? Welcome to the most extensive and
            modern database of alcoholic drinks available. As a member, you'll
            gain exclusive access to a vast collection of drinks, along with
            valuable insights on how to make them, the required ingredients, and
            much more.
          </Hero>
          <IconList />
          <DrinksCarousel />
        </div>
      </div>
    </>
  )
}

export default LandingPage
