import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ToDoListComponent from './ToDoListComponent';
// /Users/karishmagajria/React/todoapp_usingmaterialui/node_modules/bootstrap/dist/css/bootstrap.min.css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  //useState() hook at the top level of functrional component
  const [inputList , setinputList] =  useState('');
  const [items , setItems] = useState([]);
  const [duplicate , setduplicate] = useState('');
  const [hidden , setHidden] = useState(true);
  const [editid, seteditid] = useState('');
  const [edit , setedit] = useState(false);


  const handleChange = (event) => {
    event.preventDefault();
    return setinputList(event.target.value);
  }

  //add th item to0 the queue.
  const addTheItemToQueue = (event) => 
  {
    if ((event.key == "Enter" || event.currentTarget.name == "click") && inputList.length>0)  {
    //  if (edit == true){
    //   setItems((oldval)=>{
    //     console.log('oldval are after deletw' , oldval);
    //     return oldval.filter((arrele, index) => { 
    //       console.log('arrElem:' + arrele);
    //       console.log('arrElem index is: '+ index);
    //       if (editid != index){
    //         //oldval.splice(id,1,inputList);
    //         return editid !== index;
    //       }else{
    //         console.log('editid != index');
    //         console.log('inputlist is', inputList);
    //         oldval.splice(editid,1,inputList);
    //       }
    //     });
    //   });
    //   console.log('items: ', items);
    //  }else{
    //   setedit(false);
    //  }
    if (items.includes(inputList)){
        // alert('duplicate entry !');
        setHidden(false);
        setduplicate(inputList);
      }else{
        setItems((oldval)=>{
          console.log('oldValue is:', oldval);
          if(edit == true){
            return oldval.filter((arrele, index) => { 
              console.log('arrElem:' + arrele);
              console.log('arrElem index is: '+ index);
              if (editid != index){
                //oldval.splice(id,1,inputList);
                return editid !== index;
              }else{
                console.log('editid != index');
                console.log('inputlist is', inputList);
                items.splice(editid,1,inputList);
                console.log("items che..", items);
                setItems(items);
              }
            });
          }else{
            return [...oldval , inputList];
          }
          setHidden(true);
        })
      }
      setinputList('');
      setedit(false);
      seteditid('');
    }  
  };

//   const delItem = (id) => {
//     console.log('delete the item!');
//     setItems((oldval) => {
//       console.log('oldval are after deletw' , oldval);
//       return (oldval);
//     });
//  }

 setTimeout(() => {
  console.log('Hello, World!')
  setHidden(true);
}, 3000);


const editTheItem = (id) =>{
  setedit(true);
  console.log('edit this item');
  console.log('id is:', id);
  setinputList(items[id]);
  seteditid(id)
  // items.splice(id,1,{inputList})
  console.log('items: ', items);
  // const teams = ['karu', 'disha', 'breezer', 'moomy'];
  // teams.splice(3,1,'mummy');
  // console.log('teams array is: ', teams);
}

  return(
    <div className= 'main'>
      <div className= 'center'>
        <br/>
        <h1>TO DO APP</h1>
        <button className= 'btn btn-success'>ToDo app Made successfully</button>
        <br/>
        <input type = "text" 
        placeholder = 'add an item'
        onChange = {handleChange}
        value = {inputList}
        onKeyPress = {addTheItemToQueue}
        />
        <Button className = 'addbtn' onClick = {addTheItemToQueue} name="click">
          <AddCircleOutlineIcon/>
        </Button>
        <br/>
        {(hidden == false)? <span>{duplicate} is a duplicate entry!!</span> : null}
        <ul>
          {/* <li>
            {inputList}
          </li> */}
          {items.map((itemCurrentValue,index)=>{
            return <ToDoListComponent
            key = {index}
            id = {index}
            text = {itemCurrentValue}
            onSelect = {editTheItem}
            />
          //   return <li>
          //   {itemCurrentValue}
          // </li> 
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
