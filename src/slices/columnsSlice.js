import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      {
        id: uuid(),
        title: "DY-01 / Agregar Listas",
        description: "Información Sobre DY-01 / Agregar Listas",
        isActive: true,
      },
    ],
    isActive: true,
  },
  {
    id: 2,
    title: "To-do",
    cards: [
      {
        id: 2,
        title: "DY-02 / Implementar Redux store",
        description:
          "Texto sobre la implementación del Redux Store. DY-02 / Implementar Redux store.",
        isActive: true,
      },
    ],
    isActive: true,
  },
  {
    id: 3,
    title: "Doing",
    cards: [
      {
        id: 3,
        title: "DY-03 / Agregar Columnas",
        description: "Columnas. También llamadas listas.",
        isActive: true,
      },
    ],
    isActive: true,
  },
];

export const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    // COLUMN ACTIONS:
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
        id: uuid(),
      });
      // Al duplicar la columna hay que generar distintos ids para las cards duplicadas
      return [...state, newColumn];
    },
    // CARD ACTIONS
    addCard: (state, action) => {
      const targetColumn = state.find((c) => c.id === action.payload.columnId);
      const index = state.indexOf(targetColumn);
      state[index].cards.push({
        id: uuid(),
        title: action.payload.cardTitle,
        description: "",
        isActive: true,
      });
    },
    archiveCard: (state, action) => {
      const targetColumn = state.find((c) => c.id === action.payload.columnId);
      const columnIndex = state.indexOf(targetColumn);
      const targetCard = state[columnIndex].cards.find(
        (card) => card.id === action.payload.cardId
      );
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      state[columnIndex].cards[cardIndex].isActive = false;
    },
    duplicateCard: (state, action) => {
      const targetColumn = state.find((c) => c.id === action.payload.columnId);
      const columnIndex = state.indexOf(targetColumn);
      const targetCard = state[columnIndex].cards.find(
        (card) => card.id === action.payload.cardId
      );
      const newCard = { ...targetCard };
      newCard.id = uuid();
      state[columnIndex].cards.push(newCard);
    },
    switchCard: (state, action) => {
      const targetColumn = state.find(
        (c) => c.id === action.payload.activeColumn
      );
      const targetCard = targetColumn.cards.find(
        (card) => card.id === action.payload.cardId
      );
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      targetColumn.cards.splice(cardIndex, 1);
      const nextColumn = state.find((col) => col.id === action.payload.nextCol);
      nextColumn.cards.push(targetCard);
    },
    editCardTitle: (state, action) => {
      const targetColumn = state.find(
        (col) => col.id === action.payload.col.id
      );
      const targetCard = targetColumn.cards.find(
        (card) => card.id === action.payload.cardId
      );
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      const columnIndex = state.indexOf(targetColumn);
      state[columnIndex].cards[cardIndex].title = action.payload.cardTitle;
    },
    editCardDescription: (state, action) => {
      const targetColumn = state.find(
        (col) => col.id === action.payload.col.id
      );
      const targetCard = targetColumn.cards.find(
        (card) => card.id === action.payload.cardId
      );
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      const columnIndex = state.indexOf(targetColumn);
      state[columnIndex].cards[cardIndex].description =
        action.payload.cardDescription;
    },
  },
});

export const {
  addColumn,
  archiveColumn,
  editColumnTitle,
  duplicateColumn,
  addCard,
  archiveCard,
  duplicateCard,
  switchCard,
  editCardTitle,
  editCardDescription,
} = columnsSlice.actions;

export default columnsSlice.reducer;
