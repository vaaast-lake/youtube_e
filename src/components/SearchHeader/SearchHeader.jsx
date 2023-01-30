import React, { useEffect, useState } from 'react';
import YoutubeLogo from './yt_logo_rgb_dark.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleChange = (e) => {
    setText(prev => e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(() => setText((prev) => keyword || ''), [keyword]);

  return (
    <header id="container">
      <Link to='/'>
        <img src={YoutubeLogo} alt="youtube-logo" className='w-40 h-7' />
      </Link>
      <form onSubmit={handleSubmit} className='flex'>
        <input type="text" placeholder='Search...' value={text} onChange={handleChange} className='outline-none ml-3 w-96' />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}