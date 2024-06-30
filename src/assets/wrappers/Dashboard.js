import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: flex;
    grid-template-columns: 1fr;
    width: auto;
  }
  .dashboard-outlet {
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
