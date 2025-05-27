"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";
import Image from "next/image";
import animationLogo from "../../assets/images/group.png";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import { useState } from "react";

export default function Registration() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [network, setNetwork] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials-register", {
      redirect: false,
      name,
      email,
      password,
      password_confirmation: confirmPassword,
      network: "",
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/auth");
    } else {
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className={styles.authBg}>
      <video autoPlay muted loop playsInline className={styles.videoBg}>
        <source src="/auth.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          <form onSubmit={handleRegister}>
            <label className={styles.label}>
              Полное имя
              <input
                type="text"
                name="name"
                required
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className={styles.label}>
              Ваш E-mail
              <input
                type="email"
                name="email"
                required
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                required
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label className={styles.label}>
              Повторите пароль
              <input
                type="password"
                name="confirmPassword"
                required
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            {/* <label className={styles.label}>
              Парфюмерная сеть
              <select
                name="network"
                required
                className={styles.input}
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              >
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
            </label> */}

            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? "Регистрация..." : "Зарегистрироваться"}
            </button>
          </form>

          <Link href="/auth/login" className={styles.registerLink}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

// export default Registration;
