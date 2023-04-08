/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: { "100": "#f2f9f9", "200": "#eff7f7" },
        darkslateblue: { "100": "#242757", "200": "rgba(53, 83, 163, 0.2)" },
        gray: { "100": "#767676", "200": "#212121" },
        white: "#fff",
        seagreen: { "100": "#06906f", "200": "rgba(6, 144, 111, 0.15)" },
        black: "#000",
        mistyrose: "#fdd3d3",
        gold: {
          "100": "#ffd502",
          "200": "rgba(255, 213, 2, 0.2)",
          "300": "rgba(255, 213, 2, 0.6)",
          "400": "rgba(255, 213, 2, 0.4)",
        },
        silver: "#c7c7c7",
        orange: "#fbbc05",
        lightcyan:"#DAFFF6",
        
      },
      fontFamily: {
        poppins: "Poppins",
        "kumbh-sans": "'Kumbh Sans'",
        "playfair-display": "'Playfair Display'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
        "41xl": "60px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      "5xl": "24px",
      lg: "18px",
      "3xl": "22px",
      smi: "13px",
      "29xl": "48px",
    },
  },
  corePlugins: { preflight: false },
};
