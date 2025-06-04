"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import vk from "../../assets/images/vk.png";
import ok from "../../assets/images/ok.png";
import yandex from "../../assets/images/Yandex.png";
import Image from "next/image";

const SocialsLogin = () => {
  const handleLogin = (provider) => {
    signIn(provider, {
      callbackUrl: `https://puigback.artean.ru/auth/callback/${provider}`,
      redirect: true,
    });
  };

  return (
    <div className={styles.socialButtons}>
      <button onClick={() => handleLogin("vk")} className={styles.socialButton}>
        <Image src={vk} alt="PUIG VK" className={styles.socialIcon} />
      </button>
      <button
        // onClick={() => handleLogin("odnoklassniki")}
        className={styles.socialButton}
      >
        <Image src={ok} alt="PUIG OK" className={styles.socialIcon} />
      </button>
      <button
        onClick={() => handleLogin("yandex")}
        className={styles.socialButton}
      >
        <Image src={yandex} alt="PUIG Yandex" className={styles.socialIcon} />
      </button>
    </div>
  );
};

export default SocialsLogin;
