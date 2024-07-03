/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventPageWrapper.js";

import UserAvatar from "../../components/navigationBar/UserAvatar.jsx";
import { useState } from "react";

/** Temporary data to display tasks */
import { TempTasks } from "../../utils/TempTasks.jsx";

/** import components to be rendered */
import FilterButtons from "../../components/buttons/FilterButtons.jsx";
import FilterIconButtons from "../../components/buttons/FilterIconButtons.jsx";
import SearchInputField from "../../components/inputFields/SearchInputField.jsx";
/** import of component that displays each task */
import TaskElements from "../../components/tasksElements/TaskElements.jsx";
import TaskModal from "../../components/tasksElements/TaskModal.jsx";

/**react icons */
import { BsExclamationCircle } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

function DashboardIndexPage() {
  /** State to open and close modal dialog component */
  const [isOpen, setIsOpen] = useState({ open: false, taskId: "" });
  /** onClick event handlet to set the isOPen state to true */
  /** This will render the TaskModal component visible */
  const handleClick = (id) => {
    setIsOpen({ open: true, taskId: id });
  };
  // console.log(isOpen.taskId);
  return (
    <Wrapper>
      <div className='container'>
        <h2 style={{ color: "white" }}>Tasks</h2>
        {/* dynamically renders the TaskModal component depending on the state of isOpen */}
        {/* at the same time passes setIsOpen as props to be able to set the state in TaskModal */}
        {/* passed isOpen state to as argument to obtain id of task needed to display data*/}
        {isOpen && <TaskModal setIsOpen={setIsOpen} isOpen={isOpen} />}
        {/* column of navigation buttons */}
        <div className='button-row'>
          <FilterButtons label={"All Tasks"} type={"button"} />
          <FilterButtons label={"Bug"} type={"button"} />
          <FilterIconButtons label={<BsExclamationCircle />} type={"button"} />
          <FilterIconButtons label={<FaArrowUp />} type={"button"} />
          <FilterIconButtons label={<RxPerson />} type={"button"} />
          <FilterIconButtons label={<MdOutlineWbSunny />} type={"button"} />
          <div className='searchField'>
            <SearchInputField
              label={<FaSearch />}
              type={"text"}
              placeholder={"Search"}
            />
          </div>
        </div>
        <div className='table-container'>
          {/* contains header for the element boxes */}
          <div className='content-header'>
            <div className='column-header'>
              <span className='span-header'>To Do</span>
              <span className='span-header'>7</span>
              <div className='column-color-yellow'></div>
            </div>
            <div className='column-header'>
              <span className='span-header'>In Progress</span>
              <span className='span-header'>5</span>
              <div className='column-color-blue'></div>
            </div>
            <div className='column-header'>
              <span className='span-header'>Review</span>
              <span className='span-header'>8</span>
              <div className='column-color-purple'></div>
            </div>
            <div className='column-header'>
              <span className='span-header'>Done</span>
              <span className='span-header'>9</span>
              <div className='column-color-cyan'></div>
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
              {/* for every iteration of the items, render the TaskElements component and provide props */}
              {TempTasks.map((newTempTasks, idx) => {
                return (
                  <TaskElements
                    task={newTempTasks.task}
                    category={newTempTasks.category}
                    key={idx}
                    click={() => {
                      handleClick(newTempTasks.id);
                    }}
                  />
                );
              })}
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
              {/* for every iteration of the items, render the TaskElements component and provide props */}
              {TempTasks.map((newTempTasks, idx) => {
                return (
                  <TaskElements
                    task={newTempTasks.task}
                    category={newTempTasks.category}
                    key={idx}
                    click={() => {
                      handleClick(newTempTasks.id);
                    }}
                  />
                );
              })}
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
              {/* for every iteration of the items, render the TaskElements component and provide props */}
              {TempTasks.map((newTempTasks, idx) => {
                return (
                  <TaskElements
                    task={newTempTasks.task}
                    category={newTempTasks.category}
                    key={idx}
                    click={handleClick}
                  />
                );
              })}
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
              {/* for every iteration of the items, render the TaskElements component and provide props */}
              {TempTasks.map((newTempTasks, idx) => {
                return (
                  <TaskElements
                    task={newTempTasks.task}
                    category={newTempTasks.category}
                    key={idx}
                    click={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
}
export default DashboardIndexPage;
