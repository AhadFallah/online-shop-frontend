import { memo } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div class="w-full">
        {props.house ? (
          <div
            class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
            role="group"
          >
            <button
              type="button"
              class={
                "px-5 py-1.5 text-xs font-medium" +
                (props.pop ? " text-white bg-gray-900 " : " text-gray-900 ") +
                "hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"
              }
            >
              پرطرفدار
            </button>
            <Link
              to="/"
              class={
                "px-5 py-1.5 text-center text-xs font-medium" +
                (props.home ? " text-white bg-gray-900 " : " text-gray-900 ") +
                "hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"
              }
            >
              خانه
            </Link>
            <Link
              to="/newest"
              class={
                "px-5 py-1.5 text-center text-xs font-medium" +
                (props.news ? " text-white bg-gray-900 " : " text-gray-900 ") +
                "hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"
              }
            >
              تازه ها
            </Link>
          </div>
        ) : null}
        {props.sum ? (
          <div
            class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
            role="group"
          >
            <div dir="rtl text-xs font-small">جمع:{props.sum} تومان</div>
            <div></div>
            <button
              type="button"
              class="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"
            >
              ادامه خرید
            </button>
          </div>
        ) : null}
      </div>
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto" dir="rtl">
        <Link
          to="/login"
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            class={
              "w-5 h-5 mb-1" +
              (props.login ? " text-blue-400 " : null) +
              "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />{" "}
          </svg>
          <span class="sr-only">Home</span>
        </Link>
        <div
          id="tooltip-home"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link
          to="/bookmarks"
          data-tooltip-target="tooltip-bookmark"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            class={
              "w-5 h-5 mb-1" +
              (props.bookmark ? " text-blue-400 " : null) +
              "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 20"
          >
            <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
          </svg>
          <span class="sr-only">Bookmark</span>
        </Link>
        <div
          id="tooltip-bookmark"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Bookmark
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link
          to="/"
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            class={
              "w-5 h-5 mb-1" +
              (props.house ? " text-blue-400 " : null) +
              "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span class="sr-only">Home</span>
        </Link>
        <div
          id="tooltip-home"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link
          to="/search"
          data-tooltip-target="tooltip-search"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            class={
              "w-5 h-5 mb-1" +
              (props.search ? " text-blue-400 " : null) +
              "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </Link>
        <div
          id="tooltip-search"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Search
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link
          to="/basket"
          data-tooltip-target="tooltip-buy"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class={
              "w-5 h-5 mb-1" +
              (props.buy ? " text-blue-400 " : null) +
              "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            }
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
          </svg>{" "}
          <span class="sr-only">buy</span>
        </Link>
        <div
          id="tooltip-buy"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          buy
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}

export default memo(NavBar);
