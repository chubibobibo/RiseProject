import styled from "styled-components";

const Wrapper = styled.nav`
  margin: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: #252932;
  width: 100vw;
  position: sticky;
  .nav {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-right: auto;
  }

  .nav-right {
    display: flex;
    margin-left: auto;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: #5b73e8;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .userAvatar {
    border-radius: 40px;
    width: 3rem;
    height: 3rem;
  }
  .username {
    margin: 1rem;
    color: #5b73e8;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }
`;
export default Wrapper;
