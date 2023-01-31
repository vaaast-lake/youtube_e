import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos} = useQuery(
    ['videos', keyword],
    () =>  youtube.search(keyword)
  );
  return (
    <>
      <div>
        Videos { keyword ? `${ keyword }` : 'hot trend' }
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting is wrong</p>}
      {
        videos
          && <ul className='flex w-full flex-wrap justify-center'>
            {videos.map(video => <VideoCard key={video.id} video={video} />)}
          </ul>
      }
    </>
  );
}

