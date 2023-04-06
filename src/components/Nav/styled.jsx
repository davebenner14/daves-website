import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 24px;
    justify-content: center;
  }
`;

export const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); // Adjust the opacity by changing the last value (0.7)
  z-index: -1;
  filter: blur(5px);
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const Name = styled.div`
  margin-left: 8px;
  font-size: 24px;
  font-weight: bold;
`;
