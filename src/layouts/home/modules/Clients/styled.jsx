import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ClientContainer = styled.div`
  position: relative;
  width: 100px;
  cursor: pointer;
  padding: 10px;

  img {
    width: 100%;
    filter: grayscale(100%);
    transition: filter 0.3s;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const DescriptionModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
