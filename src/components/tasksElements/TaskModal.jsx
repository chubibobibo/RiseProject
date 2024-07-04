/** react icons */
import { RiCloseLine } from "react-icons/ri";

/** import the wrapper that will apply the classnames styles */
import Wrapper from "../../assets/wrappers/ModalWrapper.js";

/** Import the temporary tasks (will be replaced by data from an API) */
import { TempTasks } from "../../utils/TempTasks.jsx";

import { useState, useEffect } from "react";

/** modal will receive props when it's opened */
/** This will allow rendering it dynamically */
/** recieves the state (isOpen setIsOpen) as props to display data of each tasks*/
function TaskModal({ isOpen, setIsOpen }) {
  /** Create a state to manage the filtered data */
  const [filteredData, setFilteredData] = useState({});

  /** filtering the array of temp tasks for a specific task using the id that was passed as props in isOpen state. */
  const taskData = isOpen.taskId;

  /** filter the array of objects that contains our temporary data for all tasks then set the state that will contain
   * the filtered task using useEffect for every render */
  useEffect(() => {
    const newData = TempTasks.filter((newTasks) => {
      return newTasks.id === taskData;
    });
    const filteredTasks = () => {
      //   console.log(newData);
      setFilteredData(newData);
    };
    filteredTasks();
  }, []);

  return (
    /** onClick event uses anonymous function because we are providing an argument to the setIsOpen state*/
    <Wrapper>
      {/* using setIsOpen that was passed as argument from DashboardIndexPage so 
      we can use it to close the modal by setting isOpen to false*/}
      {/* setting setIsOpen in a div separate from the modal to close it when clicking outside the modal component */}
      <div className='darkBG' onClick={() => setIsOpen(false)}></div>
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>{filteredData[0]?.task}</h5>
          </div>
          {/* button to close */}
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
            This is a modal for a unique task having an id of{" "}
            {filteredData[0]?.id}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskModal;
