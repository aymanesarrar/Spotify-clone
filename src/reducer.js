export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null
};

//action manipulate what the Data layer looks like
//state is how it is currently look
const reducer = (state, action) => {
  //action => type, [payload]
    console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state, // => keep whatever is in the current state
        user: action.user // => update the user whatever action.user was
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
      case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
      case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

      case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      default:
        return state;
  }
}
export default reducer;

