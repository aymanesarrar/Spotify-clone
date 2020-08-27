import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Components/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // short term memory storage
  const [{ user, token }, dispatch] = useDataLayerValue();
  // run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if (_token) {
         dispatch({
           type: "SET_TOKEN",
           token: _token
         })
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
        })
        spotify.getPlaylist("32hJXySZtt9YvnwcYINGZ0").then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        })
      }
  }, [])
  return (
    <div className="app">
     { token ? <Player spotify={spotify}/> : (<Login />) }
    </div>
  );
}

export default App;
