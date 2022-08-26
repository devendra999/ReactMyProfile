import React from 'react'
import './ReactDemo.scss'
import Todo from '../todolist/Todo'
import MySlider from '../slider/MySlider'
import Accordion from '../Accordion/Accordion'
import Filter from '../filter/Filter'
import ApiLive from '../apilive/ApiLive'
import ImageSelect from '../ImageSelect/ImageSelect'
import SelectPerson from '../SelectPerson.js/SelectPerson'
import Color from '../color/Color'

const ReactDemo = () => {
  return (
    <>
        <Todo />
        <Color/>
        <ImageSelect/>
        <SelectPerson/>
        <MySlider />
        <Accordion />
        <Filter />
        <ApiLive />

    </>
  )
}

export default ReactDemo