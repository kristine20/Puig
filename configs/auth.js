import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
// import OdnoklassnikiProvider from "next-auth/providers/odnoklassniki";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    VKProvider({
      id: "vk",
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
    YandexProvider({
      id: "yandex",
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    }),
    // OdnoklassnikiProvider({
    //   clientId: process.env.OK_CLIENT_ID,
    //   clientSecret: process.env.OK_CLIENT_SECRET,
    // }),

    // 🔐 LOGIN
    CredentialsProvider({
      id: "credentials-login",
      name: "Login",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const res = await fetch("https://puigback.artean.ru/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) {
          console.error("Login failed:", res.status);
          return null;
        }

        const data = await res.json();

        if (data?.access_token) {
          return {
            id: data.access_token,
            accessToken: data.access_token,
          };
        }

        return null;
      },
    }),

    // 🆕 REGISTRATION
    CredentialsProvider({
      id: "credentials-register",
      name: "Register",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
        password_confirmation: { label: "confirm", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const res = await fetch("https://puigback.artean.ru/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              password_confirmation: credentials.password_confirmation,
            }),
          });

          if (!res.ok) {
            const data = await res.json();
            console.error("Registration failed:", data);
            return null;
          }

          const data = await res.json();

          return { ...data };
        } catch (err) {
          console.log(err, "errr");
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth", // use this for both login and register
  },

  callbacks: {
    async jwt({ token, user }) {
      console.log(token, "1");
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session, "session");
      // session.accessToken = token.accessToken;
      return session;
    },
  },

  debug: true,
};
