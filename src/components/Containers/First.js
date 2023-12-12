import * as React from 'react';
import './First.css'
import shu from '../images/shruti.png'
import PanToolIcon from '@mui/icons-material/PanTool';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box'
import { Avatar, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { color } from '@chakra-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';
import Contact from './Contact/Contact';
const First = () => {
  return (
    
   <div  className="container " >
      <div className="row">
        <div className="col-sm mb-32 md:py-1 sm:pb-12 ,flex justify-center items-center text-center  ">
          
          
            <p className='text-4xl md:text-9xl pl-2 font-serif text-slate-700' > SHRUTI SHARMA </p>
            <p className='text-gray-900'> <b>Software Engineer</b></p>
          <br />
            
            <Button className='bg-slate-700' variant="contained" color="success"> <Link className='text-gray-200' to={"/contact"} > Let's Connect </Link></Button>
            <br />
            
            <br/>
          <span className='tracking-tight hover:tracking-wide pt-1'>
            <a href='https://www.linkedin.com/in/shruti-sharma-685504201/' rel="noreferrer" target={'_blank'}><LinkedInIcon className='mx-3 text-gray-800' />
            </a><a rel="noreferrer" href='https://github.com/xshrutix' target={'_blank'}><GitHubIcon className='mx-3 text-gray-800' /></a></span>
            
      
        </div>
        <br />
        <br/>
        <Box  className="py-4 h-40 col-sm ... border-double border-x-2 sm:py-1 flex justify-center items-center  " >
          <i className='fas fa-angle-double-right text-2xl' ></i>
          
            <img className='utkimg py-5 object-scale-down h-96 w-96   ...' src={shu} alt="monkeyImage" />
            
          <i  className='fas fa-angle-double-left text-2xl '></i>
    </Box>
        
    
        </div>
        <p id='aboutme'></p>
        </div>

  );
}

export default First;
