import styled from "styled-components";

const Wrapper = styled.section`
  /* display: flex; */
  /* height: 90vh;
  margin: 0; */
  .dashboard {
    display: inline-block;
    width: 100vw;
    /* height: 40vh; */
    position: relative;
  }
  .dashboard-outlet {
    position: absolute;
    display: grid;
    grid-template-columns: 0fr 1fr; /** sets the size of each columns */
    width: 100vw;
    height: 90vh;
    /* margin: 0 auto; */
    /* padding: 2rem; */
  }
  /* @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

  } */
  .outlet-container {
    height: 20rem;
    min-width: 100vh;
  }
`;

export default Wrapper;
