import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
// importing the components from react Bootstrap
import { Container,Row,Col ,ListGroup,ListGroupItem,InputGroup,FormControl,Button,Form} from 'react-bootstrap';
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
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md = "2">
                                    <Button variant="primary">Add Items</Button>
                                    </Form.Group>
                                </Form.Row>

                            </div>
                        <div className="todolistGroup">
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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