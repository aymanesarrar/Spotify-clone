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
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
      default:
        return state;
  }
}
export default reducer;

