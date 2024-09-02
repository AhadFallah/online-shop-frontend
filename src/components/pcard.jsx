import { useCookies } from "react-cookie";
import React, { useState } from "react";
import Success from "./success";
import { useStateContext } from "../context/context";
import { Navigate, useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";

function Pcard(props) {
	const [cookies, setCookies] = useCookies(["basket"]);
	const { user, token } = useStateContext();
	const [mark, setMark] = useState(props.product.bookmark);
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	async function handleBookmark(e) {
		e.preventDefault();
		if (!token) {
			navigate("/login");
		} else {
			await axiosClient
				.post("bookmark", {
					product: props.product.id,
					bookmark: !props.product.bookmark,
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
		const itemIndex = prev.findIndex((item) => item.id === props.product.id);

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
					id: props.product.id,
					name: props.product.name,
					category: props.product.category,
					price: props.product.price,
					img: props.product.img.path,
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
	const details = () => {
		navigate("/details", { state: { product: props.product } });
	};
	return (
		<React.Fragment>
			<article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
				<div>
					<img
						class="object-cover h-64 w-full"
						src={props.product.img.path}
						alt={props.product.alt}
					/>
				</div>

				<div class="flex flex-col gap-1 mt-4 px-4" onClick={details}>
					<h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">
						{props.product.name}
					</h2>
					<span class="font-normal text-gray-600 dark:text-gray-300">
						دستهبندی:{props.product.category}
					</span>
					<span class="font-semibold text-gray-800 dark:text-gray-50">
						{props.product.price} تومان
					</span>
				</div>

				<div class=" flex  justify-between  gap-3 mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
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
					<a class="relative" href="#" onClick={(e) => handleBookmark(e)}>
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
					</a>
				</div>
			</article>
			{visible ? <Success message="محصول در سبد خرید شما ذخیره شد" /> : null}

		</React.Fragment>
	);
}

export default Pcard;
