import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
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

export const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const Name = styled.div`
  margin-left: 8px;
  font-size: 24px;
  font-weight: bold;
`;
