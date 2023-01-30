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
    <header id="container" className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <img src={YoutubeLogo} alt="youtube-logo" className='w-36 h-7' />
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input type="text" placeholder='Search...' value={text} onChange={handleChange} className='outline-none p-2 w-7/12 bg-black text-gray-50' />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}