import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { BackgroundGradientAnimation } from "../components/AuBackground"


function Experience() {
  return (
    <BackgroundGradientAnimation>
    <div className="experience text-main-100 font-lato  w-4/5 mt-32 md:w-full md:mt-8 absolute z-10">
      <VerticalTimeline lineColor="#3e497a"  >
        <VerticalTimelineElement
          className="vertical-timeline-element--education  text-1xl   lg:text-2xl font-bold "
          
          iconStyle={{ background: "#1D24CA", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title ">
            Jamaica colloge, St Andrew, jamaica
          </h3>
          <p> High School Diploma and ones in IT and EDPM </p>
          <p> 2015 - 2020</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#1D24CA", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-1xl lg:text-2xl font-bold">
            University of the CommonWealth Caribbean : UCC
          </h3>

          <h4 className="vertical-timeline-element-subtitle text-xl font-bold">
            Associate's Degree
          </h4>

          <p> Computer Science/ IT</p>
          <p> 2020 - 2022</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          iconStyle={{ background: "#1D24CA", color: "#fff" }}
          icon={<WorkOutlineIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold  ">
            No work experience yet
          </h3>
          <p> 2022 - </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </BackgroundGradientAnimation>
  );
}

export default Experience;
