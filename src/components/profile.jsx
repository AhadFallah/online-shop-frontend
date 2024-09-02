import React, { useContext } from "react";
import axiosClient from "../config/axiosClient";
import { useStateContext } from "../context/context";
import { Link } from "react-router-dom";

function Profile(props) {
  const {  token, setToken, setUser } = useStateContext();
  const handleLogout = (e) => {
    e.preventDefault();
    axiosClient
      .post("logout")
      .then((data) => {
        setToken("");
        setUser('');
      })
      .catch((error) => console.log(error));
  };
  const user=JSON.parse(props.user);
  return (
    <div className="mb-36">
      <div
        class="bg-white overflow-hidden shadow rounded-lg border md:mx-72 mt-10"
        dir="rtl"
      >
        <div className="grid grid-cols-2">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              پروفایل کاربر
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">اطلاعات کاربری</p>
          </div>
          <div className="m-2 flex justify-end inline-flex">
            {" "}
            <a
              href="#"
              onClick={(e) => handleLogout(e)}
              className="inline-flex hover:text-gray-300"
            >
              خروج از حساب کاربری
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-1"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0 ">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">نام کامل</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">ایمیل</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">شماره تلفن</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.mobile}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">آدرس</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.address}
                <br />
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="bg-white overflow-hidden shadow rounded-lg border md:mx-72 mt-10"
        dir="rtl"
      >
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0 divide-y">
          <div class=" sm:grid sm:grid-cols-2 text-center">
            <Link className="p-4 m-2 bg-black text-white hover:bg-white hover:text-black">
              سفارشات
            </Link>
            <Link className="p-4 m-2 bg-black text-white hover:bg-white hover:text-black">
              نظرات
            </Link>
          </div>
          <div class="sm:grid sm:grid-cols-2 text-center">
            <Link
              to="/bookmarks"
              className="p-4 m-2 bg-black text-white hover:bg-white hover:text-black"
            >
              نشان شده ها
            </Link>
            <Link
              to="/basket"
              className="p-4 m-2 bg-black text-white hover:bg-white hover:text-black"
            >
              سبد خرید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
