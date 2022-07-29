import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/slices/basketSlice";
function Header() {
    const cartItems = useSelector(selectItems);
    const { data: session } = useSession();
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
                <Link href={"/"}>
                    <img
                        src="/assets/images/starbuy.png"
                        alt="Starbuy"
                        className="h-28 object-contain cursor-pointer"
                    />
                </Link>
            </div>

            <ul className="flex-[0.3]  flex items-center justify-end space-x-12 py-2 px-12">
                <li className="cursor-pointer hover:underline transition underline-offset-4">
                    {session ? (
                        <Link
                            href={"/account"}
                        >{`Hello ${session.user?.name}`}</Link>
                    ) : (
                        <p className="" onClick={() => signIn()}>
                            Sign In
                        </p>
                    )}
                </li>
                <li className="cursor-pointer text-3xl relative">
                    <Link href={"/cart"}>
                        <p>
                            <span className="absolute -top-2 -right-2 text-xs  bg-orange-500 h-5 w-5 rounded-full flex items-center justify-center">{cartItems.length}</span>
                            <MdShoppingCart className="hover:text-orange-500" />
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
