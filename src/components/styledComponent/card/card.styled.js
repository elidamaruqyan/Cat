import styled from "styled-components";

const StyledMainContent = styled.main`
  margin-bottom: 100px;
`;

const StyledCardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
`;

const StyledCardWrapperItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default StyledCardWrapper;
export {StyledCardWrapperItem, StyledMainContent}
