import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import auto from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertaiment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blogs.png'
import news from '../../assets/news.png'
import subs1 from '../../assets/cameron.png'
import subs2 from '../../assets/gerard.png'
import subs3 from '../../assets/jack.png'
import subs4 from '../../assets/megan.png'
import subs5 from '../../assets/simon.png'
import subs6 from '../../assets/tom.png'    

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar? "" : "smallbar"}`}>
        <div className='quicklinks'>
            <div className={`links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" className='link-pics'/>
                <p classname='link-names'> 
                    Home
                </p>
            </div>
            <div className={`links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game} alt="" className='link-pics'/>
                <p classname="link-names">
                    Gaming
                </p>
            </div>
            <div className={`links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={auto} alt="" className='link-pics'/>
                <p classname="link-names">
                    Automobiles
                </p>
            </div>
            <div className={`links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" className='link-pics'/>
                <p classname="link-names">
                    Sports
                </p>
            </div>
            <div className={`links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertaiment} alt="" className='link-pics'/>
                <p classname="link-names">
                    Entertainment
                </p>
            </div>
            <div className={`links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" className='link-pics'/>
                <p classname="link-names">
                    Technology
                </p>
            </div>
            <div className={`links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" className='link-pics'/>
                <p classname="link-names">
                    Music
                </p>
            </div>
            <div className={`links ${category===21?"active":""}`} onClick={()=>setCategory(21)}>
                <img src={blog} alt="" className='link-pics'/>
                <p classname="link-names">
                    Blogs
                </p>
            </div>
            <div className={`links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" className='link-pics'/>
                <p classname="link-names">
                    News
                </p>
            </div>
        </div>

        <hr className={`hr ${sidebar? "": "hr-gone"}`}/>

        <div className='subscriptions'>
            <p className='title'>Subscriptions</p>
            <div className='subs'>
                <img src={subs1} alt="" className='subs-img'/>
                <p classname="subs-name">
                    Nas Daily
                </p>
            </div>
            <div className='subs'>
                <img src={subs2} alt="" className='subs-img'/>
                <p classname="subs-name">
                    Justin Beiber
                </p>
            </div>
            <div className='subs'>
                <img src={subs3} alt="" className='subs-img'/>
                <p classname="subs-name">
                    PewDiePie
                </p>
            </div>
            <div className='subs'>
                <img src={subs4} alt="" className='subs-img'/>
                <p classname="subs-name">
                    Mr Beast
                </p>
            </div>
            <div className='subs'>
                <img src={subs5} alt="" className='subs-img'/>
                <p classname="subs-name">
                    5-Minute Crafts
                </p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
