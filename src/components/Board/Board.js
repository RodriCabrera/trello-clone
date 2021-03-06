import React from "react";
import { Container } from "./Board.styles";
import Column from "../Column";
import AddColumn from "../AddColumn";
import { useSelector } from "react-redux";
import Card from "../Card";
import { useSearchFilter } from "../../hooks/useSearchFilter";

const Board = () => {
  const columns = useSelector((state) => state.board.columns);
  const { searchFilter } = useSearchFilter();
  return (
    <Container>
      {columns
        .filter((col) => col.isActive)
        .map((col) => (
          <Column key={col.id} title={col.title} columnId={col.id}>
            {col.cards
              .filter(
                (card) => card.isActive && card.title.includes(searchFilter)
              )
              .map((card) => (
                <Card
                  key={card.id}
                  cardId={card.id}
                  col={col}
                  title={card.title}
                />
              ))}
          </Column>
        ))}
      <AddColumn />
    </Container>
  );
};

export default Board;
