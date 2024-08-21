function Bcard(props) {
  return (
    <div class="w-80 bg-white shadow rounded m-5">
      <div
        class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{backgroundImage: `url(${props.img})`}}
      >
        <div class="flex justify-between"></div>
        <div></div>
      </div>
      <div class="p-4 flex flex-col items-center">
        <p class="text-gray-400 font-light text-xs text-center">
          {props.category}
        </p>
        <h1 class="text-gray-800 text-center mt-1">{props.name}</h1>
        <p class="text-center text-gray-800 mt-1">{props.price} تومان</p>
        <div class="inline-flex items-center mt-2">
          <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {props.number}
          </div>
        </div>
{props.children}
     </div>
    </div>
  );
}

export default Bcard;
