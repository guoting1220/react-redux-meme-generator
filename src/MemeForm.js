import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './MemeForm.css';

const MemeForm = ({ addMeme }) => {
  const initial_formData = {
    url: "",
    topText: "",
    bottomText: ""
  }
  const [formData, setFormData] = useState(initial_formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeme({ ...formData, id: uuid() });
    setFormData(initial_formData);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <div className="MemeForm">
      <h1>Meme Generator</h1>
      <h3>Fill out the form to start creating memes!</h3>
      <form onSubmit={handleSubmit}>
        <div className="MemeForm-input">
          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="The URL for meme image"
          />
        </div>
        <div className="MemeForm-input">
          <label htmlFor="topText">Text On Top</label>
          <input
            type="text"
            id="topText"
            name="topText"
            value={formData.topText}
            placeholder="(Optional) The text at the top of the meme"
            onChange={handleChange}
          />
        </div>
        <div className="MemeForm-input">
          <label htmlFor="bottomText">Text On Botton</label>
          <input
            type="text"
            id="bottomText"
            name="bottomText"
            value={formData.bottomText}
            placeholder="(Optional) The text at the bottom of the meme"
            onChange={handleChange}
          />
        </div>
        <button id="submitBtn">Add Meme</button>
      </form>
    </div>
  )
}

export default MemeForm;