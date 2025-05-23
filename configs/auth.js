import vkProviders from "next-auth/providers/vk";
import CredentialsProvider from "next-auth/providers/credentials";
export const authConfig = {
  providers: [
    vkProviders({ clientId: "", clientSecret: "" }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your real backend call
        const res = await fetch("https://your-api.com/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user; // This will become the JWT payload
        }

        return null;
      },
    }),
  ],
};
