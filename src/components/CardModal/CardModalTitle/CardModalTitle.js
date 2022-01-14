import React from "react";
import { useDispatch } from "react-redux";
import { editCardTitle } from "../../../slices/boardSlice";
import { Title } from "./CardModalTitle.styles";

const CardModalTitle = ({ title, cardId, col }) => {
  const [cardTitle, setCardTitle] = React.useState(title);
  const [hasModifications, setHasModifications] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setHasModifications(true);
    setCardTitle(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      e.target.blur();
    }
  };
  const handleBlur = () => {
    if (hasModifications) {
      console.log(cardTitle);
      dispatch(editCardTitle({ cardId, cardTitle, col }));
      setHasModifications(false);
    }
  };
  return (
    <Title
      rows={1}
      value={cardTitle}
      onChange={handleChange}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
    />
  );
};

export default CardModalTitle;
