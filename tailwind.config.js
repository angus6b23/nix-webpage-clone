/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nixlightblue: "rgb(126 186 228 / var(--tw-bg-opacity))",
        nixlighterblue: "#f2f8fd",
        nixdarkblue: "rgb(82 119 195 / var(--tw-text-opacity))",
        nixdarkerblue: "rgb(39 56 93 / var(--tw-bg-opacity))",
        nixsemidarkblue: "rgb(64 93 153 / var(--tw-text-opacity))",
        nixgreen: "rgb(106 213 65 / var(--tw-text-opacity))",
      },
      backgroundImage: {
        coverBackdrop: "url('/assets/cover-bg.svg')",
        featureBackdrop: "url('/assets/feature-bg.svg')",
        divider: "url('/assets/search-bottom.svg')",
      },
      fontFamily: {
        heading:
          'Overpass,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
        roboto: 'Roboto,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
      },
      fontWeight: {
        extralight: 300
      }
    },
  },
  plugins: [],
};
