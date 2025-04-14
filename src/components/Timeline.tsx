import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBurger, faHammer } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2024 - February 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Virual Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Organizing confidential client data using Excel spreadsheets, Preparing slides for client updates, Creating posts for client's social media accounts
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faHammer} />}
          >
            <h3 className="vertical-timeline-element-title">Villar General Construction and Supplies</h3>
            <h4 className="vertical-timeline-element-subtitle">Urdaneta, Pangasinan</h4>
            <p>
              Document Management, Office Coordination, Data Optimization, Team Collaboration
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - October 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            <h3 className="vertical-timeline-element-title">Doughy Delights</h3>
            <h4 className="vertical-timeline-element-subtitle">Baguio City, Benguet</h4>
            <p>
              Social Media Management, Logo and Menu Design, Bookkeeping Duties
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBurger} />}
          >
            <h3 className="vertical-timeline-element-title">KuziNegro Kitchenette</h3>
            <h4 className="vertical-timeline-element-subtitle">San Fabian, Pangasinan</h4>
            <p>
              Social Media Management, Logo and Menu Design
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;