// "use client";
// import { signIn } from "next-auth/react";
// import styles from "./login.module.css";
// import Image from "next/image";

// import animationLogo from "../../assets/images/group.png";
// import logo from "../../assets/images/logo.png";
// import SocialsLogin from "./socialsLogin";
// import Link from "next/link";

// const Login = () => {
//   return (
//     <div className={styles.authBg}>
//       {/* Background video */}
//       <video autoPlay muted loop playsInline className={styles.videoBg}>
//         <source src="./login.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       {/* Overlay */}
//       <div className={styles.formWrapper}>
//         <div className={styles.authheader}>
//           <Image
//             src={animationLogo}
//             alt="PUIG Logo"
//             className={styles.animationLogo}
//           />
//           <Image src={logo} alt="PUIG Logo" className={styles.logo} />
//         </div>
//         <div>
//           {" "}
//           <SocialsLogin />
//         </div>
//         <div className={styles.authheader}>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               signIn("credentials", { redirect: true, callbackUrl: "/" });
//             }}
//           >
//             <label className={styles.label}>
//               Ваш E-mail
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className={styles.input}
//               />
//             </label>
//             <label className={styles.label}>
//               Пароль
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 className={styles.input}
//               />
//             </label>
//             <button type="submit" className={styles.loginButton}>
//               Войти
//             </button>
//           </form>
//           <Link href="/auth/registration" className={styles.registerLink}>
//             Зарегистрироваться
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import animationLogo from "../../assets/images/group.png";
import logo from "../../assets/images/logo.png";
import SocialsLogin from "./socialsLogin";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// const Login = () => {
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const error = useSearchParams().get("error");

  // if (error === "OAuthAccountNotLinked") {
  //   // Show user message: "Account already exists with a different sign-in method"
  // }
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials-login", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/main");
    } else {
      alert("Ошибка входа");
    }
  };

  return (
    <div className={styles.authBg}>
      <video autoPlay muted loop playsInline className={styles.videoBg}>
        <source src="./auth.mov" type="video/mp4" />
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

        <div>
          <SocialsLogin />
        </div>

        <form onSubmit={handleLogin} className={styles.authheader}>
          <label className={styles.label}>
            Ваш E-mail
            <input
              type="email"
              name="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
  );
}

// export default Login;
