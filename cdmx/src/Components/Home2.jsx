import React from 'react'
import NavbarData from '../Json/Navbar' 
import { TbCircleFilled } from 'react-icons/tb';
import { TbCircle } from 'react-icons/tb';
import Laterals from './Laterals';

const Home2 = () => {

    const NavbarIcons = NavbarData.map((Navbar) => (
        <div className='container_icon_meter'>
            <div className="container_img" key={Navbar.id}>
                <img className="icon_img_cdmx" src={Navbar.img} alt="metro_cdmx" />
            </div>
            <div className="container_title_img">
                <p>{Navbar.title}</p>
            </div>
        </div>
    ));


  return (
    <section className='container_sections'>
        <div className='section_window_1'>
         <Laterals position="left"/>
        </div>
        <div className='section_medium_0'>
          <div className='section_navBar'>
            <div className="section_icons">
                {NavbarIcons}        
            </div>
            <div className="section_progress">
              <div className="bar_progress"></div>
              <div className="circle"><TbCircle/></div>
              <div className="circle"><TbCircleFilled/></div>
              <div className="circle"><TbCircleFilled/></div>
              <div className="circle"><TbCircleFilled/></div>
              <div className="circle"><TbCircleFilled/></div>
              <div className="circle"><TbCircleFilled/></div>
            </div>
          </div>
 
          <div className='section_formation'>
              <h1>segundo</h1>
          </div>
        </div>
        <div className='section_window_2'>
          <Laterals position="right" />
        </div>
    </section>
  )
}

export default Home2