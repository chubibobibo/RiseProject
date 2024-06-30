import { Link } from "react-router-dom";

import { BsSuitcaseLg } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";

import Wrapper from "../assets/wrappers/BigSidebarWrapper.js";

function BigSidebarComponent() {
  return (
    <Wrapper>
      <Link>
        <button type='button' className='toggle-btn'>
          <SlScreenDesktop /> <p>Dashboard</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <CiCalendar /> <p>Events</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg /> <p>Clients</p>
        </button>
      </Link>
      <Link>Projects</Link>
      <Link>Tasks</Link>
    </Wrapper>
  );
}
export default BigSidebarComponent;
