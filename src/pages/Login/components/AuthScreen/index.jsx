import React from "react";
import styles from "./AuthScreen.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const AuthScreen = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles["formgroup__container"]}>
      <div className={styles["header__div"]}>
        <h1 className={styles["sign-h1"]}>Sign in</h1>
        <p className={styles["sign_to_ur_acc"]}>
          <strong>Sign in to your account</strong>
        </p>
      </div>

      <div className={styles["signin__with__buttons"]}>
        <button className={`${styles["siginin__google"]} ${styles["btn__primary"]}`} onClick={loginWithRedirect}>
          <FcGoogle />
          Sign in with Google
        </button>
        <button className={`${styles["siginin__apple"]} ${styles["btn__primary"]}`}>
          <FaApple />
          Sign in with Apple
        </button>
      </div>

      <div className={styles["form__wrapper"]}>
        <form action="#">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={styles["input__bar"]}
            autoComplete="false"
            placeholder="Email id"
            name="email"
            id="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={styles["input__bar"]}
            autoComplete="false"
            placeholder="Password"
            name="password"
            id="password"
            required
          />

          <a href="http://" target="_blank" className={styles["forgot__pass"]} rel="noopener noreferrer">
            Forgot password?
          </a>

          <button className={styles["signin__btn"]}>Sign In</button>
        </form>
      </div>
      <div className={styles["form_footer_div"]}>
        <p className={styles["form__footer"]}>Don't have an account?</p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Register here
        </a>
      </div>
    </div>
  );
};

export default AuthScreen;
