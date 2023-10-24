import { SignedIn, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import styles from "./page.module.css";
import { useUser } from "@clerk/clerk-react";
import { Player } from "@lottiefiles/react-lottie-player";

const BackgroundAnimation = () => {
  return (
    <div
      style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_f1rpywm1.json"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

const Home = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <SignedIn>
      <div className={styles.pgHome}>
        <div className={styles.darkLayer} />
        <BackgroundAnimation />
        <h1 className={styles.title}>Protected route</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <div style={{ marginTop: "50px", zIndex: "9999" }}>
            {" "}
            {user?.hasImage && (
              <img
                src={user?.imageUrl}
                alt="userImage"
                className={styles.userImage}
              />
            )}
            <p className={styles.welcomePhrase}>Welcome {user?.fullName}</p>
            <button
              className={styles.btnLogOut}
              onClick={() => {
                signOut();
                navigate("/");
              }}
            >
              LOG OUT
            </button>
          </div>

          <div style={{ zIndex: "9999", marginTop: "100px" }}>
            {" "}
            <p>
              <span className={styles.authTxt}>
                Authentication/Authorization
              </span>
              <br /> Utilizing clerk, one of the most trusted and loved
              JavaScript libraries
            </p>
          </div>
        </div>
      </div>
    </SignedIn>
  );
};

export default Home;
