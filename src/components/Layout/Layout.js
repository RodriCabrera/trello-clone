import React from "react";
import Board from "../Board";
import Header from "../Header";
import { Main } from "./Layout.styles";

const Layout = () => {
	return (
		<Main>
			<Header />
			<Board />
		</Main>
	);
};

export default Layout;
