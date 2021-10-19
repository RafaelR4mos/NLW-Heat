import axios from "axios";
/**
 * Receive code(string)
 * Get github acess_token
 * Check if the user exists at DB
 * ---- YES = Generate a token
 * ---- NO  = Create at DB, a token
 * Return the token with user's info
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/acess_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }
    })

    return response.data;

  }
}

export { AuthenticateUserService }