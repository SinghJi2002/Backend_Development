import React, { useEffect, useState } from 'react'
import './Feed.css'
import pic1 from '../../assets/thumbnail1.png'
import pic2 from '../../assets/thumbnail2.png'
import pic3 from '../../assets/thumbnail3.png'
import pic4 from '../../assets/thumbnail4.png'
import pic5 from '../../assets/thumbnail5.png'
import pic6 from '../../assets/thumbnail6.png'
import pic7 from '../../assets/thumbnail7.png'
import pic8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'        
import { formatViewCount } from '../../data'
import { timeAgo } from '../../data'

const Feed = ({ category }) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const vidURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        const response = await fetch(vidURL);
        const result = await response.json();
        setData(result.items);
    }

    useEffect(() => {
        fetchData()
    }, [category])


    return (

        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" className='card-pic' />
                        <div className='card-data'>
                            <p className='card-title'>{item.snippet.title}</p>
                            <p className='card-channel'>{item.snippet.channelTitle}</p>
                            <p className='card-stats'>{formatViewCount(item.statistics.viewCount)}  view &bull; {timeAgo(item.snippet.publishedAt)}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feed
