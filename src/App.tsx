import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { addItem, changeItemsName } from "./features/todoList/slice/todoSlice";
import { Item } from "./features/todoList/types/itemType";
import { useState } from "react";

function App() {
  const todo = useSelector((state: RootState) => state.todo.items);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  const handleClick = () => {
    if (todo[0]) {
      dispatch(changeItemsName({ id: todo[0].id, name }));
    } else {
      const testItem: Item = {
        id: "01",
        finishDate: new Date(),
        name: name,
        imageLink: "",
        audioLink: "",
        finished: false,
        subtasks: [],
      };
      dispatch(addItem(testItem));
    }
    alert(
      "New Item dispatch. The entered text should be visible on screen after you close this!"
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    setName(name);
  };

  return (
    <div>
      <button onClick={handleClick}>Test Redux!</button>
      <br />
      <label>Enter Text: </label>
      <input value={name} onChange={handleChange} />
      <p>
        This is the todo text:{" "}
        {todo[0] ? todo[0].name : "todo[0] currently undefined"}
      </p>
    </div>
  );
}

export default App;
