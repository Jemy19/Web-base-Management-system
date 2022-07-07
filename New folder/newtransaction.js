import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import React, {useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp, getDoc } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import { v4 as uuid } from 'uuid'
import './newtransaction.css'
import {useNavigate} from 'react-router-dom'
const initialState = {
  name: "",
  description: "",
  address: "",
  amount:"",
}

function Newtransaction() {

  const [data,setData] = useState(initialState)
  const { name, description, address, amount,entry} = data
  const navigate = useNavigate()
  const transactionid = uuid()
    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "transaction", transactionid), {
            ...data,
            timeStamp: serverTimestamp(),
          })
        navigate('/transaction')
      };

    const handleInput = (e) =>{
        const id = e.target.id
        const value = e.target.value
       
        setData({...data, [id] : value})
    }
  

      const [date, setDate] = useState(new Date());
      const [value,setValue]=useState('');
  
      const handleSelect=(e)=>{
          console.log(e);
          setValue(e)

      }
      return (
        <>
        <Container id="TransactionForm-container" className="d-grid h-100">
    <Form id="TransactionForm-Form" className="text-center w-100" onSubmit = {handleAdd}>
        <h3>Transaction Form</h3>
        <Form.Group controlId="Reference Number">
        <FloatingLabel controlId="floatingInput" label="Reference Number" className="mb-3">
              <Form.Control id ="transid" type="Reference Number" size="lg" placeholder="Reference Number" readOnly  value = {transactionid} autoComplete="Reference Number" className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="Name">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control id = "name" type="name" size="lg" placeholder="FullName" autoComplete="FullName" value = {name} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
    
        <Form.Group controlId="Description">
        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
              <Form.Control id = "description" type="Description" size="lg" placeholder="Description" autoComplete="Description" value = {description || ""} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="Address">
            <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
              <Form.Control id = "address" type="address" size="lg" placeholder="Address" autoComplete="address" value = {address || ""} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="Date">
            <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
            <Form.Control id = 'date' type="text" name="datepic" placeholder="Date" value={date}
                    onInput={(e) => setDate(e.target.value)} onChange = {handleInput}/>
              </FloatingLabel>
                </Form.Group> 
    
    
                <InputGroup className="mb-3">
                <DropdownButton id="dropdown-basic-button" title="Type of Entry" onSelect={handleSelect} >
                <Dropdown.Item value = "Debit" eventKey="Debit">Debit</Dropdown.Item>
                <Dropdown.Item value = "Credit" eventKey="Credit">Credit</Dropdown.Item>
                </DropdownButton>
                <Form.Control id = "entry" value={value} onLoad= {handleInput}/>
                 </InputGroup>
    
            <Form.Group className="mb-3" controlId="Amount">
            <FloatingLabel controlId="floatingInput" label="Amount" className="mb-3">
              <Form.Control id = "amount" type="Amount" size="lg" placeholder="Amount" value = {amount || ""} autoComplete="Amount" className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            
    
            <div className="d-grid">
              <Button variant="primary" size="lg" type= 'submit'>Submit</Button>
            </div>
    </Form>
        </Container>
        </>
      );
  
 }
    export default Newtransaction