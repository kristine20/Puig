import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
// import GoogleProvider from "next-auth/providers/google";
// import OAuthProvider from "next-auth/providers/oauth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    VKProvider({
      id: "vk",
      clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET,
    }),
    YandexProvider({
      id: "yandex",
      clientId: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_YANDEX_CLIENT_SECRET,
    }),
    // OAuthProvider({
    //   id: "odnoklassniki",
    //   name: "Odnoklassniki",
    //   type: "oauth",
    //   version: "2.0",
    //   scope: "GET_EMAIL",
    //   params: { grant_type: "authorization_code" },
    //   accessTokenUrl: "https://api.ok.ru/oauth/token.do",
    //   requestTokenUrl: "https://connect.ok.ru/oauth/authorize",
    //   authorizationUrl:
    //     "https://connect.ok.ru/oauth/authorize?response_type=code",
    //   profileUrl: "https://api.ok.ru/fb.do",
    //   clientId: process.env.ODNOKLASSNIKI_CLIENT_ID,
    //   clientSecret: process.env.ODNOKLASSNIKI_CLIENT_SECRET,
    //   profile: async (profile, tokens) => {
    //     const access_token = tokens.access_token;
    //     const publicKey = process.env.ODNOKLASSNIKI_PUBLIC_KEY;
    //     const clientSecret = process.env.ODNOKLASSNIKI_CLIENT_SECRET;

    //     const sigSource = `application_key=${publicKey}method=users.getCurrentUser${crypto
    //       .createHash("md5")
    //       .update(`${access_token}${clientSecret}`)
    //       .digest("hex")}`;
    //     const sig = crypto.createHash("md5").update(sigSource).digest("hex");

    //     const { data } = await axios.get("https://api.ok.ru/fb.do", {
    //       params: {
    //         method: "users.getCurrentUser",
    //         access_token,
    //         application_key: publicKey,
    //         sig,
    //         format: "json",
    //       },
    //     });

    //     return {
    //       id: data.uid,
    //       name: `${data.first_name} ${data.last_name}`,
    //       email: data.email || null, // Email is only returned if permission granted
    //       image: data.pic_3 || null,
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
