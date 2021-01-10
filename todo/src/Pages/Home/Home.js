import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
// importing the components from react Bootstrap
import { Container,Row,Col ,ListGroup,ListGroupItem,InputGroup,FormControl,Button,Form,Badge} from 'react-bootstrap';
// import css
import './Home.css'


class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* common navbar component */}
                <NavBar />
                <div>
                    <Container>
                    <div className="todolist todolist--alignment">
                            <div className="todolistInput">
                                <Form.Row>
                                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                                        <Form.Label>Add Items</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Task"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md = "3" controlId="exampleForm.ControlSelect1">
                                        <Form.Label>select Bucket</Form.Label>
                                        <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md = "2">
                                    <Button variant="primary">Add Items</Button>
                                    </Form.Group>
                                </Form.Row>

                            </div>
                        <div className="todolistGroup">
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col md = '9'>
                                    <div className="listInput"> 
                                    <Form.Control
                                            type="text"
                                            disabled
                                            value="this is a test"
                                        />
                                    </div>
                                    </Col>
                                    <Col md="3">
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Form.Check type="checkbox" label="" />
                                    <Badge variant="primary" style={{margin:'5px'}}>Save</Badge>
                                    <Badge variant="secondary" style={{margin:'5px'}}>Edit</Badge>
                                    <Badge variant="warning" style={{margin:'5px'}}>Delete</Badge>
                                    </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        </div>
                    </div>
                </Container>

                </div>
            </div>

        )
    }
}

export default Home;