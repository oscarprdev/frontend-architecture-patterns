/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../libs/ui/src/**/*.{vue,js,ts,jsx,tsx}",
    "../../features/flights/src/**/*.{vue,js,ts,jsx,tsx}",
    "../../features/hotels/src/**/*.{vue,js,ts,jsx,tsx}",
    "../../features/widgets/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
