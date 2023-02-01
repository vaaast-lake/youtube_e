import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li key={id} className={isList ? 'flex gap-1 m-2' : ''}>
      <img 
        src={thumbnails.high.url}
        alt={title}
        onClick={() => navigate(`/videos/watch/${id}`, { state: { video }})}
        className={isList ? 'w-60 mr-2' : 'w-full hover:cursor-pointer'}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

