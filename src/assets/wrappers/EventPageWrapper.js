import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100vw; */
  background-color: #1c1f26;
  height: 94vh;

  .container {
    padding: 2rem;
    /* margin-left: 1rem; */
    /* overflow-x: scroll; */
  }

  .table-container {
    max-width: 100vw;
    height: 50rem;
    background-color: #2f3541;
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
`;

export default Wrapper;
