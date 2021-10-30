module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      
    },
    boxShadow: {
      "2xl": "30px 30px 0 10px white",
      bxl: "30px -30px 0 10px white",
    },
   
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
  important: true,
}
