import React from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../../slices/boardSlice";
import {
  Container,
  Wrapper,
  Input,
  Button,
  Form,
  ButtonGroup,
  Close,
} from "./AddColumn.styles";

const AddList = () => {
  const [columnTitle, setColumnTitle] = React.useState("");
  const dispatch = useDispatch();
  const btnRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn(columnTitle));
    setColumnTitle("");
    btnRef.current.blur();
  };

  const handleChange = (e) => {
    setColumnTitle(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            value={columnTitle}
            name="columnTitle"
            onChange={handleChange}
            placeholder="+ Add another list"
            autoComplete="off"
            required
          />
          <ButtonGroup>
            <Button ref={btnRef} type="submit">
              Add List
            </Button>
            <Close />
          </ButtonGroup>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddList;
