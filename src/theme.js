const theme = {
	color: {
		lightGray: "#ededed",
		gray: "#ebecf0",
		darkGray: "#5e6c84",
		lightBlue: "#addcff",
		blue: "#0079bf",
		background: "#0079bf",
		transparent: "rgba(0, 0, 0, 0)",
		transparentLow: "#00000045",
		transparentMid: "#ffffff3d",
		transparentHigh: "#00000010",

		text: {
			main: "#172b4d",
		},
	},
	blur: {
		light: "blur(2px)",
		mid: "blur(4px)",
		high: "blur(6px)",
	},
	height: {
		header: "3.5rem",
	},

	width: {
		column: "272px",
		navCollapsed: "5rem",
		navExpanded: `clamp(16rem, 20%, 25rem)`,
		editorSidebar: "23rem",
	},
	padding: { card: { body: "6px 8px 2px" }, column: { title: "4px 8px" } },

	borderRadius: {
		rounded: "3px",
	},

	transition: {
		fast: ".1s ease-in",
		default: "0.3s ease-in",
	},

	// shadow: {
	// 	containerShadow: "0 2px 12px 0 rgba(9, 75, 140, 0.17)",
	// 	shadowMd:
	// 		"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
	// 	shadowLg:
	// 		"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
	// 	shadowXl:
	// 		"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
	// },
};

export default theme;
