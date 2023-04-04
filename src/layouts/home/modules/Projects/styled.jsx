import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Category = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding-top: 10px;
`;

export const Title = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
