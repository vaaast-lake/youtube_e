import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  console.log(description);

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe 
          src={`https://www.youtube.com/embed/${video.id}`}
          width="100%"
          height="640"
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}