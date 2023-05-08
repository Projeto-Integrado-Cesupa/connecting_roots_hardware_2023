/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#141325", 
        headingColor: "#081e21",
        smallTextColor: "#65a675",
      },
      backgroundImage: {
        'img-person': "url('./assets/images/person.jpg')",
        'img-personBg' : "url('./assets/images/imgpersonbg.jpg')",
      },
    },
  },
  plugins: [
  
 ],
};
