import React from 'react'
import './Title.scss';


const Title = ({title, description}) => {
  return (
    <>
        <div className="section-title text-center">
            <div className="container">
                <h2 className="title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}

export default Title