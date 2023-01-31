import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <li key={id}>
      <img src={thumbnails.high.url} alt={title} className='w-full'/>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

