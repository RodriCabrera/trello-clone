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

export const listsSlice = createSlice({
	name: "lists",
	initialState,
	reducers: {
		addList: (state, action) => [
			...state,
			{
				id: state.length + 1,
				title: action.payload,
				cards: [],
				isActive: true,
			},
		],
		// removeList: (state, payload) => {
		// 	return state.lists.filter();
		// },
	},
});

export const { addList, removeList } = listsSlice.actions;

export default listsSlice.reducer;
