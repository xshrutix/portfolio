import React from 'react'
import './Projects.css'


import cine from '../images/Screenshot (159).png'


import dojiwa from '../images/dojiwa.png'
import wizsuite from '../images/wizsuite.png'
import gdoc from '../images/gdoc.png'
import vsmtech from '../images/vmstech.png'
import scheduler from '../images/scheduler.png'
import { Button, CardActions } from '@material-ui/core'

const Projects = () => {
  return (
    <div>

      <div className="flexbox">
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className=" flexcardNumber flexcardNumberOrange">01</div>
          <div className="flex flexcardTitle">VMS Tech</div>
          <div className="flex flexcardText">Designed and developed the official website for VMS Tech, focusing on a modern, responsive user experience that clearly communicates the company’s mission, services, and technology expertise.</div>
          <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
            src={vsmtech} alt="" /></div>
          <div className='flex justify-evenly aling-bottom '>
            <CardActions className='float-right'>
              <a href='https://vmstechs.com/'>
                <Button size="small" >Demo</Button>
              </a>
            </CardActions></div>
        </div>
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className=" flexcardNumber flexcardNumberOrange">02</div>
          <div className="flex flexcardTitle">Dojiwa</div>
          <div className="flex flexcardText">Dojiwa is an innovative platform that merges advanced AI with creative vision to transform how content is produced and experienced globally. It enables seamless lip-syncing across languages, natural-sounding voice generation, real-time translation, and highly realistic face transformations.</div>
          <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
            src={dojiwa} alt="" /></div>
          <div className='flex justify-evenly aling-bottom '>
            <CardActions className='float-right'>
              <a href='https://dojiwa.com/'>
                <Button size="small" >Demo</Button>
              </a>
            </CardActions></div>
        </div>
         <div className="bg-orange-300 text-black flexcard flexcardGreen mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className="flexcardNumber flexcardNumberGreen">06</div>
          <div className="flex flexcardTitle">Wizsuite</div>
          <div className="flex flexcardText">WiZSuite is a cutting-edge HR automation platform designed for the modern workplace. It combines enterprise-level security, seamless scalability, and smart integration to streamline workflows and enhance productivity. </div>
          <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
            src={wizsuite} alt="" /></div>
          <div className='flex justify-evenly aling-bottom'>
            <CardActions className='float-right'>
              <a href='https://wizsuite.com/'>
                <Button size="small" >Demo</Button>
              </a>
            </CardActions></div>
        </div>
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className=" flexcardNumber flexcardNumberOrange">03</div>
          <div className="flex flexcardTitle">CineMad</div>
          <div className="flex flexcardText"> A Personalized Movie recommendation webApp with Mood Changer and Emphasizer Feature and personlized watchList and autoRecommendations</div>
          <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
            src={cine} alt="" /></div>
          <div className='flex justify-evenly aling-bottom '><CardActions className='float-left aling-basline-0'>
            <a href='https://github.com/xshrutix/CineMad.git'>
              <Button size="small" >Code</Button>
            </a>
          </CardActions>
            </div>
        </div>
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className=" flexcardNumber flexcardNumberOrange">04</div>
          <div className="flex flexcardTitle">Scheduler</div>
          <div className="flex flexcardText"> A university timetable generator along with different views for Room, Teacher, Student and Class View.</div>
          <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
            src={scheduler} alt="" /></div>
          <div className='flex justify-evenly aling-bottom '><CardActions className='float-left aling-basline-0'>
            <a href='https://github.com/xshrutix/Scheduler.git'>
              <Button size="small" >Code</Button>
            </a>
          </CardActions>
           </div>
        </div>
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <div className=" flexcardNumber flexcardNumberOrange">05</div>
          <div className="flex flexcardTitle">Google Docs Clone</div>
          <div className="flex flexcardText">Developed a web-based collaborative text editor replicating Google Docs functionality. Implemented real-time text editing, rich-text formatting, toolbar tools (undo/redo, lists, Bold, Italics, colors), and responsive design using React.js and Tailwind CSS.</div>
          <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
            src={gdoc} alt="" /></div>
          <div className='flex justify-evenly aling-bottom '><CardActions className='float-left aling-basline-0'>
            <a href='https://github.com/xshrutix/google-doc.git'>
              <Button size="small" >Code</Button>
            </a>
          </CardActions>
           </div>
        </div>


       

      </div>
      <p id='skills'></p>
    </div>
  )
}

export default Projects