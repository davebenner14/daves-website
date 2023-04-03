import React from "react";
import { Container, Description, Title } from "./styled";

function JobInfo({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default JobInfo;
