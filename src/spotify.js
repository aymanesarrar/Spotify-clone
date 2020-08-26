export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "832527e531ed4d4ab18dfd03c2256a0e";
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial,item) => {
    let parts = item.split('=');
    initial[parts[0]] =
    decodeURIComponent(parts[1]);

    return initial;
  }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
