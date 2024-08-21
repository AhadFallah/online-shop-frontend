import { useState } from "react";
import NavBar from "../components/navbar";
import data from "../config/config.json";
import { useCookies } from "react-cookie";
import { useAsyncError } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies]=useCookies(['user']);
  const [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(data.api + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCookies(['user'],data.access_token,{path:"/"});
      });
      setLoading(false);
  };
  return (
    <div>
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
      <NavBar login="true" />
    </div>
  );
}

export default Login;
