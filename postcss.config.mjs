/** @type {import('postcss-load-config').Config} */

const isProd = process.env.NODE_ENV === "production";

const config = {
  plugins: {
    tailwindcss: {},
    "postcss-pxtorem": {
      propList: ["*"],
      mediaQuery: true,
    },
  },
};

export default config;

// ...(isProd
// 	? {
// 			"postcss-pxtorem": {
// 				propList: ["*"],
// 				mediaQuery: true,
// 			},
// 		}
// 	: {}),
