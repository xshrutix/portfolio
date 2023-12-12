import React from 'react'
import Navbar from '../navbar/Navbar'
import Nav from '../navbar/Nav'
import Container from "@mui/material/Container";
import First from '../Containers/First';
import Box from "@mui/material/Box";
import About from '../Containers/About';
import Work from '../Containers/Work';
import Project from '../Containers/Project';
import Projects from '../Containers/Projects';
import Skills from '../Containers/Skills';
import Footer  from '../Containers/Footer';
const Home = () => {
    return (
        <>
        {/* <Navbar /> */}
        <Nav />
       
        <Box className='bg-yellow-50 h-screen'>
        <Container sx={{pt:20}} className='bg-yellow-50 max-w-full'>
            <First />
            <About  />
            <Work />
            <Project />
            <Skills />
            <Footer/>
            {/* <Projects /> */}
        </Container>  
        </Box>
         
        </>
  )
}

export default Home