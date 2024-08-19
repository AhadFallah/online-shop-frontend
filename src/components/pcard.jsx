function Pcard(props) {
  return (
    <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
      <div>
        <img
          class="object-cover h-64 w-full"
          src={props.img}
          alt={props.alt}
        />
      </div>

      <div class="flex flex-col gap-1 mt-4 px-4">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">
          {props.name}
        </h2>
        <span class="font-normal text-gray-600 dark:text-gray-300">
          دسته‌بندی:{props.category}
        </span>
        <span class="font-semibold text-gray-800 dark:text-gray-50">
          {props.price} تومان
        </span>
      </div>

      <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
          <span class="text-base">اضافه کردن به سبد خرید</span>
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
        </button>
      </div>
    </article>
  );
}

export default Pcard;
