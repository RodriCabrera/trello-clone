import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => [
      ...state,
      {
        id: state.length + 1,
        title: action.payload.title,
        description: "",
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
    editCardTitle: (state, action) => {
      return [
        ...state.map((c) =>
          c.id === action.payload.id
            ? Object.assign({}, c, { title: action.payload.title })
            : c
        ),
      ];
    },
    editCardDescription: (state, action) => {
      return [
        ...state.map((c) =>
          c.id === action.payload.id
            ? Object.assign({}, c, { description: action.payload.description })
            : c
        ),
      ];
    },
    switchCard: (state, action) => {
      const targetCard = state.find((c) => c.id === action.payload.cardId);
      return [
        ...state.filter((c) => c.id !== targetCard.id),
        Object.assign({}, targetCard, { inColumn: action.payload.nextCol }),
      ];
    },
    duplicateCard: (state, action) => {
      const targetCard = state.find((c) => c.id === action.payload.cardId);
      return [
        ...state,
        Object.assign({}, targetCard, { id: state.length + 1 }),
      ];
    },
  },
});

export const {
  addCard,
  archiveCard,
  editCardTitle,
  editCardDescription,
  switchCard,
  duplicateCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
