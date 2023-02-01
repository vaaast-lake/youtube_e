import React from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos} = useQuery(
    ['videos', videoId],
    () =>  youtube.searchByRelated(videoId)
  );

  console.log(videos);

  return (
      <div className='flex'>
        <div>
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            width="1080"
            height="640"
            frameborder="0"
          >
          </iframe>
        </div>
        <ul className='flex flex-col'>
          {isLoading && <p>Loading...</p>}
          {error && <p>something is wrong!</p>}
          {videos &&
            videos.map(video => <VideoCard video={video} />)
          }
        </ul>
      </div>
  );
}