import React, { useState } from 'react';
import YoutubeLogo from './yt_logo_rgb_dark.png';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(prev => e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText(prev => '');
  }
  return (
    <div id="container" className='flex p-3'>
      <form onSubmit={handleSubmit} className='flex'>
        <img src={YoutubeLogo} alt="youtube-logo" className='w-40 h-7' />
        <input type="text" placeholder='Search...' value={text} onChange={handleChange} className='outline-none ml-3 w-96' />
      </form>
    </div>
  );
}