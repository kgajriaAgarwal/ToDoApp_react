import React,{useState} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import './ToDoListComponent.css';
import { ListItemSecondaryAction } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import EditIcon from '@material-ui/icons/Edit';
 

const ToDoListComponent = (props) => {
  //useState on the top level
  const[cut, setcut] = useState(false);

  //function
  const cutTheItem = () => {
    console.log('cut this item');
    setcut(true);
  }

  const uncutTheItem = () => {
    console.log('uncut this item');
    setcut(false);
  }

  // const editTheItem = () =>{
  //   console.log('edit this item');
  // }


  return (
    <div className = 'todo'>
      <span>
        <Button className = 'del' onClick = {cutTheItem}>
          <DeleteForeverIcon/>
        </Button>
        </span>
      <li style={{textDecoration : cut ? 'line-through' : 'none'}} >{props.text}</li> 
      {cut ? <Button onClick = {uncutTheItem}><ReplayIcon/></Button> :
      <Button onClick = {()=> {props.onSelect(props.id)}}><EditIcon/></Button>}
    </div>
  );
}

export default ToDoListComponent;