import React,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import {UserContext} from '../context/DataContextComp'


const AddCart = () => {
  const {count,setCount}= useContext(UserContext)
    


  return (
    <div> 
      {/* <h1>{count}</h1> */}
        <Button onClick={()=> setCount (count+1)} variant="primary" className="bt-css">Add-Cart</Button>
    </div>
  )
}

export default AddCart