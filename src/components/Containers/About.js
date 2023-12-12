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
              
              <ListItem><AutoStoriesIcon sx={{color:'black' , mr: 2}}  />Greetings! I'm Shruti Sharma, currently immersed in the world of Computer Science & Engineering at I.K. Gujral Punjab Technical University
                Jalandhar, Punjab, India.</ListItem>
              <ListItem><AssignmentTurnedInIcon sx={{color:'black' , mr: 2}} />As a Frontend Developer, my expertise lies in the realm of frontend technologies, specifically in crafting seamless experiences with React.js, Tailwind CSS, and the nuances of Modern CSS. I bring not only technical proficiency but also a keen eye for UI/UX design.</ListItem>
              <ListItem><LanguageIcon sx={{color:'black' , mr: 2}} />I am proficient in frontend technologies including React.js, Tailwind CSS, material UI, jQuery and Modern CSS, complemented by strong UI/UX design skills.

</ListItem>
              <ListItem><FavoriteIcon sx={{color:'black' , mr: 2}} />One of my key strengths lies in problem-solving, and I take immense pleasure in tackling intricate reasoning problems. This passion drives me to continually seek new challenges, both in academia and the professional sphere.  </ListItem>
              <ListItem><TravelExploreIcon sx={{color:'black' , mr: 2}} />
Proficient in the principles of Object-Oriented Programming (OOP) and well-versed in data structures, I wield a strong command over these concepts within the Java programming language. My expertise extends to effectively applying these principles in real-world scenarios, contributing to robust and scalable software solutions.  </ListItem>
              <ListItem><PaletteIcon sx={{color:'black' , mr: 2}} />
Additionally, I have hands-on experience in spearheading a full-stack project using Node.js. Equipped with a comprehensive skill set, I am poised to transition into a versatile full-stack developer role. My proficiency spans both front-end and back-end technologies, positioning me as a valuable asset in the dynamic landscape of web development. </ListItem>
              
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