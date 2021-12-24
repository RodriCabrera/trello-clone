import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid'

const initialState = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      {
        id: 1,
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
        id: state.length + 1,
      });
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
    archiveCard: (state, action) => {},
  },
});

export const {
  addColumn,
  archiveColumn,
  editColumnTitle,
  duplicateColumn,
  addCard,
  archiveCard,
} = columnsSlice.actions;

export default columnsSlice.reducer;
