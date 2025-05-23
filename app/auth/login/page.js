"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import Image from "next/image";

import animationLogo from "../../assets/images/group.png";
import logo from "../../assets/images/logo.png";
import SocialsLogin from "./socialsLogin";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.authBg}>
      {/* Background video */}
      <video autoPlay muted loop playsInline className={styles.videoBg}>
        <source src="./login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className={styles.formWrapper}>
        <div className={styles.authheader}>
          <Image
            src={animationLogo}
            alt="PUIG Logo"
            className={styles.animationLogo}
          />
          <Image src={logo} alt="PUIG Logo" className={styles.logo} />
        </div>
        <div>
          {" "}
          <SocialsLogin />
        </div>
        <div className={styles.authheader}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signIn("credentials", { redirect: true, callbackUrl: "/" });
            }}
          >
            <label className={styles.label}>
              Ваш E-mail
              <input
                type="email"
                name="email"
                required
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                required
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.loginButton}>
              Войти
            </button>
          </form>
          <Link href="/auth/registration" className={styles.registerLink}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
