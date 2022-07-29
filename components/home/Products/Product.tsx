import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/slices/basketSlice";
import { Product } from "../../../typings/Product";

function Product({ product }: { product: Product }) {
    const { category, price, image, title, description } = product;
    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(addToBasket(product))
    };
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 border">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {category}
            </p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3 h-10 truncate">{title}</h4>

            <p className="text-xs my-2 line-clamp-2 h-30 truncate">
                {description}
            </p>

            <div className="mb-5">&#8377;{`${Math.floor(price * 75)}.00`}</div>

            <button
                className="mt-auto w-full py-2 bg-orange-400 rounded-lg font-bold hover:bg-orange-500"
                onClick={addItem}
            >
                Add to basket
            </button>
        </div>
    );
}

export default Product;
