import React from 'react'
import Tilt from 'react-parallax-tilt';





const SingleItem = ({ currentId, setCurrentId, editMessage, setEditMessage, inputText, setInputText, text, todo, todos, setTodos }) => {
    const completedHandler = e => {
        e.preventDefault();
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    const deleteHandler = e => {
        e.preventDefault();
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const editHandler = (e) => {
        todos.map((item) => {
            if (item.id === todo.id) {
                setEditMessage(true)
                setInputText(item.text)
                setCurrentId(item.id)
                console.log('single:', item.id)
            }
            return item
        })
    }
    return (

        <div className="gradient-border" id="box" style={{ margin: '5px', textAlign: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '20px' }}>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'yellow' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'red' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'blue' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'white' }}></div>
            </div>
            <Tilt>
                <li style={{margin:'0 auto',padding:'.5em',display: 'flex', flexDirection: 'row', width: '40vw', color: 'white' }} className={`todo-item ${todo.completed ? "completed" : ""}`}>


                    <h4 style={{fontFamily: 'Waiting for the Sunrise, cursive', letterSpacing: '.25em', margin: '0 auto', padding: '5px' }}>{text}</h4>
                    <br />
                    <button onClick={completedHandler}> Check Off List </button>
                    <button onClick={editHandler}> Edit </button>
                    <button onClick={deleteHandler}> Delete </button>
                </li>
            </Tilt>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '20px' }}>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'yellow' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'red' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'blue' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'white' }}></div>
            </div>

        </div>
    )
}
export default SingleItem