import React, { useEffect, useState } from "react";
import "../index.css";
import NavBar from "../components/navbar";
import Pcard from "../components/pcard";
import Heading from "../components/heading";
import { useCookies } from "react-cookie";
import axiosClient from "../config/axiosClient";

function New() {
  const [products, setProducts] = useState([]);
  const [cookie, setCookies] = useCookies();
  let pagi = [];
  const [loading, setLoading] = useState(true); // Add loading state
  const data = "http://localhost:8000/api/new";
  const [page, setPage] = useState(data);
  console.log(cookie.user);
  useEffect(() => {
    axiosClient
      .get("/new")
      .then((data) => {
        data=data.data;
        setProducts(data.products);
        setLoading(false); // Set loading to false once data is fetched
        console.log(data);
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
      <div className="mb-36">
        <Heading title="تازه ها" tailwind="mt-4"/>
        <div className="flex flex-wrap gap-16 m-5">
          {products.data.map((product) => (
            <Pcard
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              img={product.img.path}
              bookmark={product.bookmark}
            />
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
              onClick={() => setPage(products.next)}
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

      <NavBar news="true" house="true" />
    </div>
  );
}

export default New;

