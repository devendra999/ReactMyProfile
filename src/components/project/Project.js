import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import Title from '../title/Title'
import ProjectData from './ProjectData'
import './Project.scss'

const Project = () => {
    const [prjData, setprjData] = useState(ProjectData);
    
  return (
    <>
        <div className="project-section">
            <div className="container">
                <Title title="My Latest Project" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />
                
                <div className="row">
                    <ProjectCard prjData={prjData} />
                </div>

            </div>
        </div>
    </>
  )
}

export default Project