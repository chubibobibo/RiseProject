import styled from "styled-components";

const Wrapper = styled.section`
  /* display: flex; */
  /* height: 90vh;
  margin: 0; */

  /** Layout for the navigationbar to take up the whole width of the screen */
  .dashboard {
    display: inline-block;
    width: 100vw;
    position: relative;
  }

  /** layout for the BigSideBar component to have a grid layout */
  /** grid layout will allow us to make 2 cloumns for the bigsidebar and the outlet components */
  .dashboard-outlet {
    position: absolute;
    display: grid;
    grid-template-columns: 0fr 1fr; /** sets the size of each columns */
    width: 100vw;
    height: 90vh;
  }
  /* @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

  } */
  /** layout for the outlet components */
  .outlet-container {
    height: 20rem;
    min-width: 100vh;
  }

  .searchField {
    margin-left: auto;
  }
`;
export default Wrapper;
