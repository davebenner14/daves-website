import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 22vw;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const JobTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const JobDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`};
  }
`;

export const EmailLink = styled.a`
  color: inherit;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:hover img {
  }
`;

export const RotatingImage = styled.img`
  width: 50vw; /* adjusted width */
  transition: transform 0.5s;
  transform: ${(props) => (props.rotate ? "rotate(360deg)" : "none")};
  z-index: -1;

  &:hover {
  }
`;
