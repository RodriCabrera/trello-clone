import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  columns: [
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
  ],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    // COLUMN ACTIONS:
    addColumn(state, action) {
      state.columns.push({
        id: uuid(),
        title: action.payload,
        cards: [],
        isActive: true,
      });
    },

    archiveColumn(state, action) {
      const columnsIds = state.columns.map((col) => col.id);
      const columnIndex = columnsIds.indexOf(action.payload);
      state.columns[columnIndex].isActive = false;
    },

    editColumnTitle(state, action) {
      const { columnId, newTitle } = action.payload;
      const columnsIds = state.columns.map((col) => col.id);
      const columnIndex = columnsIds.indexOf(columnId);
      state.columns[columnIndex].title = newTitle;
    },

    duplicateColumn(state, action) {
      const columnId = action.payload;
      const targetColumn = state.columns.find((col) => col.id === columnId);
      const newCards = targetColumn.cards.map((card) => {
        return { ...card, id: uuid() };
      });
      const newColumn = Object.assign({}, targetColumn, {
        id: uuid(),
        cards: newCards,
      });

      state.columns.push(newColumn);
    },

    // CARD ACTIONS
    addCard(state, action) {
      const { cardTitle, columnId } = action.payload;
      const columnIds = state.columns.map((col) => col.id);
      const columnIndex = columnIds.indexOf(columnId);
      state.columns[columnIndex].cards.push({
        id: uuid(),
        title: cardTitle,
        description: "",
        isActive: true,
      });
    },

    archiveCard(state, action) {
      const { cardId, columnId } = action.payload;
      const targetColumn = state.columns.find((c) => c.id === columnId);
      const columnIndex = state.columns.indexOf(targetColumn);
      const targetCard = state.columns[columnIndex].cards.find(
        (card) => card.id === cardId
      );
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      state.columns[columnIndex].cards[cardIndex].isActive = false;
    },

    duplicateCard: (state, action) => {
      const { cardId, columnId } = action.payload;
      const targetColumn = state.columns.find((c) => c.id === columnId);
      const columnIndex = state.columns.indexOf(targetColumn);
      const targetCard = state.columns[columnIndex].cards.find(
        (card) => card.id === cardId
      );
      const newCard = { ...targetCard };
      newCard.id = uuid();
      state.columns[columnIndex].cards.push(newCard);
    },

    switchCard: (state, action) => {
      const { cardId, nextCol, activeColumn } = action.payload;
      const targetColumn = state.columns.find((c) => c.id === activeColumn);
      const targetCard = targetColumn.cards.find((card) => card.id === cardId);
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      targetColumn.cards.splice(cardIndex, 1);
      const nextColumn = state.columns.find((col) => col.id === nextCol);
      nextColumn.cards.push(targetCard);
    },

    editCardTitle: (state, action) => {
      const { cardId, cardTitle, col } = action.payload;
      const targetColumn = state.columns.find((c) => c.id === col.id);
      const targetCard = targetColumn.cards.find((card) => card.id === cardId);
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      const columnIndex = state.columns.indexOf(targetColumn);
      state.columns[columnIndex].cards[cardIndex].title = cardTitle;
    },

    editCardDescription: (state, action) => {
      const { cardId, cardDescription, col } = action.payload;
      const targetColumn = state.columns.find((c) => c.id === col.id);
      const targetCard = targetColumn.cards.find((card) => card.id === cardId);
      const cardIndex = targetColumn.cards.indexOf(targetCard);
      const columnIndex = state.columns.indexOf(targetColumn);
      state.columns[columnIndex].cards[cardIndex].description = cardDescription;
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
} = boardSlice.actions;

export default boardSlice.reducer;
