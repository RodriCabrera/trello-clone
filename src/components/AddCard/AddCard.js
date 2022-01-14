import React from "react";
import {
  Button,
  ButtonGroup,
  Close,
  Container,
  Form,
  TextArea,
} from "./AddCard.styles";
import { useDispatch } from "react-redux";
import { addCard } from "../../slices/boardSlice";

const AddCard = ({ columnId }) => {
  const [cardTitle, setCardTitle] = React.useState("");
  const dispatch = useDispatch();
  const btnRef = React.useRef(null);
  const handleChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ cardTitle, columnId }));
    setCardTitle("");
    btnRef.current.blur();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder="+ Add a card"
          value={cardTitle}
          onChange={handleChange}
          required
        />
        <ButtonGroup>
          <Button ref={btnRef} type="submit">
            Add card
          </Button>
          <Close />
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default AddCard;
