//! ---------------------------------------- Import
import { logOutApi, registerApi } from "@/api";
//! ---------------------------------------- Functions
//! -------------------- registerService
export async function registerService(payLoad = {}) {
  try {
    const response = await registerApi(payLoad);

    if (!response?.success) {
      return {
        success: false,
        status: response?.status,
        message: response?.message ?? "Registration Failed",
      };
    }

    if (response?.data?.access_token) {
      return {
        success: true,
        data: response.data,
        loginRequired: false,
      };
    }

    return {
      success: true,
      loginRequired: true,
      message: response?.message ?? "Account Created Successfully",
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      message:
        error?.response?.data?.message ??
        (error?.response?.status === 409
          ? "This email is already registered."
          : "Registration Failed"),
    };
  }
}
//! -------------------- logOutService
export async function logOutService() {
  try {
    const { data, success } = await logOutApi();
    if (success) {
      return { success: true, message: data?.message };
    }
    if (!success) {
      return { success: false, message: data?.message };
    }
  } catch (error) {
    return { success: false, message: error?.response?.message };
  }
}
