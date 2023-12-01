import React, { useEffect, useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Crudinmongo() {
    const [items, setitems]=useState('')
    const [allitems, setallitems]=useState([])
    const inputChangehandel=(e)=>{
        setitems(e.target.value)
    }




    // save data in momngodb
const [number, setnumber]= useState(0)
const saveDataInMongo=()=>{
      const Data ={
        number: number,
        items:items
      }

     fetch('http://localhost:8001/crud-operation/itemssave', {
      method: 'POST',
      body: JSON.stringify(Data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
        alert(`your data saved`)
        console.log(Data.items);
    })


}


useEffect(()=>{
    fetch('http://localhost:8001/crud-operation/allitems') .then(response => response.json())
    .then(data => {
        setallitems(data);
      console.log('items', data); 
    })
}, [])

const [itemsfordeleting, setitemsfordeleting]= useState('')

const itemsfordelete=(e)=>{
    setitemsfordeleting(e.target.value)
}
const Deletedatabyname = () => {
    let items = itemsfordeleting;
  
    fetch(`http://localhost:8001/crud-operation/${encodeURIComponent(items)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        alert(`Your data ${items} was deleted`);
        console.log('deletedata', data);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const [updatenumber, setupdatenumber]= useState('')
  const [updatevalue, setupdatevalue]= useState('')

  const updatedatabyNumber = () => {
    let data = {
      items: updatevalue,
    };
  
    fetch(`http://localhost:8001/crud-operation/23`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(updatedData => {
        alert(`Your data ${updatenumber} was updated`);
        console.log('updatedData', updatedData);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div >
      <h1>CRUD Operation In MongoDb and Nest Js</h1>


     <input type='text' value={items} onChange={(e)=>inputChangehandel(e)}/><br/>
     <input type='number' value={number} onChange={(e)=>setnumber(e.target.value)}/><br/>
      <Button onClick={saveDataInMongo}>Save Items</Button><br/>
     
      {allitems.map((item, index) => (
          <li key={index}><b>{item.number} {item.items}</b></li>
        ))}
     <input type='text' value={itemsfordeleting} onChange={(e)=>itemsfordelete(e)}/><br/>
     <Button onClick={Deletedatabyname}>Delete Data by name</Button><br/>


     <div>
        <Input type='text' value={updatevalue} placeholder='Enter New Value' onChange={(e)=>setupdatevalue(e.target.valaue)}/><br/>
        <Input type='text' value={updatenumber} onChange={(e)=>setupdatenumber(e.target.valaue)}/><br/>
        <Button onClick={updatedatabyNumber}>Update By Number</Button>
     </div>
    </div>
  )
}
