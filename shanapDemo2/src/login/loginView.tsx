import React, { useState } from "react";
import shnp from "../assets/shnp.png";
import { RiAccountCircleFill } from "react-icons/ri";
import TextInput from "../inputs/textInput";
import {
  LoginRequest,
  loginRequestType,
  validationSchema,
} from "../features/requests/loginRequest";
import { useFormik } from "formik";
import UserInput from "../inputs/userInput";
import PasswordLoginInput from "../inputs/passwordLoginInput";
import { Link } from "react-router-dom";
import usePost from "../app/customHooks/usePost";
const LoginView = () => {
  interface UsePostResult {
    callQuery: () => void;
  }
  
  const formik = useFormik({
    initialValues: LoginRequest,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (values: loginRequestType) => {
        callQuery();
        },

    validationSchema: validationSchema,
  });
  const callQuery=usePost("restaurantemployees/login",formik.values,formik.resetForm);

  console.log(formik.values, "values");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="flex flex-row justify-center overflow-x-hidden">
          <div className="flex flex-col border-gray-300 border-2 rounded-2xl sm:w-8/12  lg:w-4/12">
            <div className="flex justify-end m-10 text-red-500 font-bold lg:text-2xl ">
              العربية
            </div>
            <div className="flex justify-center">
              <img src={shnp} className="w-6/12" />
            </div>
            <div className="flex flex-col font-bold lg:text-3xl items-center sm:text-2xl">
              Log into Restaurant Panel
            </div>
            <div className="flex flex-col items-center mt-7 text-center pl-3 pr-3 pb-5 lg:text-xl">
              Please enter your restaurant email address to create an account or
              to log in
            </div>
            <div className="flex flex-col items-center ">
              <UserInput
                value={formik.values.UserName}
                type="text"
                label=""
                name="UserName"
                placeholder="Username"
                classname=" pl-5 pt-2 pb-2 w-11/12 text-md bg-gray-100 passw"
                change={(e) => formik.handleChange(e)}
                errors={formik.errors.UserName?.toString()}
              />
              <PasswordLoginInput
                value={formik.values.password}
                type="password"
                label=""
                name="password"
                classname=" pl-5 pt-2 pb-2 w-10/12 text-md bg-gray-100 passw"
                placeholder="Enter your password"
                change={(e) => formik.handleChange(e)}
                errors={formik.errors.password?.toString()}
              />
            </div>
            <div className="flex flex-col items-center lg:text-lg t-9 mt-3 ml-3 mr-3">
              Can’t Remember Your Current Password?{" "}
              <span className="text-red-400 underline"> Reset Password</span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="p-4 bg-red-500 text-white text-lg font-bold w-10/12 flex rounded-2xl justify-center mt-9"
              >
                Join Shanap
              </button>{" "}
            </div>
            <div className="flex justify-center">
              <Link
                to="/Register"
                className="p-4  text-red-500 hover:bg-red-100 hover:rounded-3xl text-lg font-bold w-8/12 flex  justify-center mt-9 mb-9 transition-all duration-500 transform"
              >
                Don't have an account? Sign Up Instead
              </Link>{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
