import React, { useState } from "react";
import NavBar from "../components/navbar";
import Profile from "../components/profile";
import { useStateContext } from "../context/context";
import axiosClient from "../config/axiosClient";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setUser, setToken } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axiosClient
      .post("login", {
        email: email,
        password: password,
      })
      .then((data) => {
        data = data.data;
        setToken(data.token);
        setUser(data.user);
        console.log(token);
      })
      .catch((error) => {
        setEmailErrors(error.response.data.errors.email);
        setPasswordErrors(error.response.data.errors.password);
      });

    setLoading(false);
  };
  return (
    <React.Fragment>
      <div>
        {token ? (
          <Profile />
        ) : (
          <div
            className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950 mb-36"
            dir="rtl"
          >
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
              <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
                ورود به حساب کاربری
              </h1>
              <form action="#">
                <div className="mb-4">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                  {emailErrors.map((error) => (
                    <React.Fragment>
                      <label className="text-red-600">{error}</label>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="mb-4">
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    رمزعبور
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                    required
                  />
                  {passwordErrors.map((error) => (
                    <React.Fragment>
                      <label className="text-red-600">{error}</label>
                      <br />
                    </React.Fragment>
                  ))}

                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    رمزعبور خود را فراموش کردین؟
                  </a>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                    />
                    <label
                      for="remember"
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      مرا به خاطر داشته باش
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    ساخت اکانت
                  </a>
                </div>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        )}{" "}
        <NavBar login="true" />
      </div>
    </React.Fragment>
  );
}

export default Login;
