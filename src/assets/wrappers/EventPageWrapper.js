import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100vw; */
  background-color: #1c1f26;
  height: 94vh;
  width: 100%;
  .container {
    padding: 2rem;
  }

  .table-container {
    max-width: 100vw;
    background-color: #2f3541;
    height: 20rem;
    border-radius: 5px;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .button-row {
    background-color: #252932;
    height: 4rem;
    display: flex;
    justify-content: start;
    /* width: 100vw; */
    /* padding: 1rem; */
  }

  /** row for the contents of the dashboard */
  .content-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 4fr;
    width: 100vw;
    span {
      margin: 10px;
      font-size: 25px;
    }
  }
  .column-header {
    /* border: 1px solid black; */
    border-radius: 3px;
    margin: 1rem;
    background-color: #252932;
    color: #898fa9;
    padding: 4px;
    display: grid;
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr;
    align-items: center;
  }

  /** Colored line under column header */
  /** grid-column start: span 2 takes the space of the 2 columns */
  .column-color-yellow {
    height: 3px;
    background-color: yellow;
    grid-column-start: span 2;
  }
  .column-color-blue {
    height: 3px;
    background-color: blue;
    grid-column-start: span 2;
  }
  .column-color-purple {
    height: 3px;
    background-color: purple;
    grid-column-start: span 2;
  }
  .column-color-cyan {
    height: 3px;
    background-color: cyan;
    grid-column-start: span 2;
  }

  .content-column {
    display: flex;
    flex-direction: column;
    height: 25rem;
    border-radius: 3px;
    margin: 1rem;
    background-color: #2f3541;
    color: #898fa9;
    width: 40rem;
    overflow-y: scroll;
    /* grid-template-columns: repeat(4, 1fr); */
    overflow-x: hidden;
  }
  /* 
  .content-element {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    background-color: #252932;
    margin: 2px;
    border-radius: 5px;
  } */

  /* .each-element {
    height: 5rem;
    width: 15rem;
    display: flex;
    align-items: center;
    margin: 2px;
    span {
      margin-left: 1rem;
    }
  } */
  /* 
  .userAvatar {
    height: 2rem;
    width: 2rem;
    border-radius: 100px;
  } */

  /** Responsive for small screens */

  @media only screen and(min-width: 360px) {
    .table-container {
      height: 30rem;
    }
  }
  @media only screen and(min-width: 480px) {
    .table-container {
      height: 30rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .table-container {
      height: 20rem;
    }
  }
  @media (min-width: 2000px) {
    .table-container {
      height: 50rem;
    }
  }
`;

export default Wrapper;
