
import { Button, Typography, Box, TextField, Select, MenuItem } from "@material-ui/core";
// import { TextField } from "@material-ui/core/Button/TextField";
import "./Grocery.css";

const GroceryForm = ({
    currentId,
    setCurrentId,
    editMessage,
    setEditMessage,
    inputText,
    setInputText,
    todo,
    todos,
    setTodos,
    setStatus,
    status
}) => {
    const setInputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (inputText === "") {
            alert("Please fill out the text field to continue...");
        } else if (editMessage === true) {
            console.log("form:", currentId);

            setTodos(
                todos.map((item) => {
                    if (item.id === currentId) {
                        return {
                            ...item,
                            text: inputText,
                        };
                    }

                    return item;
                })
            );

            setInputText("");
            setEditMessage(false);
        } else if (inputText) {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 5000 },
            ]);
            setInputText("");
        }
    };

    const statusHandler = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    };
    let optionLabel = "filter by status"
    return (
        <Box id="form-bg">
             <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
                    width: "20px",
               
          }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "yellow",
            }}
          ></div>
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "red" }}
          ></div>
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "blue" }}
          ></div>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "white",
            }}
          ></div>
        </div>
            <Typography variant={'h3'} style={{ margin: "0 auto", paddingTop: "5vh" }}>Grocery List</Typography>
            <form>
                <TextField 
                    inputProps={{style: {fontSize: 40,padding: "1rem",display:'flex',flexGrow:1,fontFamily: 'Waiting for the Sunrise, cursive',textAlign:'center',fontWeight:'bolder'}}}
                    // style={{ }}
                    value={inputText}

                    
                    onChange={setInputTextHandler}
                    type="text"
                    placeholder="Grocery Item?"
                />

                <Button style={{marginTop:'1em', backgroundColor: 'darkgoldenrod', width: '80%', color:'white', fontSize:'xx-large'}}  onClick={submitTodoHandler}>
                  Add 
                </Button>
                <br />
                <br />
                <Typography variant={'h4'} style={{padding:'1em'}}>Filter grocery list status</Typography>
                {/* <select className="select-css" onChange={statusHandler} name="" id="">
                    <option value="all ">Filter options ⟱</option>
                    <option value="all ">All</option>
                    <option value="completed">Check Off List</option>
                    <option value="incomplete">Still Need</option>
                </select> */}
                <Select disableUnderline label={status} value={status} className="select-css" onChange={statusHandler} name="" id="">
                    {/* <MenuItem MenuItem value={'all'}>Filter options ⟱</MenuItem> */}
                    <MenuItem value={'all'}> <h3>All Items</h3></MenuItem>
                    <MenuItem value={'completed'}><h3>Check Off List</h3></MenuItem>
                    <MenuItem value={'incomplete'}><h3>Still Need</h3></MenuItem>
                </Select>
            </form>
        </Box >
    );
};
export default GroceryForm;
