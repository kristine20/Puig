// pages/api/auth/callback/vk.ts
import { handleOAuthCallback } from "./oauthHandler";

export default async function handler(req, res) {
  return handleOAuthCallback(req, res, "vk");
}
