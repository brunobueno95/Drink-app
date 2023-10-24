import { SignUp } from "@clerk/clerk-react";
import styles from "./page.module.css";
import BgSingUp from "../../assets/signup-bg.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SignUpCustom = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.signUpPg}>
        <FiArrowLeft
          className={styles.arrowBck}
          onClick={() => navigate("/")}
        />
        <img src={BgSingUp} alt="party" className={styles.imgBgSignUp} />
        <div className={styles.darkLayer} />
        <SignUp routing="path" path="/sign-up" afterSignInUrl={"/home"} />
      </div>
    </>
  );
};

export default SignUpCustom;
