import React from 'react'
import { Box, Typography } from '@material-ui/core'
import './Footer.css'

const Footer = () => {
  return (
    
  <footer className='mt-24'>
  <div className="social">
    <p>Follow me on social media</p>
    <ul className="wrapper">
      <a href="https://www.linkedin.com/in/shruti-sharma-685504201/" rel="noreferrer"  target="_blank">
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <span><i className="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="https://github.com/xshrutix" rel="noreferrer" target="_blank">
        <li className="icon github">
          <span className="tooltip">GitHub</span>
          <span><i className="fab fa-github"></i></span>
        </li>
      </a>
      
      <a href="https://twitter.com/since_10_2000" rel="noreferrer"  target="_blank">
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><i className="fab fa-twitter"></i></span>
        </li>
      </a>
      
    </ul>
  </div>
  <div className="final_text"></div>
  <p className='text-center'>Copyright &copy; All rights reserved
    <br/>Designed by Shruti Sharma, 2022
  </p>
</footer>
      
  )
}

export default Footer