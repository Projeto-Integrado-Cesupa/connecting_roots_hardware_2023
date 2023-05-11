/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#141325", 
        secondColor: "#64b48c",
        headingColor: "#081e21",
        smallTextColor: "#65a675",
        analysis: "#ff9915",
      },
      backgroundImage: {
        'img-person': "url('./assets/images/person.png')",
        'img-personBg' : "url('./assets/images/imgpersonbg.jpg')",
        'img-friend1' : "url('./assets/images/friendon1.png')",
        'img-friend2' : "url('./assets/images/friendon2.png')",
        'img-friend3' : "url('./assets/images/friendon3.png')",
        'img-carbonfree' : "url('./assets/images/carbonfree.jpg')",
        'img-carbonwallpaper' : "url('./assets/images/carbonwallpaper.png')",
        'img-cesupa' : "url('./assets/images/cesupa.png')",
        'img-member' : "url('./assets/images/man.png')",
        'img-project' : "url('./assets/images/projeto.png')",
        'img-enzo' : "url('./assets/images/enzo.png')",
        'img-publish' : "url('./assets/images/img-publish.png')",
      },
    },
  },
  plugins: [
  
 ],
};
