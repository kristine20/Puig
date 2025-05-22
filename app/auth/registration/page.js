"use client";
import { signIn } from "next-auth/react";
import styles from "./register.module.css";
import Image from "next/image";

import animationLogo from "../../assets/images/group.png";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Registration = () => {
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
            <label className={styles.label}>
              Парфюмерная сеть
              <select name="" required="" className={styles.input}>
                <option value="">Выберите сеть...</option>
                <option value="artikli">Артиколи</option>
                <option value="vizazh">Визаж</option>
                <option value="zolotoe-yabloko">Золотое яблоко</option>
                <option value="il-de-bote-sefora">Иль де Ботэ (Сефора)</option>
                <option value="l-etual">Л'Этуаль</option>
                <option value="riv-gosh">Рив Гош</option>
                <option value="cum">ЦУМ</option>
                <option value="puig">PUIG</option>
                <option value="sng">СНГ</option>
              </select>
            </label>
            <button type="submit" className={styles.loginButton}>
              Зарегистрироваться
            </button>
          </form>
          <Link href="/auth/login" className={styles.registerLink}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
