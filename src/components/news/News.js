import React, {useState} from 'react'
import Title from '../title/Title'
import './News.scss'
import NewsCard from './NewsCard'
import NewsData from './NewsData'

const News = () => {
    const [data, setdata] = useState(NewsData)

  return (
    <>
        <div className="news-section">
            <div className="container">
                <Title title="Latest News" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />
                <div className="row news-list">
                    <NewsCard data={data} />
                </div>
            </div>
        </div>
    </>
  )
}

export default News