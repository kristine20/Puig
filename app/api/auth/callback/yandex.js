// pages/api/auth/callback/yandex.ts
import { handleOAuthCallback } from "./oauthHandler";

// export default async function handler(req, res) {
//   return handleOAuthCallback(req, res, "yandex");
// }

export default async function handler(req, res) {
  await handleOAuthCallback(req, res, "yandex");
}
