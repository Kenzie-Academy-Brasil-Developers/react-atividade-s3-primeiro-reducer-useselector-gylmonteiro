import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 180px;
  background-color: red;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  p {
    padding: 2px;
    color: #ddd;
    border: 2px solid #ddd;
    border-radius: 5px;
    width: 150px;
  }
`;
