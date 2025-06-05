import axios from "axios";

export async function handleOAuthCallback(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send("Missing code");

  const cookies = parse(req.headers.cookie || "");
  const savedState = cookies.oauth_state;

  if (!code || !state || !savedState || state !== savedState) {
    console.error("Invalid or missing state");
    return res.status(400).send("Invalid state");
  }
  try {
    let user;

    if (provider === "yandex") {
      const tokenRes = await axios.post(
        "https://oauth.yandex.com/token",
        null,
        {
          params: {
            grant_type: "authorization_code",
            code,
            client_id: process.env.YANDEX_CLIENT_ID,
            client_secret: process.env.YANDEX_CLIENT_SECRET,
          },
        }
      );

      const access_token = tokenRes.data.access_token;
      const userRes = await axios.get("https://login.yandex.ru/info", {
        headers: { Authorization: `OAuth ${access_token}` },
      });

      user = userRes.data;
    } else if (provider === "vk") {
      const tokenRes = await axios.get("https://oauth.vk.com/access_token", {
        params: {
          client_id: process.env.VK_CLIENT_ID,
          client_secret: process.env.VK_CLIENT_SECRET,
          redirect_uri: process.env.VK_REDIRECT_URI,
          code,
        },
      });

      const { access_token, user_id, email } = tokenRes.data;

      const userRes = await axios.get("https://api.vk.com/method/users.get", {
        params: {
          access_token,
          v: "5.131",
          user_ids: user_id,
          fields: "photo_100",
        },
      });

      const vkUser = userRes.data.response[0];
      user = {
        id: vkUser.id,
        name: `${vkUser.first_name} ${vkUser.last_name}`,
        email,
        avatar: vkUser.photo_100,
      };
    }

    // 🔐 Optional: store user in session/cookie here

    // ✅ Redirect to home
    return res.redirect("/main");
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).send("OAuth failed");
  }
}
