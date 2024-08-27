import React, { useState } from "react";
import Navbar from "../components/navbar";
import Bcard from "../components/bcard";
import { useCookies } from "react-cookie";

function Buy() {
  const [cookies, setCookies] = useCookies(["basket"]);
  const [loading,setLoading]= useState(false);
  if (!cookies.basket) {
    setCookies("basket", [], { path: "/", sameSite: "Lax", secure: true });
    setLoading(false);
  }
  if(loading){
    <p>loading...</p>
  }
  else{
  const totalPrice = cookies.basket.reduce((acc, item) => {
    return acc + item.price * item.number;
  }, 0);

  const handleDelete = (id) => {
    const item = cookies.basket.filter((item) => item.id == id);
    if (item[0].number > 1) {
      const updateBasket = cookies.basket.map((item) => {
        if (item.id === id) {
          // Update the number for the matched item
          return {
            ...item,
            number: item.number - 1, // Update the quantity
          };
        }
        return item; // Return unchanged items
      });
      setCookies("basket", updateBasket, {
        path: "/",
        sameSite: "Lax", // or 'Strict' or 'None' depending on your needs
        secure: true,
      });
    } else {
      const updateBasket = cookies.basket.filter((item) => item.id !== id);
      setCookies("basket", updateBasket, {
        path: "/",
        sameSite: "Lax", // or 'Strict' or 'None' depending on your needs
        secure: true,
      });
    }
  };
  return (
    <React.Fragment>
      {cookies.basket.length === 0 ? (
        <div class="bg-orange-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg" dir="rtl">
          <svg
            viewBox="0 0 24 24"
            class="text-yellow-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
          >
            <path
              fill="currentColor"
              d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
            ></path>
          </svg>
          <span class="text-yellow-800 mr-2">
            سبد خرید خالی است!          </span>
        </div>
      ) : null}
      <div>
        <div className="mb-36 flex flex-wrap" dir="rtl">
          {cookies.basket.map((p) => (
            <Bcard
              img={p.img}
              name={p.name}
              category={p.category}
              price={p.price}
              number={p.number}
            >
              <button
                onClick={() => handleDelete(p.id)}
                class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
              >
                حذف
              </button>
            </Bcard>
          ))}
        </div>
        <Navbar buy="true" sum={totalPrice} />
      </div>
    </React.Fragment>
  );
  }
}

export default Buy;
