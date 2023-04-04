import React, { useState } from "react";
import { portfolioData } from "../../../../data";
import JobInfo from "./Jobinfo";
import * as Styled from "./styled";

function About() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  const formattedEmail = (
    <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
  );

  const jobInfoWithClickableEmail = portfolioData.jobInfo.map((job) => {
    if (job.title === "Contact") {
      return {
        ...job,
        description: formattedEmail,
        isEmail: true,
      };
    }
    return {
      ...job,
      isEmail: false,
    };
  });

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
        {jobInfoWithClickableEmail.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
            isEmail={job.isEmail}
          />
        ))}
      </Styled.LeftColumn>
    </Styled.Container>
  );
}

export default About;
