import { Link } from "react-router-dom";

import { BsSuitcaseLg } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";

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
      <Link>
        <button type='button' className='toggle-btn'>
          <BiCategory />
          <p>Projects</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Tasks</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Leads</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Subscription</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Sales</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Prospects</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Notes</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Messages</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Team</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Tickets</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Expenses</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Reports</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Files</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Help and Support</p>
        </button>
      </Link>
      <Link>
        <button type='button' className='toggle-btn'>
          <BsSuitcaseLg />
          <p>Settings </p>
        </button>
      </Link>
    </Wrapper>
  );
}
export default BigSidebarComponent;
