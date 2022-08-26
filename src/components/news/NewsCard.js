import React from 'react'

const NewsCard = ({data}) => {
  return (
    <>
        {data.map((e) => {
            const {id, image, category, title, url} = e;
            return(
                <div key={id} className="col-md-4 col-sm-6 col-xs-6 col-6 single-list">
                    <div className="content">
                        <div className="img-wrapper">
                            <img src={image} alt="" />
                        </div>
                        <div className="info">
                            <span>{category}</span>
                            <h3>{title}</h3>
                            <div className="btn-wrapper">
                                <a href={url}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default NewsCard