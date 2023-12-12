import React from 'react'
import './Projects.css'
import little from '../images/littlepaws.png'
import cal from '../images/cal.png'
import cine from '../images/Screenshot (159).png'
import opt from '../images/opt.png'
import hotel from '../images/hotel.png'
import { Button , CardActions } from '@material-ui/core'

const Projects = () => {
  return (
     <div>
     
    <div   className="flexbox">
        <div  className="bg-orange-300 text-black flexcard flexcardGreen mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div className="flexcardNumber flexcardNumberGreen">01</div>
            <div className="flex flexcardTitle">Little Paws</div>
          <div className="flex flexcardText">It is a NGO based website aim with helping injured street animals.
          It is developed with using HTML, CSS, Javascript(DOM), along with JQuery and Bootstrap framework. </div>
            <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
                  src={little} alt="" /></div>
              <div  className='flex justify-evenly aling-bottom'><CardActions className='float-left'>
            <a href='/'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>  
        </div>
        <div  className=" bg-orange-300 text-black  flexcard flexcardBlue mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div className="flexcardNumber flexcardNumberBlue ">02</div>
            <div className="flex flexcardTitle">Mern Todo</div>
            <div className="flex flexcardText">A Mern based web app for simple todo work reminder using NodeJs(Express) , ReactJs and MongoDB as database. </div>
            <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
                  src={opt} alt="" /></div>
              <div className='flex justify-evenly aling-bottom '><CardActions className=' float-left aling-basline-0'>
            <a href='/'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>
        </div>
        <div className="bg-orange-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div  className=" flexcardNumber flexcardNumberOrange">03</div>
            <div className="flex flexcardTitle">CineMad</div>
            <div className="flex flexcardText"> A Personalized Movie recommendation webApp with Mood Changer and Emphasizer Feature and personlized watchList and autoRecommendations</div>
            <div className=" flex flexcardImg mt-4  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className=" flexcardimgItem"
                  src={cine} alt="" /></div>
              <div className='flex justify-evenly aling-bottom '><CardActions className='float-left aling-basline-0'>
            <a href='https://github.com/xshrutix/CineMad-frontend'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='https://github.com/xshrutix/CineMad-frontend'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>
        </div>
        
    </div>
    <p id='skills'></p>
    </div>
  )
}

export default Projects