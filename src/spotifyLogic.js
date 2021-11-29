const endpoint = "https://accounts.spotify.com/authorize";
const clientId = "d2c1d25cb8ea4923b3099d299fe82a53";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginURL = `${endpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;
