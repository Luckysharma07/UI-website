import React from 'react'
import './About.css'
import about_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=> 
          {setPlayState(true)}}/>
      </div>
       <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
            <h2>We are the best in the world</h2>
            <p> A university is a prestigious institution of higher education that plays a vital role in shaping the future of individuals and society. 
            It offers undergraduate, postgraduate, and doctoral programs across various fields such as science, technology, arts, business, and humanities.</p>
            <p>  Universities are known for their focus on academic excellence, research, and innovation. They foster an environment that encourages critical thinking, creativity, and problem-solving.</p>
            <p>  In addition to academics, universities provide numerous extracurricular activities, sports, clubs, and student organizations to support overall development.</p>
       </div>
    </div>
  )
}

export default About

