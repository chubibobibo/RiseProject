import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: inline-block;
    grid-template-columns: 1fr;
    width: 100vw;
    position: relative;
  }
  .dashboard-outlet {
    display: grid;
    grid-template-columns: 60rem, 60rem;
    position: absolute;

    width: 90%;
    margin: 0 auto;
    padding: 2rem;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-outlet {
      width: 90%;
    }
  }
`;

export default Wrapper;
