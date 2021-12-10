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
		archiveColumn: (state, action) => {
			const targetColumn = state.find((c) => c.id === action.payload);
			return [
				...state.filter((c) => c.id !== action.payload),
				{
					id: action.payload,
					title: targetColumn.title,
					cards: targetColumn.cards,
					isActive: !targetColumn.isActive,
				},
			];
		},
	},
});

export const { addColumn, archiveColumn } = columnsSlice.actions;

export default columnsSlice.reducer;
