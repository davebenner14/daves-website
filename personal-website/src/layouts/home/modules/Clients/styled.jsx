import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  img {
    width: 100px;
    cursor: pointer;
    filter: grayscale(100%);
  }

  img:hover {
    filter: grayscale(0%);
  }
`;
