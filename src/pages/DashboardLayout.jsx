/**  outlet to render all the child components of dashboard layout */
import { Outlet } from "react-router-dom";
import { createContext } from "react"; /** context to pass data to components using it's provider */

import Wrapper from "../assets/wrappers/Dashboard.js";

/** Imports for all components */
import NavigationBar from "../components/navigationBar/NavigationBar.jsx";
import SmallSidebarComponent from "../components/SmallSidebarComponent.jsx";
import BigSidebarComponent from "../components/BigSidebarComponent.jsx";

function DashboardLayout() {
  /** Create context to pass data to components */
  const DashboardContext = createContext();

  return (
    <Wrapper>
      <main className='dashboard'>
        {/* <SmallSidebarComponent /> */}
        <BigSidebarComponent />
        <div>
          <div>
            <NavigationBar />
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
export default DashboardLayout;
