import React from "react";
import { useDispatch } from "react-redux";
import CardModal from "../CardModal";
import { Container, Title, ListItem } from "./Card.styles";
import {
  archiveCard,
  duplicateCard,
  switchCard,
} from "../../slices/boardSlice";
import { useDrag } from "react-dnd";
import OptionsDropdown from "../OptionsDropdown";

const Card = ({ title, cardId, col }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showDrop, setShowDrop] = React.useState(false);
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",
    item: { cardId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(
          switchCard({
            cardId,
            nextCol: dropResult.columnId,
            activeColumn: col.id,
          })
        );
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.2 : 1;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleArchive = (e) => {
    e.stopPropagation();
    dispatch(archiveCard({ cardId, columnId: col.id }));
  };

  const handleDuplicate = (e) => {
    e.stopPropagation();
    setShowDrop(false);
    dispatch(duplicateCard({ cardId, columnId: col.id }));
  };
  return (
    <div ref={drag} style={{ opacity: opacity }}>
      <Container onClick={openModal}>
        <Title>{title}</Title>
        <OptionsDropdown
          title={"Card actions"}
          showDrop={showDrop}
          setShowDrop={setShowDrop}
        >
          <ListItem onClick={handleDuplicate}>Duplicate Card</ListItem>
          <ListItem onClick={handleArchive}>Archive card</ListItem>
        </OptionsDropdown>
      </Container>
      <CardModal
        cardId={cardId}
        title={title}
        show={showModal}
        onClose={closeModal}
        col={col}
      />
    </div>
  );
};

export default Card;
