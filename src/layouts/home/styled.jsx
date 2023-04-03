import styled from "styled-components";

export const Container = styled.main`
  margin: 0 40px;
`;

export const Section = styled.section`
  &.fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
