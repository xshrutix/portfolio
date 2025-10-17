import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab'
import { Box, Typography, Button, CardActions } from '@mui/material'
import ApiIcon from '@mui/icons-material/Api';
import PublicIcon from '@mui/icons-material/Public';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Work = () => {
    return (
        <div>
  <Box className="flex justify-self-auto mt-32 bg-teal-600">
    <Box className="column-sm w-screen bg-gradient-to-r from-orange-100 via-orange-300 to-orange-400">
      <Typography className="underline decoration-double decoration-black hover:underline text-center font-mono hover:font-serif text-3xl antialiased hover:subpixel-antialiased font-semibold">
        Work Experience
      </Typography>

      <Box className="mx-8 md:ml-[350px] mt-12 mb-12 md:flex justify-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">

          {/* Business Analyst Intern */}
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-8 ring-white dark:ring-yellow-50 dark:bg-yellow-50">
              <svg aria-hidden="true" className="w-3 h-3 text-orange-600 dark:text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-slate-900">Business Analyst Intern</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-slate-600">Dec 2024 – Jul 2025</time>
            <p className="mb-4 text-base font-normal text-slate-900">
              <a className="text-gray-800" href="http://virinchidevelopment.com/" target="_blank" rel="noreferrer">
                <b>Virinchi Development Services</b> <PublicIcon />
              </a>
              <ul className="list-disc ml-6 mt-2">
                <li>Analyzed state-wide health data to identify key public health challenges and trends.</li>
                <li>Designed and automated data collection templates to streamline reporting from local centers.</li>
                <li>Collaborated with cross-functional teams to provide actionable insights for healthcare programs.</li>
                <li>Created visual dashboards to effectively communicate data-driven outcomes to stakeholders.</li>
              </ul>
            </p>
          </li>

          {/* Fullstack Developer */}
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-8 ring-white dark:ring-yellow-50 dark:bg-yellow-50">
              <svg aria-hidden="true" className="w-3 h-3 text-orange-600 dark:text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-slate-900">Fullstack Developer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-slate-600">Jan 2024 – Jul 2024</time>
            <p className="mb-4 text-base font-normal text-slate-900">
              <a className="text-gray-800" href="https://vmstechs.com" target="_blank" rel="noreferrer">
                <b>VMS Techs</b> <PublicIcon />
              </a>
              <ul className="list-disc ml-6 mt-2">
                <li>Spearheaded the fullstack development of <b>Dojiwa</b>, an online platform for productivity tools.</li>
                <li>Contributed in  <b>WiZSuite</b>, a HR management web app with real-time preview and custom styling, improving user engagement by 40%.</li>
                <li>Implemented RESTful APIs in Django to manage authentication, content delivery, and database transactions.</li>
                <li>Tech Stack: React.js, Django, Tailwind, JavaScript, Express.js.</li>
              </ul>
            </p>
          </li>

         
        </ol>
      </Box>
    </Box>
  </Box>
  <p id="projects"></p>
</div>




    )
}

export default Work