/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventPageWrapper.js";

/** import components to be rendered */
import FilterButtons from "../../components/buttons/FilterButtons.jsx";
import FilterIconButtons from "../../components/buttons/FilterIconButtons.jsx";
import SearchInputField from "../../components/inputFields/SearchInputField.jsx";

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
        <span style={{ color: "white", fontSize: "50px" }}>Dashboard</span>
        <h2 style={{ color: "white" }}>Tasks</h2>
        <div className='table-container'>
          <div className='button-row'>
            <FilterButtons label={"All Tasks"} type={"button"} />
            <FilterButtons label={"Bug"} type={"button"} />
            <FilterIconButtons
              label={<BsExclamationCircle />}
              type={"button"}
            />
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
        </div>
      </div>
    </Wrapper>
  );
}
export default DashboardIndexPage;
