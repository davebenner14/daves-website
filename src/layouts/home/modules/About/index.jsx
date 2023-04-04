import React, { useState } from "react";
import { portfolioData } from "../../../../data";
import JobInfo from "./Jobinfo";
import * as Styled from "./styled";

function About() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <Styled.Container>
      <Styled.ImageContainer onClick={handleRotate}>
        <Styled.RotatingImage
          src="https://i.imgur.com/9fZAshK.png"
          alt="David Benner"
          rotate={rotate}
        />
      </Styled.ImageContainer>

      <Styled.LeftColumn>
        {portfolioData.jobInfo.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.LeftColumn>
    </Styled.Container>
  );
}

export default About;
