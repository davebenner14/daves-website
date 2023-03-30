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
      <img src="https://i.imgur.com/EQYxQF5.png?1" alt="bennertech" />
      <Styled.RightColumn>
        {portfolioData.jobStats.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.RightColumn>
    </Styled.Container>
  );
}

export default About;
