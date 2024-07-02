/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventPageWrapper.js";

import UserAvatar from "../../components/navigationBar/UserAvatar.jsx";

/** Temporary data to display tasks */
import { TempTasks } from "../../utils/TempTasks.jsx";

/** import components to be rendered */
import FilterButtons from "../../components/buttons/FilterButtons.jsx";
import FilterIconButtons from "../../components/buttons/FilterIconButtons.jsx";
import SearchInputField from "../../components/inputFields/SearchInputField.jsx";
import TaskElements from "../../components/tasksElements/TaskElements.jsx";

import { BsExclamationCircle } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

function DashboardIndexPage() {
  return (
    <Wrapper>
      <div className='container'>
        <h2 style={{ color: "white" }}>Tasks</h2>
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
              <span>To Do</span>
              <span>7</span>
              <div className='column-color-yellow'></div>
            </div>
            <div className='column-header'>
              <span>In Progress</span>
              <span>5</span>
              <div className='column-color-blue'></div>
            </div>
            <div className='column-header'>
              <span>Review</span>
              <span>8</span>
              <div className='column-color-purple'></div>
            </div>
            <div className='column-header'>
              <span>Done</span>
              <span>9</span>
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
                  />
                );
              })}
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              <div className='content-element'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {TempTasks.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={newTempTasks.task}
                      category={newTempTasks.category}
                      key={idx}
                    />
                  );
                })}
              </div>
            </div>
            {/* container for each column element of the boxes*/}
            <div className='content-column'>
              <div className='content-element'>
                {/* mapped imported TempTasks which is an array of objects containing tasks and categories   */}
                {/* for every iteration of the items, render the TaskElements component and provide props */}
                {TempTasks.map((newTempTasks, idx) => {
                  return (
                    <TaskElements
                      task={newTempTasks.task}
                      category={newTempTasks.category}
                      key={idx}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
}
export default DashboardIndexPage;
