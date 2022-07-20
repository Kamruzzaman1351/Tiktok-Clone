import axios from 'axios'
import Head from 'next/head'
import { Video } from '../types'
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';

interface IVideo {
  videos: Video[]
}
const Home = ({ videos }: IVideo) => {
  return (
    <div>
      <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? 
        videos?.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`)


  return {
    props: {
      videos: data
    }
  }
}

export default Home
