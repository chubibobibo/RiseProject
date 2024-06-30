/** Obtains errors in routes */
import { useRouteError } from "react-router-dom";

function ErrorPageComponent() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      ErrorPageComponent
      <p>{error.status}</p>
    </div>
  );
}
export default ErrorPageComponent;
