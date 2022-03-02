import React from "react";
import SingleListItem from "./SingleListItem";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const MessageList = ({
  list,
  handleDelete,
  handleEdit,
  setFormData,
  formData,
  setList,
  setError,
}) => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "inline-block",
        overflowX: "auto",

        marginTop: "2em",
        width: "100vw",
      }}
    >
      {/* <div style={{ backgroundColor: "navy", padding: "1em" }}></div> */}

      <table
        className={classes.entryTable}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontWeight: "bolder",
          padding: "3em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <caption>
          <Typography
            variant={"h6"}
            style={{
              color: "white",
              backgroundColor: "navy",
              padding: "1em",
              textAlign: "left",
            }}
          >
            Entries
          </Typography>
        </caption>
        <tr style={{ textAlign: "left" }}>
          <th style={{ padding: "1em", width: "10%" }}>EMAIL</th>
          <th style={{ padding: "1em", width: "10%" }}>FIRST NAME</th>
          <th style={{ padding: "1em", width: "10%" }}>LAST NAME</th>
          <th style={{ padding: "1em", width: "10%" }}>USER NAME</th>
          <th style={{ padding: "1em", width: "10%" }}>NATIONALITY</th>
          <th style={{ padding: "1em", width: "10%" }}>OTHER</th>
          <th style={{ padding: "1em", width: "20%" }}>ACTIONS</th>
        </tr>
        {list.map((elem) => (
          <SingleListItem
            setError={setError}
            list={list}
            setList={setList}
            formData={formData}
            setFormData={setFormData}
            key={elem.id}
            elem={elem}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </table>
    </div>
  );
};

export default MessageList;
