import React from 'react';
import './Meme.css';

const Meme = ({ id, url, topText, bottomText, deleteMeme}) => {
  return (
    <div className="Meme">
      <span className="topText">{topText}</span>
      <img src={url} alt="meme"/>
      <span className="bottomText">{bottomText}</span>
      <button onClick={() => deleteMeme(id)}>Delete</button>
    </div>
  )
}

export default Meme;