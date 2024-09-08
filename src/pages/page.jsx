import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useStateContext } from "../context/context";
import axiosClient from "../config/axiosClient";
import Comment from "../components/comment";
import Success from "../components/success.jsx";
function Page() {
  const { state } = useLocation();
  const { product } = state;
  const [mainSrc, setMainSrc] = useState(product.pimg[0].path);
  const [mark, setMark] = useState(product.bookmark);
  const [cookies, setCookies] = useCookies(["basket"]);
  const { user, token } = useStateContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const json = JSON.parse(product.context);
  async function handleBookmark(e) {
    e.preventDefault();
    if (!token) {
      navigate("/login");
    } else {
      await axiosClient
        .post("bookmark", {
          product: product.id,
          bookmark: !product.bookmark,
        })
        .then((response) => {
          setMark(!mark);
        });
    }
  }
  const handleBasket = (e) => {
    e.preventDefault();
    let prev = cookies.basket || [];

    // Check if the item is already in the basket
    const itemIndex = prev.findIndex((item) => item.id === product.id);

    let updateBasket;

    if (itemIndex !== -1) {
      // Item exists in the basket, so update its number
      updateBasket = prev.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            number: item.number + 1, // Increase the number
          };
        }
        return item;
      });
    } else {
      // Item does not exist, so add it to the basket
      updateBasket = [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          img: product.img.path,
          number: 1, // Initial number is 1
        },
      ];
    }
    setCookies("basket", updateBasket, {
      path: "/",
      sameSite: "Lax", // or 'Strict' or 'None' depending on your needs
      secure: true,
    });
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };
  const changeImage = (src) => {
    setMainSrc(src);
  };
  return (
    <React.Fragment>
      {visible ? <Success message="محصول در سبد خرید شما ذخیره شد" /> : null}

      <div>
        {" "}
        <div class="mb-36 flex justify-center flex-wrap" >
          <div class="container mx-auto px-4 py-8 shadow-lg">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 px-4 mb-8">
                <img
                  src={mainSrc}
                  alt="Product"
                  class="w-full h-96 max-h object-cover rounded-lg shadow-md mb-4"
                  id="mainImage"
                />
                <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                  {product.pimg.map((images) => (
                    <img
                      src={images.path}
                      alt="Thumbnail 1"
                      class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                      onClick={(e) => changeImage(e.target.src)}
                    />
                  ))}
                </div>
              </div>

              <div class="w-full md:w-1/2 px-4" dir="rtl">
                <h2 class="text-3xl font-bold mb-2">{product.name}</h2>

                <p class="text-gray-600 mb-4">فروشنده: {product.sellerName}</p>
                <div class="mb-4">
                  {product.discount ? (
            <React.Fragment>
              <span class="font-semibold text-red-800 dark:text-red-800 line-through">
                {product.price} تومان
              </span><br />
              <span className="text-red-800">همراه با تخفیف</span>
              <br />
              <span class="font-semibold text-red-800 dark:text-red-800 ">
                {product.finalPrice}                تومان
              </span>
            </React.Fragment>
          ) : (
            <span class="font-semibold text-gray-800 dark:text-gray-50">
              {product.price} تومان
            </span>
          )}
                          {/* <span class="text-gray-500 line-through">$399.99</span> */}
                </div>
                {/* <div class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  /> </svg> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div> */}
                <p class="text-gray-700 mb-6">{product.description} </p>

                {/* <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">Color:</h3>
                <div class="flex space-x-2">
                  <button class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                  <button class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                  <button class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                </div>
              </div> */}

                <div class="flex space-x-4 mb-6 gap-6">
                  <a class="relative" href="#" onClick={(e) => handleBasket(e)}>
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span class="fold-bold  flex relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white">
                      افزودن به سبد خرید
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </a>
                  <button
                    class="relative"
                    href="#"
                    onClick={(e) => handleBookmark(e)}
                  >
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span
                      class={
                        mark
                          ? "fold-bold flex relative  h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-white hover:text-black"
                          : "fold-bold flex relative  h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white"
                      }
                    >
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 384 512"
                        stroke="currentColor"
                      >
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />{" "}
                      </svg>
                    </span>
                  </button>
                </div>

                <div>
                  <h3 class="text-lg font-semibold mb-2">مشخصات فنی:</h3>
                  <ul class="list-disc list-inside text-gray-700">
                    {Object.keys(json).map((key) => (
                      <li key={key}>
                        {key}: {json[key]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Comment id={product.id} comments={product.comments} />
        </div>
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default Page;
