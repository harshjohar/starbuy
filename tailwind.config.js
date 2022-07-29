/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            poppins: ["poppins", "sans-serif"],
        },
        extend: {
            colors: {
                starbuy: {
                    primary: "#3344dd",
                    secondary: "#df443a",
                    text: "#000000",
                    subtext: "#8f8de8",
                    product: "#eeff88",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
