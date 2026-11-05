//! ---------------------------------------- Import
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//! ---------------------------------------- Component (LoginGuard)
function LoginGuard({ children }) {
  //! ---------------------------------------- Redux
  const { user } = useSelector((store) => store.user);
  //! ---------------------------------------- Return
  if (!user?.userInfo) {
    return children;
  } else {
    return <Navigate to={"/profile"} replace />;
  }
}
//! ---------------------------------------- Export
export default LoginGuard;
