import { SignIn } from "@clerk/clerk-react";
import styles from "./page.module.css";
import BgSingIn from "../../assets/signin-bg.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SignInCustom = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className={styles.signInPg}>
        <FiArrowLeft className={styles.arrowBck}  onClick={()=>navigate("/")} />
        <img src={BgSingIn} alt="party" className={styles.imgBgSignIn} />
        <div className={styles.darkLayer} />
        <SignIn routing="path" path="/sign-in" afterSignInUrl={"/home"} />
      </div>
    </>
  );
};

export default SignInCustom;
