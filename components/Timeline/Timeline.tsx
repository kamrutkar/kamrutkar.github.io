import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';
import WorkIcon from './WorkIcon';
import SchoolIcon from './SchoolIcon';
import { StyledSection } from '../Style/StyledHomeContent';
import Fade from 'react-reveal/Fade';
 
const Timeline: FC = () => {
    return(
        <div>
        <StyledSection id="projects" aria-label="Projects' Section">
        <Fade top>
          <header className="section__header-main">
            <h2 className="section__header-main-head">PROJECTS</h2>
            <p>
              These are some of the projects I built to practice and get better at
              the technologies mentioned above.
            </p>
          </header>
        </Fade>
        </StyledSection>
        
            <div>
          
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(250, 56, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(250, 56, 121)' }}
    date="May 2022 - Aug 2022  "
    iconStyle={{ background: 'rgb(3, 18, 33)', color: '#fff' }}
    icon= {<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">UI/React Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Populus Media Inc., NJ</h4>
    <p>
      I joined healthcare company as a part of an internship and designed Keyword Management tool.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(250, 56, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(250, 56, 121)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(3, 18, 33)', color: '33, 150, 243' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Master Degree</h3>
    <h4 className="vertical-timeline-element-subtitle">Wilmington University, DE</h4>
    <p>
      In 2020, I decided to persue higher dgree in web development as my interest and curosity about Internet was rising.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(250, 56, 121)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(250, 56, 121)' }}
    date="2016 - 2019"
    iconStyle={{ background: 'rgb(3, 18, 33)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">How it all started</h3>
    <h4 className="vertical-timeline-element-subtitle">BMC Software, India</h4>
    <p>
    At this time, I started to have some interest in coding. 
    I then joined the BMC Software, started learning JavaScript and contributed my work to enhance ITSM module.
    </p>
  </VerticalTimelineElement>
 
</VerticalTimeline>
</div>
<div>
    <br></br>
<p className="section__project-others">
        Check out my other{" "}
        <a
          href="https://linktr.ee/kamrutkar"
          target="_blank"
          rel="noreferrer"
        >
          cool projects
        </a>{" "}
        I built when I started learning about web development.
      </p>
</div>
</div>
    )
}

export default Timeline;
