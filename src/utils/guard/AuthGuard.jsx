//! ---------------------------------------- Import
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//! ---------------------------------------- Component (AuthGuard)
function AuthGuard({ children }) {
  //! ---------------------------------------- Redux
  const { user } = useSelector((store) => store.user);
  //! ---------------------------------------- Return
  if (user?.userInfo) {
    return children;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}
//! ---------------------------------------- Export
export default AuthGuard;
