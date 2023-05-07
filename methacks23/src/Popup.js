import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import Logo from './logo.svg';
import './Popup.css';

export const Popup = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }

  const handleSubmit = () => {
    // Add the input value to the tags array
    setTags([...tags, inputValue]);

    // Clear the input value
    setInputValue('');
  }

  const handleReset = () => {
    // Clear the tags array and input value
    setTags([]);
    setInputValue('');
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div className='header'>
        <img src={Logo} alt="Logo"/>
        <h3>ZenSphere</h3>
      </div>
      
      <p1>Input keywords of the type of content you wish to filter.</p1>

      <h5>Keywords</h5>

      <div className='form'>
        {/* Text box */}
        
        <div className='input-container'>
          <input
            type='text'
            placeholder='Type here...'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='submit-button' onClick={handleSubmit}>Add tag</button>
        </div>

        {/* Tag list */}
        <div className='tag-list'>
          {tags.map(tag => (
            <div key={tag} className='tag'>{tag}</div>
          ))}
        </div>

        {/* Reset button */}
        <button className='reset-button' onClick={handleReset}>Clear Tags</button>
      </div>
      
      <h4>Image Filter</h4>
        <Toggle
          checked={isToggled}
          onChange={handleToggle}
          icons={false}
        />
        <h4>Text Filter</h4>
        <Toggle
          checked={isToggled}
          onChange={handleToggle}
          icons={false}
        />

    </div>
  )
}
