import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
// import GoogleProvider from "next-auth/providers/google";
import OAuthProvider from "next-auth/providers/oauth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    VKProvider(
      // id: "vk",
      // clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET,
      {
        id: "vk",
        name: "VK",
        type: "oauth",
        version: "2.0",
        authorization: "https://oauth.vk.com/authorize?response_type=code",
        token: "https://oauth.vk.com/access_token",
        clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET,
        scope: "email",
        userinfo:
          "https://api.vk.com/method/users.get?fields=photo_200&v=5.131",
        profile: async (_profile, tokens) => {
          const { access_token, email } = tokens;

          const res = await fetch(
            `https://api.vk.com/method/users.get?fields=photo_200&v=5.131&access_token=${access_token}`
          );
          const result = await res.json();
          const user = result.response?.[0];

          return {
            id: user.id.toString(),
            name: `${user.first_name} ${user.last_name}`,
            email: email || null,
            image: user.photo_200 || null,
          };
        },
      }
    ),
    YandexProvider({
      id: "yandex",
      clientId: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_YANDEX_CLIENT_SECRET,
    }),
    // OAuthProvider({
    //   id: "vkk",
    //   name: "vkk",
    //   version: "2.0",
    //   authorizationUrl: "https://oauth.vk.com/authorize?response_type=code",
    //   tokenUrl: "https://oauth.vk.com/access_token",
    //   clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET,
    //   scope: "email",
    //   profileUrl:
    //     "https://api.vk.com/method/users.get?fields=photo_200&v=5.131",
    //   async profile(profile, tokens) {
    //     const { access_token, email, user_id } = tokens;

    //     const res = await fetch(
    //       `https://api.vk.com/method/users.get?fields=photo_200&v=5.131&access_token=${access_token}`
    //     );
    //     const data = await res.json();

    //     const user = data.response?.[0];

    //     return {
    //       id: user.id.toString(),
    //       name: `${user.first_name} ${user.last_name}`,
    //       email: email || null,
    //       image: user.photo_200 || null,
    //     };
    //   },
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
    async yandex({ token, user }) {
      console.log(token, user, "yandex");
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
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
