import React,{memo,useEffect} from 'react'
import Tilt from 'react-parallax-tilt';





const SingleItem = ({ currentId, setCurrentId, editMessage, setEditMessage, inputText, setInputText, text, todo, todos, setTodos, }) => {
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

   
    

    let rndInt = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -3 : 3;
    let colors = ['#feff9c','#ff7eb9','#7afcff','#fff740','#ff65a3','#FFFF99'] 
    let num = colors[Math.floor(Math.random() * 5) + 1]

    return (

  
        <Tilt>
            
            <li style={{ background: `${num}`,  transform: `rotate(${rndInt}deg)`, margin: '1em', padding: '1em', display: 'flex', flexDirection: 'row', width: '15em',height:'17em'}} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <div  style={{overflow:'scroll', display: 'flex', flexDirection: 'column',justifyContent:'space-between', textAlign: 'center' }}>
                    <div>
                    <h2 style={{fontFamily: 'Waiting for the Sunrise, cursive',paddingTop:'1.5em' }}>{text}</h2>
                    </div>
                     <div>
                    <button onClick={completedHandler}> Check Off List </button>
                    <button onClick={editHandler}> Edit </button>
                    <button onClick={deleteHandler}> Delete </button>
                </div>
                </div>
            </li>
           
            </Tilt>
      

    )
}
export default SingleItem 
