import styled from "styled-components";

const Wrapper = styled.div`
  .content-column {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(4, 1fr); */
    height: 25rem;
    border-radius: 3px;
    margin: 1rem;
    background-color: #2f3541;
    color: #898fa9;
    width: 40rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .content-element {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    background-color: #252932;
    margin: 10px;
    border-radius: 5px;
  }

  .each-element {
    height: 5rem;
    width: 15rem;
    display: flex;
    align-items: center;
    margin: 2px;
    span {
      margin-left: 1rem;
    }
  }

  .userAvatar {
    height: 2rem;
    width: 2rem;
    border-radius: 100px;
  }

  .design {
    background-color: green;
    width: 3rem;
    height: 1.5rem;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .bug {
    background-color: red;
    width: 3rem;
    height: 1.5rem;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .enhancement {
    background-color: lightblue;
    width: 6rem;
    height: 1.5rem;
    border-radius: 5px;
    color: white;
    justify-content: center;
    margin: 1rem;
  }
`;

export default Wrapper;
