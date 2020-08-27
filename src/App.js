// 32hJXySZtt9YvnwcYINGZ0
import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Components/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // short term memory storage
  const [{ token }, dispatch] = useDataLayerValue();
  // run code based on a given condition
  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      console.log(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("32hJXySZtt9YvnwcYINGZ0").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
