import React, { useEffect, useState } from 'react'
import './Recommended.css'
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

const Recommended = ({ categoryId, videoId }) => {

    const [recommendedData, setRecommendedData] = useState([])

    const recomUpdate = async () => {
        const recomURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        const response = await fetch(recomURL)
        const result = await response.json()
        setRecommendedData(result.items)
        console.log(result.items)
    }

    useEffect(() => {
        recomUpdate()
    }, [])


    return (
        <div className='recommended-list'>
            {recommendedData.map((item, index) => {
                return (
                    <Link to={`../../video/${item.snippet.categoryId}/${item.id}`} className='recommended'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" className='pic' />
                        <div className='data'>
                            <p className='card-title'>{item.snippet.title}</p>
                            <p className='card-channel'>{item.snippet.channelTitle}</p>
                            <p className='card-stats'>{formatViewCount(item.statistics.viewCount)} view &bull; {timeAgo(item.snippet.publishedAt)}</p>
                        </div>
                    </Link>
                )
             })}
        </div>
    )
}

export default Recommended
