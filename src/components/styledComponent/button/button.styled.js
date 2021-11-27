import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid lightblue;
  font-size: 20px;
  background: white;
  color: black;
  cursor: pointer;
`;

const StyledButtonForSidebar = styled.button`
  background-color: unset;
  color: black;
  font-size: 20px;
  border: 0;
  border-bottom: 1px solid black;
`;

export default StyledButton;
export {
    StyledButtonForSidebar
}
