import React from 'react';
import MemeForm from './MemeForm';
import MemeList from './MemeList';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const memes = useSelector(store => store.memes);

  const dispatch = useDispatch();

  const addMeme = (memeData) => {
    dispatch({ type: "ADD_MEME", meme: memeData});
  }

  const deleteMeme = (id) => {
    dispatch({ type: "DELETE_MEME", id });
  }

  return (
    <div className="App">
      <MemeForm addMeme={addMeme}/>
      <MemeList memes={memes} deleteMeme={deleteMeme}/>
    </div>
  );
}

export default App;
