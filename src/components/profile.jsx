import React, { useContext } from "react";
import axiosClient from "../config/axiosClient";
import { useStateContext } from "../context/context";
import { Link } from "react-router-dom";
import '../css/style.css'

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
        class="bg-white overflow-hidden shadow rounded-lg border lg:mx-72 mt-10"
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
         
             <button
className="button"
              onClick={(e) => handleLogout(e)}
              style={{
      '--color': '#90EE90',
      '--border': '2px',
      '--slant': '.5em'
    }}> ویرایش</button>
  <button
className="button mr-5"
              onClick={(e) => handleLogout(e)}
              style={{
      '--color': '#f3738a',
      '--border': '2px',
      '--slant': '.5em'
    }}> خروج</button>

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
        class="bg-white overflow-hidden shadow rounded-lg border lg:mx-72 mt-10  "
        dir="rtl"
      >
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0 divide-y">
          <div class=" grid grid-cols-2 text-center">
            <Link  className="p-4 m-2 b styled-link ">
              سفارشات
            </Link>
            <Link className="p-4 m-2 styled-link">
              نظرات
            </Link>
          </div>
          <div class="grid grid-cols-2 text-center">
            <Link
              to="/bookmarks"
              className="p-4 m-2 styled-link"
            >
              نشان شده ها
            </Link>
            <Link
              to="/basket"
              className="p-3 m-2  styled-link"
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
