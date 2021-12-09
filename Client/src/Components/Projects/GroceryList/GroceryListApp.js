import React, { useState, useEffect, useCallback } from 'react'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'
// import { FaCopyright } from 'react-icons/fa';
// import { useAuth } from "../../AuthContext"
import { NavLink } from "react-router-dom";
// import "./ToDo.css"
//Todo Component 
const GroceryListApp = () => {
    // const { currentUser } = useAuth();
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])
    const [editMessage, setEditMessage] = useState(false)
    const [currentId, setCurrentId] = useState(0)

    const filterHandler = useCallback((e) => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true))
                break;
            case "incomplete":
                setFilteredTodos(todos.filter((todo) => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }, [todos, status]);


    const saveLocalTodos = useCallback(() => {

        localStorage.setItem("todos", JSON.stringify(todos))


    }, [todos]);

    useEffect(() => {
        getLocalTodos()
    }, [])
    useEffect(() => {

        filterHandler()

        saveLocalTodos()
    }, [todos, status, filterHandler, saveLocalTodos])



    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }

    const onClose = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };

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
        <div>
            <div id="mondrian" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                <div id="form-bg" style={{ width: '30vw', minHeight: '80vh', margin: '2em', marginTop: '15vh' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '20px' }}>
                        <div style={{ height: '10px', width: '10px', backgroundColor: 'yellow' }}></div>
                        <div style={{ height: '10px', width: '10px', backgroundColor: 'red' }}></div>
                        <div style={{ height: '10px', width: '10px', backgroundColor: 'blue' }}></div>
                        <div style={{ height: '10px', width: '10px', backgroundColor: 'white' }}></div>
                    </div>
                    <h1 style={{ margin: '0 auto', paddingTop: '5vh' }}>Grocery List</h1>

                    <GroceryForm
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                        editMessage={editMessage}
                        setEditMessage={setEditMessage}
                        todos={todos}
                        setTodos={setTodos}
                        inputText={inputText}
                        setInputText={setInputText}
                        setStatus={setStatus} />
                </div>
                <div style={{ width: '60vw', height: '80vh' }}>
                    {/* <button style={{ fontWeight: '200', margin: '1em', width: '3em', height: '3em', color: 'black', marginTop: '15vh' }} onClick={onClose}>X</button> */}
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
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                {/* <FaCopyright /> COPYRIGHT{new Date().getFullYear()} */}
            </footer>
        </div >
    )
}
// }
export default GroceryListApp