import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import channel from '../../assets/megan.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import { formatViewCount } from '../../data'
import { timeAgo } from '../../data'


const PlayVideo = ({ categoryId, videoId }) => {

    const [channelData, setchannelData] = useState(null)

    const [channelId, setChannelId] = useState(null)

    const [videoData, setvideoData] = useState(null)

    const [commentData, setCommentData] = useState([])

    const fetchData = async () => {
        const vidURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        const response = await fetch(vidURL);
        const result = await response.json();
        setvideoData(result.items[0]);
        setChannelId(result.items[0].snippet.channelId)

    }

    const fetchChannel = async () => {
        const channelURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        const response = await fetch(channelURL);
        const result = await response.json();
        setchannelData(result.items[0]);
    }

    const fetchComment = async () => {
        const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        const response = await fetch(commentURL);
        const result = await response.json();
        setCommentData(result.items);
        console.log(result.items)
    }

    useEffect(() => {
        fetchData();
    }, [videoId])

    useEffect(() => {
        fetchChannel();
    }, [videoData])

    useEffect(() => {
        fetchComment();
    }, [])




    return (
        <div className='video-sec'>
            <div className='video-playing'>
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='video-buttons-about'>
                    <div className='title-stats'>
                        <p className='title'>
                            {videoData && videoData.snippet ? videoData.snippet.title : "Title Here"}
                        </p>
                        <p className='stats'>
                            {videoData && videoData.statistics ? formatViewCount(videoData.statistics.viewCount) : "Like Data"} views &bull; {videoData && videoData.snippet ? timeAgo(videoData.snippet.publishedAt) : "View Data"}
                        </p>
                    </div>
                    <div className='video-buttons'>
                        <button className='buttons'>
                            <img src={like} alt="" /><p>{videoData && videoData.statistics ? formatViewCount(videoData.statistics.likeCount) : "Like Count"}</p>
                        </button>
                        <button className='buttons'>
                            <img src={dislike} alt="" />
                        </button>
                        <button className='buttons'>
                            <img src={share} alt="" /><p>Share</p>
                        </button>
                        <button className='buttons'>
                            <img src={save} alt="" /><p>Save</p>
                        </button>
                    </div>
                </div>
                <hr className='hr' />
                <div className='channel-about'>
                    <div className='channel-pic-name-subs-button'>
                        <div className='channel-pic-name-subs'>
                            <img src={channelData && channelData.snippet ? channelData.snippet.thumbnails.medium.url : "No media"} alt="" className='channel-pic' />
                            <div className='channel-name-sub'>
                                <p className='name'>{videoData && videoData.snippet ? videoData.snippet.channelTitle : "Channel Name"}</p>
                                <p className='subs'>{channelData && channelData.statistics ? formatViewCount(channelData.statistics.subscriberCount) : "No Data"} Subscribers</p>
                            </div>
                        </div>
                        <button className='subscribe-button'>Subscribe</button>
                    </div>
                    <div className='channel-des'>
                        {videoData && videoData.snippet ? videoData.snippet.description : "Description"}
                    </div>
                </div>
                <hr className='hr' />
                <div className='comment-sec'>
                    <p className='count'>{videoData && videoData.statistics ? formatViewCount(videoData.statistics.commentCount) : "Comments "} Comments</p>
                    {commentData.map((item, index) => {
                        return (
                            <div className='comment'>
                                <div className='comment-user'>
                                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl
} alt="" className='user-pic' />
                                    <p className='user-name'>{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                    <p className='user-time'>{timeAgo(item.snippet.topLevelComment.snippet.updatedAt)}</p>
                                </div>
                                <p className='user-comment'>
                                    {item.snippet.topLevelComment.snippet.textDisplay}
                                </p>
                                <div className='comment-buttons'>
                                    <button className='buttons'><img src={like} alt="" />{formatViewCount(item.snippet.topLevelComment.snippet.likeCount)}</button>
                                    <button className='buttons'><img src={dislike} alt="" /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
