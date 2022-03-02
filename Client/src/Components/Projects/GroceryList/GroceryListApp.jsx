import React, { useState, useEffect, useCallback } from "react";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";

const GroceryListApp = () => {
  // const { currentUser } = useAuth();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editMessage, setEditMessage] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const filterHandler = useCallback(
    (e) => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "incomplete":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    },
    [todos, status]
  );

  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();

    saveLocalTodos();
  }, [todos, status, filterHandler, saveLocalTodos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <div
        id="mondrian"
        style={{
          overflow: " hidden",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div>
          <GroceryForm
            currentId={currentId}
            setCurrentId={setCurrentId}
            editMessage={editMessage}
            setEditMessage={setEditMessage}
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
            status={status}
          />
        </div>

        <div>
          <GroceryList
            currentId={currentId}
            setCurrentId={setCurrentId}
            editMessage={editMessage}
            setEditMessage={setEditMessage}
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </>
  );
};

export default GroceryListApp;
