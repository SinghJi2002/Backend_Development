import React from 'react'
import './Video.css'
import video from '../../assets/video.mp4'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {categoryId,videoId}=useParams()

  return (
    <div className='elements'>
      <PlayVideo categoryId={categoryId} videoId={videoId}/>
      <Recommended categoryId={categoryId} videoId={videoId}/>
    </div>
  )
}

export default Video
