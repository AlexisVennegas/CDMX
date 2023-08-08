import React from 'react'

const Laterals = ({ position}) => {

const lateralClass = position === 'left' ? 'section_windows_left' : 'section_window_right';
const windowclass = position === 'left' ? 'window' : 'window_left';
const barclass = position === 'left' ? 'section_sit_left' : 'section_sit_right';

  return (
    <section className='section_laterals'>
       <div className="section_color">

       </div>
       <div className='content_meter'>
            <div className={`${lateralClass}`}>
                <div className={` ${windowclass}`}>
                   <div className="bar_window_section"></div> 
                </div>
            </div>
            <div className={`${barclass}`}>
                <div className="sit_down">

                </div>
            </div>
       </div>
    </section>
  )
}

export default Laterals