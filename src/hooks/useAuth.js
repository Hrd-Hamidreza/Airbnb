//! ---------------------------------------- Import
import { loginSuccess } from "@/features";
import { logOutService, registerService } from "@/services";
import { useDispatch, useSelector } from "react-redux";
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
      const { user, access_token, refresh_token } = result?.data;

      dispatch(
        loginSuccess({
          user,
          access_token,
          refresh_token,
        }),
      );
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
  //! -------------------- Return
  return { signUpFn, user, logOutFn };
}
