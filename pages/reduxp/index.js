import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName } from "../../features/user/userSlice.ts";
import { addTodo } from "../../features/todo/todoSlice.ts";
import uniqid from "uniqid";
import { useState } from "react";

export default function ReduxExample() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const todoArr = useSelector((state) => state.todos.todos);
  const [todoInput, setTodoInput] = useState("");
  const addTodoHandler = () => {
    const todo = {
      id: uniqid(),
      text: todoInput,
      completed: false,
    };
    if (todo.text !== "") {
      dispatch(addTodo(todo));
    }
    setTodoInput("");
  };

  return (
    <div>
      <div>
        <span>Redux Toolkit State Change</span>
        <br></br>
        <input
          type="text"
          placeholder="first name"
          onInput={(e) => dispatch(setFirstName(e.target.value))}
        />
        <br></br>
        <input
          type="text"
          placeholder="last name"
          onInput={(e) => dispatch(setLastName(e.target.value))}
        />
        <div>
          <span>first name</span>
          <br></br>
          <p>{firstName}</p>
        </div>
        <div>
          <span>last name</span>
          <br></br>
          <p>{lastName}</p>
        </div>
      </div>
      <div style={{ marginTop: "25px" }}>
        <span>Redux Toolkit Todo App</span>
        <br />
        <input
          type="text"
          placeholder="type something"
          value={todoInput}
          onInput={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodoHandler}>submit</button>
        {todoArr?.map(({ id, text, completed }) => {
          return (
            <p key={id}>
              <span
                style={{
                  display: "inline-block",
                  width: "100px",
                  height: "30px",
                  backgroundColor: "green",
                  marginTop: "15px",
                  cursor: "pointer",
                }}
              >
                completed
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "200px",
                  height: "30px",
                  backgroundColor: "light-gray",
                  marginTop: "15px",
                }}
              >
                {text}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "50px",
                  height: "30px",
                  backgroundColor: "tomato",
                  marginTop: "15px",
                  cursor: "pointer",
                }}
              >
                delete
              </span>
            </p>
          );
        })}
      </div>
      <div style={{ marginTop: "25px" }}>
        <span>Redux Toolkit Async Thunk</span>
        <br />
        <button>get posts</button>
      </div>
    </div>
  );
}
