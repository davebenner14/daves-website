import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  p {
    margin: 0;
    margin-top: 10px;
    text-align: center;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

export const Pill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 50%;
  margin: 12.5px;
`;
