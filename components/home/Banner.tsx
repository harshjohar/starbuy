import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
function Banner() {
    return (
        <div className="w-[85%] bg-starbuy-primary h-[600px] mx-auto relative flex">
            <div className="absolute h-10 w-10 bg-white top-0 left-0" />
            <div className="absolute h-10 w-10 bg-white top-10 left-10" />
            <div className="absolute h-10 w-10 bg-white bottom-0 right-0" />
            <div className="absolute h-10 w-10 bg-white bottom-10 right-10" />

            <div className="w-1/2 bg-[#D3E4ED] h-full flex justify-center items-start flex-col pl-[5%]">
                <p className="font-bold">Just Doped</p>
                <div className="text-[5rem] font-poppins">
                    <p>Feel</p>
                    <p>Authentic</p>
                    <p>Peace</p>
                </div>

                <button className="bg-black text-white px-6 py-2 text-sm">
                    Shop Now
                </button>
            </div>

            <div className="w-1/2 bg-starbuy-product h-full">
                <img src="/assets/images/banner.gif" alt="" className="h-full w-full object-cover" />
            </div>
        </div>
    );
}

export default Banner;
