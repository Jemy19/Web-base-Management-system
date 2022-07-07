import React,{useState, useEffect} from 'react'
import './Newdues.css'
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp, onSnapshot } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const initialState = {
  name: "",
  address: "",
  date:"",
  due:"",
  amount:"",
}

function Newdues() {

    const [data,setData] = useState(initialState)
    const dueid = uuid();
    const navigate = useNavigate()
    const { name, address, due, date,amount} = data
    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "dues", dueid), {
            ...data,
            timeStamp: serverTimestamp(),
          })
          navigate('/duelist')
      };

    const handleInput = (e) =>{
        const id = e.target.id
        const value = e.target.value
       
        setData({...data, [id] : value})
    }
  
    console.log(data)

    const [value,setValue]=useState('');

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (

    <>
    <Container id="MonthlyDueForm-container" className="d-grid h-100">
<Form id="MonthlyDueForm-Form" className="text-center w-100"   onSubmit = {handleAdd}>
    <h3>Payable Form</h3>

    <Form.Group controlId="Fullname">
    <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
          <Form.Control type="fullname" size="lg" placeholder="Fullname" autoComplete="fullname" className="position-relative" value = {name }id = 'name' onChange = {handleInput}/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address">
        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
          <Form.Control type="address" size="lg" placeholder="Address" autoComplete="address" className="position-relative" value = {address} id='address' onChange = {handleInput} />
          </FloatingLabel>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="Date">
        <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
        <Form.Control type="date" name="datepic" placeholder="Date" id = 'date' value={date}
                onChange={handleInput}/>
                  </FloatingLabel>
            </Form.Group>

            <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Other Dues"
          id="input-group-dropdown-1"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Sticker for Cars">Sticker for Cars</Dropdown.Item>
          <Dropdown.Item eventKey="Gym">Gym</Dropdown.Item>
          <Dropdown.Item eventKey="Swimming Pool">Swimming Pool</Dropdown.Item>
          <Dropdown.Item eventKey="Tennis Court">Tennis Court</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Association Monthly Due">Association Monthly Due</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" value = {value} id='due' onChange = {handleInput}/>
      </InputGroup>


        <Form.Group className="mb-3" controlId="Amount">
        <FloatingLabel controlId="floatingInput" label="Amount" className="mb-3">
          <Form.Control type="Amount" size="lg" placeholder="Amount" autoComplete="Amount" className="position-relative"  value = {amount} id='amount' onChange = {handleInput}/>
          </FloatingLabel>
        </Form.Group>
        

        <div className="d-grid">
          <Button variant="primary" size="lg" type = 'submit'>Submit</Button>
        </div>
</Form>
    </Container>
    </>
  );
}

export default Newdues