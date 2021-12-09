import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "DY-01 / Agregar Listas",
		inColumn: 1,
	},
	{
		id: 2,
		title: "DY-02 / Implementar Redux store",
		inColumn: 2,
	},
	{
		id: 3,
		title: "DY-03 / Agregar Columnas",
		inColumn: 3,
	},
];

export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		addCard: (state, action) => [
			...state,
			{
				id: state.length + 1,
				title: action.payload.title,
				inColumn: action.payload.position,
			},
		],
		removeCard: (state, action) => [
			state.filter((c) => c.id !== action.payload),
		],
	},
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
