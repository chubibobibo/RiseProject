/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventPageWrapper.js";

/** import components to be rendered */
import FilterButtons from "../../components/buttons/FilterButtons.jsx";

import { Link } from "react-router-dom";

function DashboardIndexPage() {
  return (
    <Wrapper>
      <div className='container'>
        <span style={{ color: "white", fontSize: "50px" }}>Dashboard</span>
        <h2 style={{ color: "white" }}>Tasks</h2>
        <div className='table-container'>
          <div className='button-row'>
            <FilterButtons label={"All Tasks"} type={"button"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default DashboardIndexPage;
