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
		editColumnTitle: (state, action) => {
			return [
				...state.map((c) =>
					c.id === action.payload.id
						? Object.assign({}, c, { title: action.payload.title })
						: c
				),
			];
		},
		duplicateColumn: (state, action) => {
			const targetColumn = state.find((c) => c.id === action.payload);
			const newColumn = Object.assign({}, targetColumn, {
				id: state.length + 1,
			});
			return [...state, newColumn];
		},
	},
});

export const { addColumn, archiveColumn, editColumnTitle, duplicateColumn } =
	columnsSlice.actions;

export default columnsSlice.reducer;
