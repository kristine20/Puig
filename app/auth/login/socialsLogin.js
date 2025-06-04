"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import vk from "../../assets/images/vk.png";
import ok from "../../assets/images/ok.png";
import yandex from "../../assets/images/Yandex.png";
import Image from "next/image";

// pages/api/auth/yandex/callback.ts
import axios from "axios";

async function handler(req, res) {
  const { code } = req.query;

  if (!code) return res.status(400).json({ error: "Missing code" });

  try {
    const tokenRes = await axios.post("https://oauth.yandex.com/token", null, {
      params: {
        grant_type: "authorization_code",
        code,
        client_id: process.env.YANDEX_CLIENT_ID,
        client_secret: process.env.YANDEX_CLIENT_SECRET,
      },
    });

    const { access_token } = tokenRes.data;

    const userRes = await axios.get("https://login.yandex.ru/info", {
      headers: {
        Authorization: `OAuth ${access_token}`,
      },
    });

    const user = userRes.data;

    // Handle login/registration here
    return res.status(200).json({ user });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Yandex auth failed", details: err.message });
  }
}

const SocialsLogin = () => {
  // const handleLogin = (provider) => {
  //   signIn(provider, {
  //     callbackUrl: `https://puigback.artean.ru/api/auth/callback/${provider}`,
  //     redirect: true,
  //   });
  // };

  const handleYandexLogin = () => {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: process.env.YANDEX_CLIENT_ID,
      redirect_uri: "https:/localhost:3000/",
    });
    window.location.href = `https://oauth.yandex.com/authorize?${params.toString()}`;
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
        // onClick={() => handleLogin("yandex")}
        onClick={handleYandexLogin}
        className={styles.socialButton}
      >
        <Image src={yandex} alt="PUIG Yandex" className={styles.socialIcon} />
      </button>
    </div>
  );
};

export default SocialsLogin;
