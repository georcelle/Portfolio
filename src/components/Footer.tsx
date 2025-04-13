import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/georcelle" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/georcellenuarin/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>The only permanent thing in this world is change.<a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"></a></p>
    </footer>
  );
}

export default Footer;