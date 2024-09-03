// result search page
import React, { useEffect, useState } from "react";
import "../index.css";
import NavBar from "../components/navbar";
import Pcard from "../components/pcard";
import Heading from "../components/heading";
import { useCookies } from "react-cookie";
import axiosClient from "../config/axiosClient";
import { useRecoilState } from "recoil";
import { search } from "../recoil/atoms/search";
import axios from "axios";

function Result() {
  const [varSearch, setVarSearch] = useRecoilState(search);
  const [products, setProducts] = useState([]);
  const [cookie, setCookies] = useCookies();
  let pagi = [];
  const [loading, setLoading] = useState(true); // Add loading state
  const data = "http://localhost:8000/api/search";
  const [page, setPage] = useState(data);
  console.log(varSearch);
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(page, {
        params: {
          search: varSearch,
        },
      })
      .then((data) => {
        data = data.data;
        setProducts(data.products);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle the error and stop loading
      });
  }, [page]);
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }
  if (products.total > 5) {
    pagi = [1, 2, 3, 4, 5];
  } else {
    pagi = Array.from({ length: products.total }, (_, i) => i + 1);
    console.log(pagi);
  }

  return (
    <div dir="rtl">
      {products.data.length != 0 ? (
        <div className="mb-36">
          <Heading title="نتایج جست و جو" tailwind="mt-4" />
          <div className="flex flex-wrap gap-16 m-5">
            {products.data.map((product) => (
              <Pcard product={product} />
            ))}
          </div>
          <div class="container mx-auto px-4">
            <nav
              class="flex flex-row flex-nowrap justify-between md:justify-center items-center"
              aria-label="Pagination"
            >
              <a
                class="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                href="#"
                onClick={() => setPage(products.perv)}
                title="صفحه قبلی"
              >
                <span class="sr-only">صفحه قبلی</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
              {pagi.map((i) => (
                <a
                  class={
                    "hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border" +
                    (products.page === i
                      ? " border-gray-700 "
                      : " border-gray-200 ") +
                    "bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                  }
                  href="#"
                  onClick={() => setPage(data + "?page=" + i)}
                  title={"صفحه" + { i }}
                >
                  {i}
                </a>
              ))}
              {products.total > 5 ? (
                <React.Fragment>
                  <a
                    class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                    href="#"
                    title="صفحه آخر"
                  >
                    ...
                  </a>
                  <a
                    class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                    href="#"
                    onClick={() => setPage(data + "?page=" + products.total)}
                    title="صفحه آخر"
                  >
                    {products.total}
                  </a>
                </React.Fragment>
              ) : null}
              <a
                class="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(products.next);
                }}
                title="صفحه بعدی"
              >
                <span class="sr-only">صفحه بعدی</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      ) : (
        <div
          class="bg-orange-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg"
          dir="rtl"
        >
          <svg
            viewBox="0 0 24 24"
            class="text-yellow-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
          >
            <path
              fill="currentColor"
              d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
            ></path>
          </svg>
          <span class="text-yellow-800 mr-2">موردی پیدا نشد </span>
        </div>
      )}
      <NavBar />
    </div>
  );
}

export default Result;
