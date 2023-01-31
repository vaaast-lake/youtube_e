import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <li key={id} className='flex flex-col max-w-xs p-1'>
      <img src={thumbnails.high.url} alt={title} className=''/>
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

