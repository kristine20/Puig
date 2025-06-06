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
      callbackUrl: "/main", //`https://puigback.artean.ru/api/auth/callback/${provider}`,
      // redirect: true,
    });
  };

  // const handleYandexLogin = () => {
  //   const clientId = process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID;
  //   // const params = new URLSearchParams({
  //   //   response_type: "code",
  //   //   client_id: "e92bbdec11b34d64adfddf5f13dbe837",
  //   //   redirect_uri: "${window.location.origin}/api/auth/callback/yandex", //https://puigback.artean.ru/api/auth/callback/yandex
  //   // });
  //   // window.location.href = `https://oauth.yandex.com/authorize?${params.toString()}`;

  //   window.location.href = `https://oauth.yandex.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/api/auth/callback/yandex`;
  // };

  const handleVKLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_VK_CLIENT_ID;
    // const params = new URLSearchParams({
    //   client_id: "9ClHTeHzqxxx9pvXghK2",
    //   redirect_uri:
    //     "   redirect_uri: `${window.location.origin}/api/auth/callback/vk`,",
    //   response_type: "code",
    //   display: "page",
    //   scope: "email",
    // });
    // window.location.href = `https://oauth.vk.com/authorize?${params.toString()}`;
    window.location.href = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=http://puigback.artean.ru/api/auth/callback/vk&response_type=code&scope=email`;
  };
  return (
    <div className={styles.socialButtons}>
      <button
        //onClick={() => handleLogin("vk")}
        onClick={handleVKLogin}
        className={styles.socialButton}
      >
        <Image src={vk} alt="PUIG VK" className={styles.socialIcon} />
      </button>
      <button onClick={() => handleLogin("ok")} className={styles.socialButton}>
        <Image src={ok} alt="PUIG OK" className={styles.socialIcon} />
      </button>
      <button
        onClick={() => handleLogin("yandex")}
        //onClick={handleYandexLogin}
        className={styles.socialButton}
      >
        <Image src={yandex} alt="PUIG Yandex" className={styles.socialIcon} />
      </button>
    </div>
  );
};

export default SocialsLogin;
