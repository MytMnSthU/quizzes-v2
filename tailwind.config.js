/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {   
            colors: {
                primary: "#FFF9DE",
                secondary: "#2E4F4F",
                accent: "#081c15",
                default: "#CBE4DE",
            },
            listStyleType:{
                latin: "lower-latin"
            }
        },
    },
    plugins: [],
};
