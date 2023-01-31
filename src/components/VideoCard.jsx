import React from 'react';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  console.log(thumbnails);
  return (
    <li key={id} className='flex flex-col max-w-xs p-1'>
      <img src={thumbnails.high.url} alt="thumnails" className=''/>
      <span>{title}</span>
      <span>{channelTitle}</span>
      <span>{publishedAt}</span>
    </li>
  );
}

