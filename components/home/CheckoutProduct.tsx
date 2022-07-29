import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../redux/slices/basketSlice";
import { Product } from "../../typings/Product";

function CheckoutProduct({ item }: { item: Product }) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket(item));
    };
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id: item.id }));
    };

    return (
        <div className="grid grid-cols-5">
            <Image
                src={item.image}
                height={200}
                width={200}
                objectFit="contain"
            />
            <div className="col-span-3 mx-5">
                <p>{item.title}</p>
                <p className="text-xs my-2 line-clamp-3">{item.description}</p>
                <span className="font-bold">
                    &#8377;{`${Math.floor(item.price * 75)}.00`}
                </span>
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="bg-orange-500 rounded-lg text-white px-3 py-1 font-semibold hover:shadow-md" onClick={addItemToBasket}>
                    Add to basket
                </button>
                <button className="hover:underline" onClick={removeItemFromBasket}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
