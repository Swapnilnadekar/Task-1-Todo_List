import { useState } from "react";
import "./App.css";
import ToDoLists from "./Components/ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const textAdd = (input) => {
    setInputList(input.target.value);
  };

  const Add = () => {
    if (!inputList) {
      return;
    }
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteTask = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app_container">
      <div className="main_container">
        <h2>My Todo List</h2>
        <div className="input_btn_container">
          <input
            type="text"
            placeholder="Add a Title..."
            value={inputList}
            onChange={textAdd}
            className={!inputList ? "input_box" : "box"}
          />
          <button onClick={Add} className="buttons">
            Add
          </button>
        </div>
        <div className="item_list">
          {Items.map((itemList, index) => {
            return (
              <ToDoLists
                key={index}
                id={index}
                text={itemList}
                onSelect={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
