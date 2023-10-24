import { useState } from "react";
import styles from "./page.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const SmScreen = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [toggleOpenClose, setToggleOpenClose] = useState(false);
  return (
    <div>
      {!toggleOpenClose && (
        <GiHamburgerMenu
          className={styles.hambIcon}
          onClick={() => setToggleOpenClose(!toggleOpenClose)}
        />
      )}
      {toggleOpenClose && (
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
          <FaRegWindowClose
            className={styles.pLinks}
            onClick={() => setToggleOpenClose(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SmScreen;
