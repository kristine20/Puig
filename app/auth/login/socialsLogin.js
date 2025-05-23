"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import vk from "../../assets/images/vk.png";
import ok from "../../assets/images/ok.png";
import yandex from "../../assets/images/Yandex.png";
import Image from "next/image";

const SocialsLogin = () => {
  return (
    <div className={styles.socialButtons}>
      <button onClick={() => signIn("vk")} className={styles.socialButton}>
        <Image src={vk} alt="PUIG VK" className={styles.socialIcon} />
      </button>
      <button
        onClick={() => signIn("odnoklassniki")}
        className={styles.socialButton}
      >
        <Image src={ok} alt="PUIG OK" className={styles.socialIcon} />
      </button>
      <button onClick={() => signIn("yandex")} className={styles.socialButton}>
        <Image src={yandex} alt="PUIG yandex" className={styles.socialIcon} />
      </button>
    </div>
  );
};

export default SocialsLogin;
