import React, { useState } from "react";
import NavBar from "../components/navbar";
import Profile from "../components/profile";
import { useStateContext } from "../context/context";
import axiosClient from "../config/axiosClient";
import { json } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [codePost, setCodePost] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { user, token, setUser, setToken } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [nameErrors, setNameErrors] = useState([]);
  const [mobileErrors, setMobileErrors] = useState([]);
  const [addressErrors, setAddressErrors] = useState([]);
  const [codePostErrors, setCodePostErrors] = useState([]);
  const [cityErrors, setCityErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [login, setLogin] = useState(true);
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
        localStorage.setItem("USER", JSON.stringify(data.user));
      })
      .catch((error) => {
        setEmailErrors(error.response.data.errors.email);
        setPasswordErrors(error.response.data.errors.password);
      });

    setLoading(false);
  };
  const handleReg = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosClient
      .post("register", {
        name:name,
        email:email,
        password:password,
        password_confirmation: passwordConfirm,
        address:address,
        code_post: codePost,
        city:city,
        mobile:mobile,
      })
      .then((data) => {
        data = data.data;
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("USER", JSON.stringify(data.user));
      })
      .catch((error) => {
        setEmailErrors(error.response.data.errors.email);
        setPasswordErrors(error.response.data.errors.password);
        setCityErrors(error.response.data.errors.city);
        setNameErrors(error.response.data.errors.name);
        setAddressErrors(error.response.data.errors.address);
        setCodePostErrors(error.response.data.errors.code_post);
        setMobileErrors(error.response.data.errors.mobile);
      });
      setLoading(false)
  };
  if (login) {
    return (
      <React.Fragment>
        <div>
          {token ? (
            <Profile user={localStorage.getItem("USER")} />
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
                    {emailErrors
                      ? emailErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
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
                    {passwordErrors
                      ? passwordErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}

                    <a
                      href="#"
                      className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      رمزعبور خود را فراموش کردین؟
                    </a>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setLogin(false);
                      }}
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
  } else {
    return (
      <React.Fragment>
        <div>
          {token ? (
            <Profile user={localStorage.getItem("USER")} />
          ) : (
            <div
              className="min-h-screen flex items-center justify-center mt-5 w-full dark:bg-gray-950 mb-36"
              dir="rtl"
            >
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
                  ثبت نام
                </h1>

                <form action="#">
                  <div className="mb-4">
                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      نام کامل{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="نام و نام خانوادگی"
                      required
                    />
                    {nameErrors
                      ? nameErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>
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
                    {emailErrors
                      ? emailErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                  <div className="mb-4">
                    <label
                      for="mobile"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      تلفن{" "}
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      onChange={(e) => setMobile(e.target.value)}
                      value={mobile}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="۰۹۱۱۲۲۲۳۳۳۳"
                      required
                    />
                    {mobileErrors
                      ? mobileErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
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
                      placeholder="*******"
                      required
                    />
                    {passwordErrors
                      ? passwordErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                  <div className="mb-4">
                    <label
                      for="password_confirm"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      تکرار رمزعبور
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="*******"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      شهر
                    </label>
                    <input
                      type="text"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="شهر"
                      required
                    />
                    {cityErrors
                      ? cityErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                  <div className="mb-4">
                    <label
                      for="codePost"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      کد پستی
                    </label>
                    <input
                      type="text"
                      id="password"
                      onChange={(e) => setCodePost(e.target.value)}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="کدپستی"
                      required
                    />
                    {codePostErrors
                      ? codePostErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>

                  <div className="mb-4">
                    <label
                      for="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      آدرس{" "}
                    </label>
                    <textarea
                      type="text"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="آدرس"
                      required
                    />
                    {addressErrors
                      ? addressErrors.map((error) => (
                          <React.Fragment>
                            <label className="text-red-600">{error}</label>
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setLogin(true);
                      }}
                      className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      ورود{" "}
                    </a>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => handleReg(e)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    ثبت نام
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
}

export default Login;
