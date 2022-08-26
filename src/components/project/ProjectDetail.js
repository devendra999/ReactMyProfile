import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const {slug} = useParams();

  
  
  return (
    <div>ProjectDetail {slug}</div>
    
  )
}

export default ProjectDetail