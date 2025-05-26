"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./login.module.css";

export default function LogoutButton() {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  return <div onClick={() => signOut({ callbackUrl: "/" })} className={styles.logout}>Logout</div>;
}
