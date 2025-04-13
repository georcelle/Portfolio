import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Academic and Personal Projects</h1>
        <div className="projects-grid">          
            <div className="project">
                <a href="https://www.figma.com/design/UeGEh9chUPbNmdZNm9Y4vk/CACHE---Memory-Game?node-id=0-1&t=bbNojmEbd8Eif0db-1" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/UeGEh9chUPbNmdZNm9Y4vk/CACHE---Memory-Game?node-id=0-1&t=bbNojmEbd8Eif0db-1" target="_blank" rel="noreferrer"><h2>CACHE - Card Memory Game</h2></a>
                <p>A fun and interactive 2D memory card game designed with clean UI/UX on Figma. Focused on cognitive skill enhancement and gamified learning mechanics.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/2pp0o53WQnegPfjrI0VJmE/Lexi-Logic?node-id=0-1&t=SnRHb8vgCTjiuALw-1" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/2pp0o53WQnegPfjrI0VJmE/Lexi-Logic?node-id=0-1&t=SnRHb8vgCTjiuALw-1" target="_blank" rel="noreferrer"><h2>Lexi Logic - Word Game</h2></a>
                <p>A vocabulary-based educational game that challenges users to solve word puzzles under time pressure. Developed in JavaFX and designed in Figma as part of a game thesis project.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/XKxUKq5ofMcQT7xP7EFho8/Exit-Interview-Portal---webdev--midterms-?node-id=0-1&t=VY9cn8LUvGmWPgId-1" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/XKxUKq5ofMcQT7xP7EFho8/Exit-Interview-Portal---webdev--midterms-?node-id=0-1&t=VY9cn8LUvGmWPgId-1" target="_blank" rel="noreferrer"><h2>Exit Interview Portal</h2></a>
                <p>A centralized portal designed to streamline exit interviews for graduating students. Features a form-based interface and student feedback tracking system for administrators.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Language Mapping - Web Application</h2></a>
                <p>A web-based visualization tool that maps languages spoken across different regions. Developed for a cultural diversity initiative, featuring a clean interactive map UI and dynamic data integration.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/zWoWRYaPSSIIpVlrVYziyO/Stock-Pilot--comprog3-?node-id=0-1&t=6moHj2mbG4neUka2-1" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/zWoWRYaPSSIIpVlrVYziyO/Stock-Pilot--comprog3-?node-id=0-1&t=6moHj2mbG4neUka2-1" target="_blank" rel="noreferrer"><h2>Stock Pilot - Inventory Management</h2></a>
                <p>An inventory tracking system that helps small businesses monitor product stock levels, restocking alerts, and sales records. Built using Java and MySQL with a responsive UI mockup.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/EMsEAwSFiwwWZz5zxeGg3Y/Emerzoom---Entrepreneurship?node-id=0-1&t=LIOK3jGlLOVb7bY8-1" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/EMsEAwSFiwwWZz5zxeGg3Y/Emerzoom---Entrepreneurship?node-id=0-1&t=LIOK3jGlLOVb7bY8-1" target="_blank" rel="noreferrer"><h2>Emer-Zoom</h2></a>
                <p>A proposed application for the school’s canteen aimed at streamlining food orders and reducing wait times. Designed to help students pre-order meals and improve the overall efficiency of canteen operations. UI/UX developed in Figma as part of an entrepreneurship project.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/design/R2SNx3vjhJZsMxrWT9W6sb/webdev-SDG?node-id=0-1&t=pTpbDL4g92tmEaGI-1" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/R2SNx3vjhJZsMxrWT9W6sb/webdev-SDG?node-id=0-1&t=pTpbDL4g92tmEaGI-1" target="_blank" rel="noreferrer"><h2>SDG 6 Website</h2></a>
                <p>Promotes awareness for Sustainable Development Goal 6 (Clean Water and Sanitation) through interactive infographics and informative sections. Designed for a web development class.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Doughy Delights</h2></a>
                <p>Created the branding assets for a small donut business, including logo and menu design. Tools used include Canva and ibisPaint, with a focus on fun, pastel-inspired aesthetics.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;