function Hero(props) {
  return (
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-100 ">
        <section class="px-3 py-5 bg-neutral-100 lg:py-10">
          <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
              <p class="text-4xl font-bold md:text-7xl text-orange-600">
                {props.name}
              </p>
              <p class="text-4xl font-bold md:text-7xl">{props.des}</p>
              <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
                خرید
              </button>
            </div>
            <div class="order-1 lg:order-2">
              <img
                class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                src={props.img}
                alt={props.alt}
              />
            </div>
          </div>
        </section>

      </div>

  );
}

export default Hero;
