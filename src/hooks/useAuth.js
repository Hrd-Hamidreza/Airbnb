//! ---------------------------------------- Import
import { login } from "@/features";
import { loginService, logOutService, registerService } from "@/services";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "@/features";
//! ---------------------------------------- Component (useAuth)
export function useAuth() {
  //! ---------------------------------------- Redux
  const { user } = useSelector((store) => store.user);
  //! ---------------------------------------- Hooks
  const dispatch = useDispatch();
  //! ---------------------------------------- Functions
  //! -------------------- signUp
  const signUpFn = async (payLoad = {}) => {
    const result = await registerService(payLoad);

    if (!result.success) {
      return result;
    }

    if (result?.data && result.success) {
      dispatch(login(result?.data));
    }

    return result;
  };

  //! -------------------- logOut
  const logOutFn = async () => {
    const { success, message } = await logOutService();
    if (success) {
      dispatch(logOut());
      return { success: true, message };
    } else {
      return { success: false, message };
    }
  };

  //! -------------------- logOut
  const loginFn = async (payload = {}) => {
    const { success, data, message } = await loginService(payload);
    if (success) {
      dispatch(login(data));
      return {
        success: true,
        message,
        role: data?.user?.role,
      };
    } else {
      return { success: false, message };
    }
  };

  //! -------------------- Return
  return { signUpFn, user, logOutFn, loginFn };
}
