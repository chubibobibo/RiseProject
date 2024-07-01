import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100vw; */
  background-color: #1c1f26;
  height: 94vh;

  .container {
    padding: 2rem;
  }

  .table-container {
    max-width: 100vw;
    background-color: #2f3541;
    height: 20rem;
    border-radius: 5px;
    overflow-x: scroll;
  }

  .button-row {
    background-color: #252932;
    height: 4rem;
    display: flex;
    justify-content: start;
    /* padding: 1rem; */
  }

  @media only screen and(min-width: 360px) {
    .table-container {
      height: 30rem;
      overflow-x: scroll;
    }
  }
  @media only screen and(min-width: 480px) {
    .table-container {
      height: 30rem;
      overflow-x: scroll;
    }
  }
  @media only screen and (min-width: 992px) {
    .table-container {
      height: 20rem;
      overflow-x: scroll;
    }
  }
  @media (min-width: 2000px) {
    .table-container {
      height: 50rem;
      overflow-x: scroll;
    }
  }
`;

export default Wrapper;
