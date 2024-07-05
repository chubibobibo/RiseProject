/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/DashboardTaskPageWrapper.js";
function ClientPage() {
  return (
    <Wrapper>
      <span style={{ color: "white", fontSize: "50px" }}>Client Page</span>
    </Wrapper>
  );
}
export default ClientPage;
