import React from "react";
import SingleItem from "./SingleItem";

const GroceryList = ({
  currentId,
  setCurrentId,
  editMessage,
  setEditMessage,
  inputText,
  setInputText,
  todos,
  setTodos,
  filteredTodos,
}) => {

  
  return (
    // <div>
      <ol
        className="tilesWrap"
        style={{
          overflow: "scroll",
          display: "flex",
          flexDirection: "row",
          flexWrap:'wrap',
         
          // width:'60vw',

          

          
        }}
      >
        {filteredTodos.map((todo) => (
          <SingleItem
            currentId={currentId}
            setCurrentId={setCurrentId}
            editMessage={editMessage}
            setEditMessage={setEditMessage}
            inputText={inputText}
            setInputText={setInputText}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ol>
    // </div>
  );
};
export default GroceryList;
