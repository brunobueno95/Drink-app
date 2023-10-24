import { useEffect, useState } from "react"
import LgScreenLinks from "./lgScreenLinks/LgScreenLinks"
import Logo from "./logo/Logo"
import styles from "./page.module.css"
import SmScreen from "./smScreenLinks/SmScreen"

const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      handleResize(); // Set initial window width
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className={styles.navBarContainer}>
      <Logo/>
      <LgScreenLinks/>
      { windowWidth < 720 && <SmScreen/>}
    </div>
  )
}

export default NavBar
