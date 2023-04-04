import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.p`
  font-size: 0.6rem;
  margin: 0;
  color: gray;
  padding-top: 10px;
`;

export const Title = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  color: black;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
