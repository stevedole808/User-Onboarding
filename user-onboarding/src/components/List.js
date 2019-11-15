import React, {useState} from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const List = props => {
    console.log("props", props);
    const [list, setList] = useState ({ 
        name: "", 
        email: "", 
        role: "" 
    })


    const handleChanges = e => {
        console.log(list);
        setList({ ...list, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewList(list)
        setList({ email: "", role: "" });
    }

    return(
        <div className="formCont">
          <Form onSubmit={submitForm}>
            <FormGroup row>
              <Label for="name" sm={2}>Name</Label>
              <Col sm={10}>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChanges}
                  value={list.name}
                  placeholder="Full Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleChanges}
                  value={list.email}
                  placeholder="example@example.com" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="role" sm={2}>Role</Label>
              <Col sm={10}>
                <Input
                  id="role"
                  type="select"
                  name="role"
                  onChange={handleChanges}
                  value={list.role}
                >
                    <option>Tank</option>
                    <option>Healer</option>
                    <option>Damage</option>
                    <option>Support</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );
  };
  
  export default List;