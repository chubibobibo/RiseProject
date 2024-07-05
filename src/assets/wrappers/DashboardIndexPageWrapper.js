import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1c1f26;
  height: 94vh;
  width: 100%;

  /** page header  */
  .page-header {
    margin: 1rem;
    font-size: 25px;
    color: white;
  }
  /** Top row of the page defining grid areas */
  .top-row {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-template-rows: 1fr;
    grid-template-areas: "clock-in open-tasks event-today due";
  }

  .top-row-boxes {
    background-color: #252932;
    margin: 1rem;
    height: 10rem;
    border-radius: 5px;
  }
`;

export default Wrapper;
