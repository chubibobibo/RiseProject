/** Styled component to wrap around */
import Wrapper from "../../assets/wrappers/TaskElementWrapper.js";
/** Useravatar to display to each of the tasks */
import UserAvatar from "../../components/navigationBar/UserAvatar.jsx";

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
        <div className={category}>{category}</div>
      </div>
    </Wrapper>
  );
}
export default TaskElements;
