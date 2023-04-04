import React, { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    const jobInfoElements = document.querySelectorAll(".job-info");
    jobInfoElements.forEach((jobInfoElement) => {
      jobInfoElement.addEventListener("mouseover", () => {
        const descriptionElement = jobInfoElement.querySelector(".description");
        const jobInfo = portfolioData.jobInfo.find(
          (job) => job.title === descriptionElement.textContent.trim()
        );
        jobInfo.color = getRandomColor();
        descriptionElement.style.color = jobInfo.color;
        setInterval(() => {
          jobInfo.color = getRandomColor();
          descriptionElement.style.color = jobInfo.color;
        }, 5000);
      });
    });

    return () => {
      jobInfoElements.forEach((jobInfoElement) => {
        jobInfoElement.removeEventListener("mouseover", () => {});
      });
    };
  }, []);

  function getRandomColor() {
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <Styled.Container>
      <Styled.ImageContainer onClick={handleRotate}>
        <Styled.RotatingImage
          src="https://i.imgur.com/9fZAshK.png"
          alt="David Benner"
          rotate={rotate ? "true" : undefined}
        />
      </Styled.ImageContainer>

      <Styled.LeftColumn>
        {jobInfoWithClickableEmail.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
            isEmail={job.isEmail}
            className="job-info"
          />
        ))}
      </Styled.LeftColumn>
    </Styled.Container>
  );
}

export default About;
