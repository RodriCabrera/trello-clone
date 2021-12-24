import React from "react";
import { useDispatch } from "react-redux";
import { editCardDescription } from "../../../slices/columnsSlice";
import {
  Body,
  Button,
  ButtonGroup,
  Close,
  Description,
  Subtitle,
  Form,
} from "./CardModalDescription.styles";

const CardModalDescription = ({ cardId, col }) => {
  const targetCard = col.cards.find((card) => card.id === cardId);
  const description = targetCard;

  const dispatch = useDispatch();
  const [cardDescription, setCardDescription] = React.useState(description);
  const handleChange = (e) => {
    setCardDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCardDescription({ cardId, cardDescription, col }));
  };
  const handleClose = (e) => {
    setCardDescription(description);
  };
  return (
    <div>
      <Body>
        <Subtitle>Description</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Description
            value={
              cardDescription
                ? cardDescription
                : "Add a more detailed description..."
            }
            onChange={handleChange}
          />

          <ButtonGroup>
            <Button type="submit">Save</Button>
            <button
              type="button"
              onClick={handleClose}
              style={{ border: "none" }}
            >
              <Close />
            </button>
          </ButtonGroup>
        </Form>
      </Body>
    </div>
  );
};

export default CardModalDescription;
