const theme = {
	color: {
		lightGray: "#ededed",
		background: "#addcff",
		transparentMid: "#00000045",
		text: {
			main: "#172b4d",
		},
	},

	height: {
		header: "3.5rem",
	},

	width: {
		navCollapsed: "5rem",
		navExpanded: `clamp(16rem, 20%, 25rem)`,
		editorSidebar: "23rem",
	},

	fontSize: {
		textXs: "0.75rem",
		textSm: "0.875rem",
		textBase: "1rem",
		textLg: "1.125rem",
		textXl: "1.25rem",
		text2xl: "1.5rem",
		text3xl: "1.875rem",
		text4xl: "2.25rem",
		text5xl: "3rem",
		text6xl: "4rem",
	},

	borderRadius: {
		rounded: "0.25rem",
		roundedMd: "0.375rem",
		roundedLg: "1.1rem",
		roundedXL: "2rem",
		roundedFull: "9999px",
	},

	transition: {
		default: "0.5s ease",
	},

	shadow: {
		containerShadow: "0 2px 12px 0 rgba(9, 75, 140, 0.17)",
		shadowMd:
			"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		shadowLg:
			"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		shadowXl:
			"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
	},
};

export default theme;
