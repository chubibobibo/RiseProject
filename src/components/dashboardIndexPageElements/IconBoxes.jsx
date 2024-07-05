import Wrapper from "../../assets/wrappers/IconBoxesWrapper.js";
/**React icon imports to be used in the icon boxes */

import { iconStyleContext } from "../../pages/dashboardPages/DashboardIndexPage.jsx";
import { useContext } from "react";

function IconBoxes() {
  const styles = useContext(iconStyleContext);
  console.log(styles);
  return (
    <Wrapper>
      <div className='box-icon'>{styles.icon}</div>
    </Wrapper>
  );
}
export default IconBoxes;
