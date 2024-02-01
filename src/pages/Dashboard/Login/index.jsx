import React from "react";
import styles from "./Login.module.css";
import AuthScreen from "./components/AuthScreen";
import "animate.css";
import Socials from './../../../components/Socials/index';


const AuthPage = () => {
  return (
    <div className={styles["signin__page__container"]}>
      <div className={styles["form__container"]}>
        <div className={`${styles["animate__animated animate__bounce animate__delay-1s"]} ${styles["text-main__div"]}`}>
          <span className={styles["text-main"]}>BASE</span>
        </div>
        <AuthScreen />
      </div>
      <Socials/>
    </div>
  );
};

export default AuthPage;
