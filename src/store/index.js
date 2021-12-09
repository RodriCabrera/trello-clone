import { configureStore } from "@reduxjs/toolkit";
import columnsReducer from "../slices/columnsSlice";
import cardsReducer from "../slices/cardsSlice";

export const store = configureStore({
	reducer: { columns: columnsReducer, cards: cardsReducer },
});
