import React from 'react';
import Meme from './Meme';

const MemeList = ({ memes, deleteMeme }) => {
  return (
    memes.map(m =>
      <Meme
        key={m.id}
        id={m.id}
        url={m.url}
        topText={m.topText}
        bottomText={m.bottomText}
        deleteMeme={deleteMeme}
      />
    )
  )
}


export default MemeList;