import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const navigate = useNavigate();
  return (
    <li key={id}>
      <img 
        src={thumbnails.high.url}
        alt={title}
        onClick={() => navigate(`videos/watch/${id}`)}
        className='w-full hover:cursor-pointer'
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

