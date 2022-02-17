import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ToDoLists.css";

const ToDoLists = (props) => {
  const [line, setLine] = useState(false);

  const check_true = () => {
    setLine(true);
  };

  return (
    <div className={line ? "todo_list_container" : "todo_container"}>
      <div className="text">{props.text}</div>
      <div className="check_clear_icon" key={props.id}>
        <CheckIcon className="check" onClick={check_true}></CheckIcon>
        <DeleteIcon
          className="clear"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></DeleteIcon>
      </div>
    </div>
  );
};

export default ToDoLists;
