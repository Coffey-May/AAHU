import React, { useState } from "react";
import {useStyles} from "./styles";
import SingleListItem from './SingleListItem'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const MessageList = ({ list, handleDelete, handleEdit ,setFormData, formData,setList,setError }) => {
 const classes = useStyles();



  


  return (
    <div
      // className={classes.messages}
      style={{
        display: "inline-block",
        overflowX: 'auto',

        marginTop:'2em',
        width:'100vw'
      }}
    >
      
      <div style={{  backgroundColor: 'navy',padding:'1em' }}>
        <Typography  variant={'h4'} style={{ color:'white'}}>Entries</Typography>
      </div>

      <table style={{borderCollapse: 'collapse', width: '100%',fontSize:'.8em',padding:'3em' }}>
        <tr>
          <th style={{padding:'1em',width:'10%' }}>EMAIL</th>
          <th style={{padding:'1em',width:'10%' }}>FIRST NAME</th>
          <th style={{padding:'1em',width:'10%' }}>LAST NAME</th>
          <th style={{padding:'1em',width:'10%' }}>USER NAME</th>
          <th style={{padding:'1em',width:'10%' }}>NATIONALITY</th>
          <th style={{ padding:'1em',width: '10%' }}>OTHER</th>
          <th style={{ padding:'1em',width: '20%' }}>ACTIONS</th>
         
        </tr>
        {list.map((elem) => (
          <SingleListItem setError={setError} list={list} setList={setList} formData={formData} setFormData={setFormData} key={elem.id} elem={elem} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
      </table>
      

    </div>
  );
};

export default MessageList;
