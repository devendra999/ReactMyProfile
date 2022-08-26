import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({prjData}) => {
    // console.log(prjData)
  return (
    <>
        {prjData.map((e) => {
            const {id, image, title, category, slug} = e
            return (
                <div key={id} className="col-md-4 col-sm-6 col-xs-12 single-list">
                    <div className="content">
                        <div className="img-wrapper">
                            <img src={image} alt="" />
                        </div>
                        <div className="info">
                            <span>{category}</span>
                            <h3>{title}</h3>
                            <div className="btn-wrapper">
                                <Link to={`${id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default ProjectCard