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
        'img-person': "url('./assets/images/person.png')",
        'img-personBg' : "url('./assets/images/imgpersonbg.jpg')",
        'img-friend1' : "url('./assets/images/friendon1.png')",
        'img-friend2' : "url('./assets/images/friendon2.png')",
        'img-friend3' : "url('./assets/images/friendon3.png')",
        'img-carbonfree' : "url('./assets/images/carbonfree.png')",
        'img-carbonwallpaper' : "url('./assets/images/carbonwallpaper.png')",
      },
    },
  },
  plugins: [
  
 ],
};
