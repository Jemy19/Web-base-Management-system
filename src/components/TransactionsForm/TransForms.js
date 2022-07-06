import 'bootstrap/dist/css/bootstrap.min.css';
import './transactionform.css';
import Container from 'react-bootstrap/esm/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import React, {useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function TransForms() {

    const [date, setDate] = useState(new Date());
    const [value,setValue]=useState('');

    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

  return (
    <>
    <Container id="TransactionForm-container" className="d-grid h-100">
<Form id="TransactionForm-Form" className="text-center w-100">
    <h3>Transaction Form</h3>


    <Form.Group controlId="Reference Number">
    <FloatingLabel controlId="floatingInput" label="Reference Number" className="mb-3">
          <Form.Control type="Reference Number" size="lg" placeholder="Reference Number" autoComplete="Reference Number" className="position-relative" />
          </FloatingLabel>
        </Form.Group>

    <Form.Group controlId="Description">
    <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
          <Form.Control type="Description" size="lg" placeholder="Description" autoComplete="Description" className="position-relative" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address">
        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
          <Form.Control type="address" size="lg" placeholder="Address" autoComplete="address" className="position-relative" />
          </FloatingLabel>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="Date">
        <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
        <Form.Control type="date" name="datepic" placeholder="Date" value={date}
                onChange={(e) => setDate(e.target.value)}/>
                  </FloatingLabel>
            </Form.Group> 


            <InputGroup className="mb-3">
            <DropdownButton id="dropdown-basic-button" title="Type of Entry" onSelect={handleSelect} >
            <Dropdown.Item eventKey="Debit">Debit</Dropdown.Item>
            <Dropdown.Item eventKey="Credit">Credit</Dropdown.Item>
            </DropdownButton>
            <Form.Control value={value} />
             </InputGroup>

        <Form.Group className="mb-3" controlId="Amount">
        <FloatingLabel controlId="floatingInput" label="Amount" className="mb-3">
          <Form.Control type="Amount" size="lg" placeholder="Amount" autoComplete="Amount" className="position-relative" />
          </FloatingLabel>
        </Form.Group>
        

        <div className="d-grid">
          <Button variant="primary" size="lg">Submit</Button>
        </div>
</Form>
    </Container>
    </>
  );
}

export default TransForms
