import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "./styled";

function SocialMedia() {
  return (
    <Container>
      <a href="https://www.facebook.com">
        <FacebookOutlinedIcon />
      </a>
      <a href="https://www.instagram.com">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/david-benner-76648617b/">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/davebenner14" target="_blank">
        <GitHubIcon />
      </a>
    </Container>
  );
}

export default SocialMedia;
