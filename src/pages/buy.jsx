import Navbar from "../components/navbar";
import Bcard from "../components/bcard";
import { useCookies } from "react-cookie";

function Buy() {
  const [cookies, setCookies] = useCookies(["basket"]);
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
  );
}

export default Buy;
