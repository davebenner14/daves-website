import React from "react";
import { portfolioData } from "../../../../data";
import JobInfo from "./Jobinfo";
import * as Styled from "./styled";

function About() {
  return (
    <Styled.Container>
      <Styled.LeftColumn>
        {portfolioData.jobInfo.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.LeftColumn>
      <div className="image-container">
        <img
          src="https://raw.githubusercontent.com/davebenner14/daves-website/b291c77e21e5c0d341dcad79e3de7a81a3be3a71/assets/pngegg.png"
          alt="David Benner"
        />
        <div className="text-overlay">David Benner</div>
      </div>
      {/* <Styled.RightColumn>
        {portfolioData.jobStats.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.RightColumn> */}
    </Styled.Container>
  );
}

export default About;
