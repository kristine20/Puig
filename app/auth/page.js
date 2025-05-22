"use client";

import { redirect } from "next/navigation";
import Login from "./login/page";

const Auth = () => {
  const goToAutPage = (pathName) => {
    redirect(`/auth/${pathName}`);
  };
  return (
    <>
      <Login />
      {/* <button onClick={() => goToAutPage("/login")} type="default" text="Login">
        Login
      </button> */}
    </>
  );
};
export default Auth;
