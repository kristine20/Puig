import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

const handler = NextAuth(authConfig
//   {
  
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth/login", // your login route
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user;
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//   },
// }
);

export { handler as GET, handler as POST };
