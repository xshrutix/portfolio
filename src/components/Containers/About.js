/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Card, CardMedia, Typography, CardContent, CardActions, Button, List, ListItem } from '@mui/material'
import go from '../images/go.png'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';

const About = () => {
  return (
    <Box className=" flex justify-self-auto mt-32 bg-teal-500" >
      <Box className="column-sm w-screen bg-gradient-to-r from-orange-100 via-orange-300 to-orange-400 ...  ">
        <Typography className='underline decoration-double decoration-black hover:underline   text-center font-mono hover:font-serif  text-3xl antialiased hover:subpixel-antialiased font-semibold ...'>About Me</Typography>
        {/* <Box className='flex justify-center pt-1'>
          <CardMedia
        component="img"
        alt="green iguana"
          image={go}
          sx={{ height: "auto", width: "auto" }}
         
      />
        </Box>
       */}
        <CardContent>
          <Typography variant="body2" color="text.secondary" className='flex justify-center  text-slate-900  bg-gradient-to-r from-orange-100 via-orange-300 to-orange-400 ...'>
            <List>
              
              <ListItem><AutoStoriesIcon sx={{color:'black' , mr: 2}}  />Greetings! I'm Shruti Sharma, a 2024 Computer Science and Engineering graduate from 
             I.K. Gujral Punjab Technical University, Jalandhar, Punjab. </ListItem>
              <ListItem><AssignmentTurnedInIcon sx={{color:'black' , mr: 2}} />With hands-on experience in React.js, Tailwind CSS, and Django, I excel in building robust, user-focused applications backed by clean, scalable architectures. My goal is to bridge the gap between data-driven analysis and intuitive user experience through well-crafted digital solutions.</ListItem>
              <ListItem><LanguageIcon sx={{color:'black' , mr: 2}} />As a Business Analyst Intern at Virinchi Development Services, I analyzed large-scale health datasets to uncover key trends, streamlined data collection through automation, and collaborated with diverse teams to deliver actionable insights that shaped healthcare program strategies.

</ListItem>
              <ListItem><FavoriteIcon sx={{color:'black' , mr: 2}} /> I designed and developed dynamic visual dashboards to communicate complex data insights effectively to stakeholders, ensuring data-driven decision-making and improved operational efficiency across multiple regions.  </ListItem>
              <ListItem><TravelExploreIcon sx={{color:'black' , mr: 2}} />
Proficient in the principles of Object-Oriented Programming (OOP) and well-versed in data structures, I wield a strong command over these concepts within the Python programming language. My expertise extends to effectively applying these principles in real-world scenarios, contributing to robust and scalable software solutions.  </ListItem>
              <ListItem><PaletteIcon sx={{color:'black' , mr: 2}} />Driven by curiosity and a commitment to continuous learning, I aim to evolve as a versatile professional — combining analytical precision with full-stack development expertise to build impactful, data-informed web solutions that enhance user experience and business outcomes. </ListItem>
              
            </List>

          </Typography>
          <p id="work"></p>
        </CardContent>
         
        
      </Box>
      {/* <Box className=' column-sm  '> <Box className='flex justify-center'><img src={go} alt="logo "   /></Box> </Box> */}
      
    </Box>
  )
}

export default About