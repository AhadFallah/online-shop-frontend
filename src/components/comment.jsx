import axios from "axios";
import React, { useState } from "react";
import axiosClient from "../config/axiosClient";
import { useStateContext } from "../context/context";
import Success from "./success";

function Comment(props) {
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState("");
  const [suggest, setSuggest] = useState(1);
  const { token, setUser, setToken } = useStateContext();
  const [commentError, setCommentError] = useState([]);
  const [visible, setVisible] = useState(false);
  const handleComment = () => {
    axiosClient
      .post("comment", {
        comment: comment,
        ptype_seller_id: props.id,
        suggest: suggest,
      })
      .then((data) => {
        setVisible(true);
        setTimeout(()=>{
          setVisible(false)
        },5000);
      })
      .catch((error) => setCommentError(error.response.data.errors.comment));
  };
  return (
    <React.Fragment>
      {visible ? <Success message="نظر شما برای بررسی ارسال شد" /> : null}
      <div class="w-full bg-white rounded-lg border p-1 md:p-3 m-10" dir="rtl">
        {token ? (
          <React.Fragment>
            <div className="flex justify-between w-full">
              <h3 class="font-semibold p-1">نظرات</h3>
              <div className="ml-5">
                <select
                  onChange={(e) => {
                    setSuggest(e.target.value);
                  }}
                  className="w-full bg-black text-white hover:bg-white hover:text-black border-solid border-2 rounded-md border-black"
                  name=""
                  defaultValue={suggest}
                  id=""
                >
                  <option value={1}>محصول رو پیشنهاد میکنم</option>
                  <option value={2}>نظری ندارم</option>
                  <option value={3}>توصیه نمیکنم</option>
                </select>
              </div>
            </div>
            <div class="w-full px-3 mb-2 mt-6">
              <textarea
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                name="body"
                placeholder="نظر..."
                required
              />
              {commentError.map((error) => (
                <React.Fragment>
                  <label className="text-red-600">{error}</label>
                  <br />
                </React.Fragment>
              ))}
            </div>

            <div class="w-full flex justify-end px-3 my-3">
              <input
                type="submit"
                onClick={handleComment}
                class="px-2.5 py-1.5 rounded-md text-white text-sm bg-black hover:bg-white hover:text-black hover:border-solid border-black border-2 text-lg"
                value="اشتراک گذاری"
              />
            </div>
          </React.Fragment>
        ) : null}
        <div class="flex flex-col gap-5 m-3">
          {comments.map((myComment) => (
            <div>
              <div class="flex w-full justify-between border rounded-md">
                <div class="p-3">
                  <div class="flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-9"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>{" "}
                    <h3 class="font-bold">
                      {myComment.name}
                      <br />
                    </h3>
                  </div>
                  <p class="text-gray-600 mt-2 mr-10">{myComment.comment}</p>
                </div>
                {myComment.suggest == 1 ? (
                  <div className="bg-green-500 rounded-md  h-9 px-5 mt-2 text-white">
                    محصول رو پیشنهاد میکنم
                  </div>
                ) : null}
                {myComment.suggest == 2 ? (
                  <div className="bg-yellow-300 h-9 rounded-md px-5 mt-2 text-black">
                    نظری ندارم
                  </div>
                ) : null}
                {myComment.suggest == 3 ? (
                  <div className="bg-red-500 h-9 px-5 rounded-md mt-2 text-white">
                    توصیه نمیکنم
                  </div>
                ) : null}
                <div></div>
              </div>

              <div class="text-gray-300 font-bold pl-14">|</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Comment;
