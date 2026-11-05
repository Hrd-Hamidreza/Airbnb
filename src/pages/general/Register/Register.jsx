//! ---------------------------------------- Import
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "@/validations/auth.validations";
import { useAuth } from "@/hooks";
import { useEffect, useState } from "react";
//! ---------------------------------------- Component (Register)
function Register() {
  //! ---------------------------------------- Variables
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerValidation),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });
  //! ---------------------------------------- Hooks
  const navigate = useNavigate();
  //! --------------------
  const [registerError, setRegisterError] = useState({});
  //! --------------------
  useEffect(() => {
    if (!registerError.error) return;
    const timer = setTimeout(() => {
      setRegisterError({});
    }, 3000);
    return () => clearTimeout(timer);
  }, [registerError]);
  //! --------------------
  const { signUpFn } = useAuth();
  //! ---------------------------------------- Functions
  async function onSubmit(form) {
    setRegisterError({});

    const result = await signUpFn({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      password: form.password,
    });

    if (result?.success) {
      if (result?.loginRequired) {
        navigate("/login", { replace: true });
      } else {
        navigate("/profile", { replace: true });
      }
    } else {
      setRegisterError({
        error: true,
        message: result?.message ?? "Registeration Failed",
      });
    }
  }
  //! --------------------
  function handleErrors(message) {
    return <p className="text-sm text-red-500">{message}</p>;
  }
  //! --------------------
  function handleFirstletter(value) {
    if (!value.trim()) return "";
    const firstLetter = value.charAt(0).toUpperCase();
    const restLetters = value.slice(1).toLowerCase();
    return firstLetter + restLetters;
  }
  //! ---------------------------------------- Return
  return (
    <>
      <div className="max-w-md w-full m-auto space-y-8">
        <div className="flex justify-center">
          <Link to={`/register`} className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-rose-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold text-rose-500">airbnb</span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign up to start exploring
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  id="firstName"
                  {...register("firstName", {
                    onChange: (event) => {
                      event.target.value = handleFirstletter(
                        event.target.value,
                      );
                    },
                  })}
                  type="text"
                  placeholder="First name"
                  className="input"
                />
                {errors?.firstName && handleErrors(errors?.firstName?.message)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  {...register("lastName", {
                    onChange: (event) => {
                      event.target.value = handleFirstletter(
                        event.target.value,
                      );
                    },
                  })}
                  type="text"
                  placeholder="Last name"
                  className="input"
                />
                {errors?.lastName && handleErrors(errors?.lastName?.message)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email"
                className="input"
              />
              {errors?.email && handleErrors(errors?.email?.message)}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Password (8-12 Characters)"
                className="input"
              />
              {errors?.password && handleErrors(errors?.password?.message)}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="rePassword"
                {...register("rePassword")}
                type="password"
                placeholder="Please confirm your password."
                className="input"
              />
              {errors?.rePassword && handleErrors(errors?.rePassword?.message)}
            </div>
            {registerError.error && (
              <div className="fixed right-10 top-10 p-5 bg-red-500 text-white rounded-xl text-center z-51">
                {registerError.message ?? "Registeration Failed"}
              </div>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-700 transition-colors cursor-pointer"
            >
              {isSubmitting ? "Creating account..." : "Sign up"}
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                to={`/login`}
                className="text-sm text-rose-500 hover:text-rose-700 font-medium"
              >
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to Airbnb's
            <Link to={``} className="text-rose-500 hover:underline">
              Terms of Service
            </Link>
            and
            <Link to={``} className="text-rose-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Register;
