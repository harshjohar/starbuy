import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
function Header() {
    return (
        <div className="w-screen  py-2 px-6 flex justify-between items-center font-poppins">
            <ul className="flex-[0.3]  flex justify-start items-center space-x-12 py-2 px-12">
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>

            <div className="flex-[0.4] flex items-center justify-center py-2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                    alt="Starbuy"
                    className="h-8 object-contain"
                />
            </div>

            <ul className="flex-[0.3]  flex items-center justify-end space-x-12 py-2 px-12">
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    <Link href={"/account"}>Account</Link>
                </li>
                <li className="cursor-pointer text-3xl hover:text-starbuy-subtext">
                    <Link href={"/cart"}>
                        <MdShoppingCart />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
