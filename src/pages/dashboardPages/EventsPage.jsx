/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/EventPageWrapper.js";

function EventsPage() {
  return (
    <Wrapper>
      <span style={{ color: "white", fontSize: "50px" }}>Events Page</span>
    </Wrapper>
  );
}
export default EventsPage;
