function Heading(props) {
  return (
    <h2 className={"flex flex-row flex-nowrap items-center "+props.tailwind}>
      <span class="flex-grow block border-t border-black"></span>
      <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        {props.title}
      </span>
      <span class="flex-grow block border-t border-black"></span>
    </h2>
  );
}

export default Heading;
