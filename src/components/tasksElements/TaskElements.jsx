/** Styled component to wrap around */
import Wrapper from "../../assets/wrappers/TaskElementWrapper.js";
/** Useravatar to display to each of the tasks */
import UserAvatar from "../../components/navigationBar/UserAvatar.jsx";

import { AiOutlineExclamationCircle } from "react-icons/ai";

function TaskElements({ task, avatar, category }) {
  return (
    <Wrapper>
      <div className='content-element'>
        {/* each of the box elements */}
        <div className='each-element'>
          <span className='userAvatar'>
            <UserAvatar />
          </span>
          <span>{task}</span>
        </div>
        <div className='priority-container'>
          <span className='priority'>
            <AiOutlineExclamationCircle />
          </span>
          <span
            className={category}
            style={{ textTransform: "capitalize", padding: "5px" }}
          >
            {category}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskElements;
