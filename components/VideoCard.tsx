import React from 'react'
import { Video } from '../types'

interface IVideo {
  post: Video
}


const VideoCard = ({post}: IVideo) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard