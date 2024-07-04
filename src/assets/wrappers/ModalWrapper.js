import styled from "styled-components";

const Wrapper = styled.div`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 60rem;
    height: 40rem;
    background: #2f3541;

    z-index: 10;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 2px;
  }

  .modalHeader {
    height: 50px;
    background: #292e38;

    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    padding: 10px;
    color: #7c8fa9;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
  }

  .modalContent {
    padding: 10px;
    font-size: 25px;
    color: #7c8fa9;
    text-align: center;
  }

  .modalActions {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100%;
  }

  .actionsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: 3px;
    margin-right: 4px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(4px, -4px);
  }

  .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  }

  .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }

  .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  }

  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }

  .content-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .modal-content {
    padding: 10px;
    font-size: 22px;
    color: #7c8fa9;
    text-align: left;
    .userAvatar {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .author-container {
    display: flex;
  }

  .userAvatar {
    max-width: 5rem;
    height: 5rem;
    border-radius: 50px;
    margin-top: 0.5rem;
  }

  .add-item-input {
    width: 30rem;
  }
`;

export default Wrapper;
