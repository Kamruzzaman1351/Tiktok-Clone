import axios from 'axios'
import Head from 'next/head'
import { Video } from '../types'
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';

interface IVideo {
  videos: Video[]
}
const Home = ({ videos }: IVideo) => {
  return (
    <div>
      <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? 
        videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
    </div>
  )
}

export const getServerSideProps = async ({ query: { topic },}: { query: { topic: string }; }) => {
  let response = await axios.get(`http://localhost:3000/api/post`)
  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }

  return {
    props: {
      videos: response.data
    }
  }
}

export default Home
