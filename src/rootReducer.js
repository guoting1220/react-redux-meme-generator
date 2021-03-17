const INITIAL_STATE = {
  memes: JSON.parse(localStorage.getItem("memes")) || []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_MEME": {
      let newState = { ...state, memes: [...state.memes, { ...action.meme }] };
      localStorage.setItem("memes", JSON.stringify(newState.memes));
      return newState;
    }      

    case "DELETE_MEME": {
      let newState = {...state, memes: state.memes.filter(m => m.id !== action.id)};  
      localStorage.setItem("memes", JSON.stringify(newState.memes))
      return newState;
    };       

    default:
      return state;
  }
}


export default rootReducer;