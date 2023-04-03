import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 45vw;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 22vw;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// export const RightColumn = styled(LeftColumn)`
//   text-align: right;
//   @media (max-width: 768px) {
//     width: 100%;
//     text-align: center;
//   }
// `;

export const ImageContainer = styled.div`
  position: relative;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: white;
`;
