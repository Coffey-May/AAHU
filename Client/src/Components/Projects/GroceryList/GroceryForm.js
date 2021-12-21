
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
        <Box
        >
            <form>
                <TextField
                    style={{ height: "2rem" }}
                    value={inputText}
                    onChange={setInputTextHandler}
                    type="text"
                    placeholder="Grocery Item?"
                />

                <Button className="button1" onClick={submitTodoHandler}>
                    Add
                </Button>
                <br />
                <br />
                <Typography style={{}}>Filter grocery list status</Typography>
                <select className="select-css" onChange={statusHandler} name="" id="">
                    <option value="all ">Filter options ⟱</option>
                    <option value="all ">All</option>
                    <option value="completed">Check Off List</option>
                    <option value="incomplete">Still Need</option>
                </select>
                <Select label={status} value={status} className="select-css" onChange={statusHandler} name="" id="">
                    {/* <MenuItem MenuItem value={'all'}>Filter options ⟱</MenuItem> */}
                    <MenuItem value={'all'}>All Items</MenuItem>
                    <MenuItem value={'completed'}>Check Off List</MenuItem>
                    <MenuItem value={'incomplete'}>Still Need</MenuItem>
                </Select>
            </form>
        </Box >
    );
};
export default GroceryForm;
