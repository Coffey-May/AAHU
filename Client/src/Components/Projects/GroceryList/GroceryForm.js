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
    return (
        <div>
            <form>
                <input
                    style={{ height: "2rem" }}
                    value={inputText}
                    onChange={setInputTextHandler}
                    type="text"
                    placeholder="Grocery Item?"
                />

                <button className="button1" onClick={submitTodoHandler}>
                    Add
                </button>
                <br />
                <br />
                <h2 style={{}}>𝔽𝕚𝕝𝕥𝕖𝕣 𝕚𝕥𝕖𝕞𝕤 𝕓𝕪 𝕤𝕥𝕒𝕥𝕦𝕤.</h2>
                <select className="select-css" onChange={statusHandler} name="" id="">
                    <option value="all ">Filter options ⟱</option>
                    <option value="all ">All</option>
                    <option value="completed">Check Off List</option>
                    <option value="incomplete">Still Need</option>
                </select>
            </form>
        </div>
    );
};
export default GroceryForm;
