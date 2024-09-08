import React, { useState } from "react";
import { useStateContext } from "../context/context";
import Profile from "../components/profile";
import Navbar from "../components/navbar";

function EditProfile() {
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
  const handleSubmit = () => {};
  return (
    <React.Fragment>
      <div className="h-screen flex flex-wrap items-center justify-center mb-36">
        {" "}
       <div
          className=" flex  flex-col items-center justify-center w-full dark:bg-gray-950"
          dir="rtl"
        >
   <h1 className="text-2xl font-bold text-center space- dark:text-gray-200">
          ویرایش پروفایل        </h1>
      
          <div className="flex flex-wrap justify-center bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-full">
            <div className="flex flex-col">
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="name" className="mb-2">
                  نام
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="email" className="mb-2">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="name" className="mb-2">
                  موبایل{" "}
                </label>
                <input
                  type="number"
                  id="mobile"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="name" className="mb-2">
                  شهر{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="name" className="mb-2">
                  کدپستی{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mx-2 flex flex-wrap space-evenly mb-2">
                <label htmlFor="name" className="mb-2">
                  ادرس{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="w-full flex mt-10   justify-center py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ویرایش            </button>
          </div>
        </div>
      </div>
        <Navbar login="true" />
    </React.Fragment>
  );
}

export default EditProfile;
