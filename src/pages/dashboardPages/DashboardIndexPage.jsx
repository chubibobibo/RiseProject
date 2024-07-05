/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/DashboardIndexPageWrapper.js";
/**React icon imports to be used in the icon boxes */
import { FaRegClock } from "react-icons/fa";

import { createContext } from "react";

/** Import components to be rendered */
import IconBoxes from "../../components/dashboardIndexPageElements/IconBoxes.jsx";
export const iconStyleContext = createContext();

function DashboardIndexPage() {
  return (
    <Wrapper>
      DashboardIndexPage
      <iconStyleContext.Provider value={{ icon: <FaRegClock size={"3rem"} /> }}>
        <div className='page-header'>Dashboard</div>
        <div className='top-row'>
          <div className='top-row-boxes'>
            <IconBoxes />
          </div>
          <div className='top-row-boxes'>
            <IconBoxes />
          </div>
          <div className='top-row-boxes'>
            <IconBoxes />
          </div>
          <div className='top-row-boxes'>
            <IconBoxes />
          </div>
        </div>
      </iconStyleContext.Provider>
    </Wrapper>
  );
}
export default DashboardIndexPage;
