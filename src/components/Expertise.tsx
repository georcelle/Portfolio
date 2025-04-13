import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "JavaFX",
    "Java",
    "Git",
];

const labelsSecond = [
    "Figma",
    "Canva",
    "Miro",
    "User Testing",
    "Wireframing",
    "Prototyping",
    "Excalidraw",
];

const labelsThird = [
    "Git",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "PROLOG",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>FrontEnd Development</h3>
                    <p>I specialize in building modern, responsive, and user-friendly interfaces using technologies like React, JavaScript, and CSS. My strengths lie in translating design concepts into clean, functional front-end code, ensuring great performance across devices. I am highly familiar with the frontend workflow, version control, and collaborating with designers to bring UI visions to life.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faPalette} size="3x" />                   
                 <h3>UI/UX Design</h3>
                    <p>I focus on creating intuitive and user-friendly interfaces through thorough wireframing, prototyping, and user testing. Using tools like Figma, Canva, and Miro, I translate ideas into seamless digital experiences. I’m experienced in gathering user feedback, refining design flows, and collaborating across teams to enhance usability and accessibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGlobe} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I build full-stack applications and smart web solutions by combining modern development practices with emerging AI technologies. My work includes creating scalable backend systems and integrating GenAI to enable advanced features like predictive analytics and intelligent automation, enhancing user experience and business efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;