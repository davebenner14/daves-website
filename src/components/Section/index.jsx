import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

const Section = ({ heading, children }) => {
  return (
    <Container>
      <h2>{heading}</h2>
      {children}
    </Container>
  );
};

// Section.propTypes = {
//   heading: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Section;
