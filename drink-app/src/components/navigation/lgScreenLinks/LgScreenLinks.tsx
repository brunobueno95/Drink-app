import styles from "./page.module.css";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const LgScreenLinks = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <div className={styles.containerLinks}>
      <p className={styles.pLinks}>About</p>

      {!isSignedIn ? (
        <>
          <p className={styles.pLinks} onClick={() => navigate("/sign-up")}>
            Subscribe
          </p>
          <p className={styles.pLinks} onClick={() => navigate("/sign-in")}>
            Login
          </p>
        </>
      ) : (
        <p
          className={styles.pLinks}
          onClick={() => {
            signOut();
            console.log(isSignedIn);
          }}
        >
          Logout
        </p>
      )}
    </div>
  );
};

export default LgScreenLinks;
