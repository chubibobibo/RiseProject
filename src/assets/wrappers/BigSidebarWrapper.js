import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  background: #252932;

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    color: #898fa9;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export default Wrapper;
