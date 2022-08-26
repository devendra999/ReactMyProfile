import React from 'react'
import Title from '../title/Title'
import './Service.scss'
import ServiceCard from './ServiceCard'
import Data from './ServiceData'

const Service = () => {
  return (
    <>
        <div className="service-section">
            <div className="container">
                    <Title title="My Awesome Service" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."/>
                <div className="row service-list">
                    <ServiceCard Data={Data} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Service