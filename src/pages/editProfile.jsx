import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/context";
import Profile from "../components/profile";
import Navbar from "../components/navbar";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [mail_code, setMailCode] = useState("");
  const [city, setCity] = useState("");
  const { setUser } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [nameErrors, setNameErrors] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [mobileErrors, setMobileErrors] = useState([]);
  const [addressErrors, setAddressErrors] = useState([]);
  const [auth, setAuth] = useState();
  const [mail_codeErrors, setMailCodeErrors] = useState([]);
  const [cityErrors, setCityErrors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      .get("/profile")
      .then((data) => {
        setName(data.data.user.name);
        setEmail(data.data.user.email);
        setMobile(data.data.user.mobile);
      })
      .catch((error) => {
        setAuth(error.response.data.message);
      });
  }, [submit]);
  if (auth || success) {
    navigate("/login");
  } else {
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmit(!submit);
      setLoading(true);
      axiosClient
        .post("/profile/update", {
          name,
          email,
          mobile,
        })
        .then((data) => {
          data.data.success ? setSuccess(true) : setSuccess(false);
          setUser(data.data.user);
          localStorage.setItem("USER", JSON.stringify(data.data.user));
        })
        .catch((error) => {
          setAuth(error.response.data.message);
          if (auth) {
            setEmailErrors(error.response.data.errors.email);
            setCityErrors(error.response.data.errors.city);
            setNameErrors(error.response.data.errors.name);
            setAddressErrors(error.response.data.errors.address);
            setMailCodeErrors(error.response.data.errors.code_post);
            setMobileErrors(error.response.data.errors.mobile);
          } else {
          }
        });
      setLoading(false);
    };
    return (
      <React.Fragment>
        <div className="h-screen flex flex-wrap items-center justify-center mb-36">
          {" "}
          <div
            className=" flex  flex-col items-center justify-center w-full dark:bg-gray-950"
            dir="rtl"
          >
            <h1 className="text-2xl font-bold text-center space- dark:text-gray-200">
              ویرایش پروفایل{" "}
            </h1>

            <div className="flex flex-wrap justify-center bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-full">
              <div className="flex flex-col">
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="name" className="mb-2">
                    نام
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="email" className="mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="mobile" className="mb-2">
                    موبایل{" "}
                  </label>
                  <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    id="mobile"
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              </div>
              <div className="flex flex-col">
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="city" className="mb-2">
                    شهر{" "}
                  </label>
                  <input
                    type="text"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="mail" className="mb-2">
                    کدپستی{" "}
                  </label>
                  <input
                    type="text"
                    id="mail"
                    onChange={(e) => setMailCode(e.target.value)}
                    value={mail_code}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {mail_codeErrors
                    ? mail_codeErrors.map((error) => (
                        <React.Fragment>
                          <label className="text-red-600">{error}</label>
                          <br />
                        </React.Fragment>
                      ))
                    : null}
                </div>
                <div className="mx-2 flex flex-wrap space-evenly mb-2">
                  <label htmlFor="address" className="mb-2">
                    ادرس{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    value={address}
                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              </div>

              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="w-full flex mt-10   justify-center py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ویرایش{" "}
              </button>
            </div>
          </div>
        </div>
        <Navbar login="true" />
      </React.Fragment>
    );
  }
}

export default EditProfile;
