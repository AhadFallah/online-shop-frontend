import Navbar from "../components/navbar";

function Search() {
  return (
    <div>
      <div>
        <label
          className="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          for="search-bar"
        >
          <input
            id="search-bar"
            placeholder=""
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  جست و جو
                </span>
              </div>
            </div>
          </button>
        </label>
      </div>
      <div className="flex flex-wrap mb-36 mx-52 justify-center">
        <article class="relative isolate flex flex-col w-full justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24 mx-5">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        <article class="relative isolate flex flex-col   w-full justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24 mx-5">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        <article class="relative isolate flex flex-col w-full justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-5 mx-5">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        <article class="relative isolate flex flex-col w-full justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-5 mx-5">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>



      </div>
      <Navbar search="true" />
    </div>
  );
}

export default Search;
