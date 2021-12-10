import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "DY-01 / Agregar Listas",
		inColumn: 1,
		isActive: true,
	},
	{
		id: 2,
		title: "DY-02 / Implementar Redux store",
		inColumn: 2,
		isActive: true,
	},
	{
		id: 3,
		title: "DY-03 / Agregar Columnas",
		inColumn: 3,
		isActive: true,
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
				isActive: true,
			},
		],
		archiveCard: (state, action) => {
			const targetCard = state.find((c) => c.id === action.payload);
			return [
				...state.filter((c) => c.id !== targetCard.id),
				{
					id: targetCard.id,
					title: targetCard.title,
					inColumn: targetCard.inColumn,
					isActive: false,
				},
			];
		},
		editCardTitle: (state, action) => {},
	},
});

export const { addCard, archiveCard, editCardTitle } = cardsSlice.actions;

export default cardsSlice.reducer;
