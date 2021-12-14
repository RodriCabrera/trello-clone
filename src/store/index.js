import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import columnsReducer from "../slices/columnsSlice";
import cardsReducer from "../slices/cardsSlice";

const rootReducer = combineReducers({
	columns: columnsReducer,
	cards: cardsReducer,
});
export const store = configureStore({
	reducer: rootReducer,
});
