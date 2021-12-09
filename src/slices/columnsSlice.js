import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "Backlog",
		Cards: [],
		isActive: true,
	},
	{
		id: 2,
		title: "To-do",
		Cards: [],
		isActive: true,
	},
	{
		id: 3,
		title: "Doing",
		Cards: [],
		isActive: true,
	},
];

export const columnsSlice = createSlice({
	name: "columns",
	initialState,
	reducers: {
		addColumn: (state, action) => [
			...state,
			{
				id: state.length + 1,
				title: action.payload,
				cards: [],
				isActive: true,
			},
		],
	},
});

export const { addColumn, removeColumn } = columnsSlice.actions;

export default columnsSlice.reducer;
