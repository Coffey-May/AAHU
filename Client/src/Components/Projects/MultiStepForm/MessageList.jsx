import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button"

const MessageList = ({list, handleDelete}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.messages}
      style={{
        backgroundColor: "rgba(245,245,245)",
        padding: "1em",
        display: "inline-block",

        // flexGrow: 1,
      }}
    >
      <div>
        {list.map((elem) => (

          <div style={{display:'flex',flexDirection:'row'}} >
          <h2>{elem.nationality}dfdf</h2>
            <Button onClick={()=>handleDelete(elem.nationality)}>X</Button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
