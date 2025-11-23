import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => { //props destructuring
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title

