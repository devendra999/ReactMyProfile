import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import useGlobalContext from './Context';

const SingleProject = () => {

    const {id} = useParams();
    const name = useGlobalContext();

  return (
    <div>SingleProject Data {id} {name}</div>
  )
}

export default SingleProject;