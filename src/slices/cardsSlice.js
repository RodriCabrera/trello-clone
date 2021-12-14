import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "DY-01 / Agregar Listas",
		description: "Información Sobre DY-01 / Agregar Listas",
		inColumn: 1,
		isActive: true,
	},
	{
		id: 2,
		title: "DY-02 / Implementar Redux store",
		description:
			"Texto sobre la implementación del Redux Store. DY-02 / Implementar Redux store.",
		inColumn: 2,
		isActive: true,
	},
	{
		id: 3,
		title: "DY-03 / Agregar Columnas",
		description: "Columnas. También llamadas listas.",
		inColumn: 3,
		isActive: true,
	},
];

export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		createCard: (state, action) => [
			...state,
			{
				id: state.length + 1,
				title: action.payload.title,
				description: "",
				inColumn: action.payload.columnId,
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
		editCardTitle: (state, action) => [
			...state.map((c) =>
				c.id === action.payload.id
					? Object.assign({}, c, { title: action.payload.title })
					: c
			),
		],
		editCardDescription: (state, action) => [
			...state.map((c) =>
				c.id === action.payload.id
					? Object.assign({}, c, { description: action.payload.description })
					: c
			),
		],
		switchCard: (state, action) => {
			const targetCard = state.find((c) => c.id === action.payload.cardId);
			return [
				...state.filter((c) => c.id !== targetCard.id),
				Object.assign({}, targetCard, { inColumn: action.payload.nextCol }),
			];
		},
	},
});

export const {
	createCard,
	archiveCard,
	editCardTitle,
	editCardDescription,
	switchCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
