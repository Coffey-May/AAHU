import { Container } from "@material-ui/core";
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

  // const onClose = () => {
  //     window.opener = null;
  //     window.open("", "_self");
  //     window.close();
  // };

  // if (currentUser === null) {
  //     return (
  //         <div>
  //             <h2>Please log in to use this feature</h2>

  //             <NavLink to="/login" style={{ paddingTop: '2px', textDecoration: 'none', color: 'white' }} className="chi nav-link">
  //                 <button class="glow-on-hover" type="button">Log In</button>
  //             </NavLink>

  //         </div>
  //     )
  // } else if (currentUser != null && localStorage.getItem("todo_user")) {
  return (
   
    <>
      <div
      id="mondrian"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", height: '100vh' }}
    >
   <Container>
      <div
     
        style={{
        
          height: "50vh",
          margin: "2em",
       
          
          display: "flex", flexDirection: "row", flexWrap: "wrap"
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
          status={status} />
            </div>
            
          <div style={{ width: "50vw", height: "80vh" }}>
          <GroceryList
          currentId={currentId}
          setCurrentId={setCurrentId}
          editMessage={editMessage}
          setEditMessage={setEditMessage}
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos} />
          </div>
            
        </div>
        
        
     </Container>
    {/* </div><div style={{ width: '100vw', minHeight: '60vh', backgroundColor: 'white' }}> */}



      </div>
    </>
   
  );
};

export default GroceryListApp;
