import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
// importing the components from react Bootstrap
import { Container, Row, Col, ListGroup, ListGroupItem, InputGroup, FormControl, Button, Form, Badge } from 'react-bootstrap';
// import css
import './Home.css'



class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: [{ task: "want to complete this", isChecked: false,bucket:"one" },
            { task: "want to complete this 2", isChecked: true,bucket:"two" }],
            taskInput:"",
            selectedBucket:""

        }
    }
    componentDidMount() {

    }
    selectBucket = (data) =>{
        this.setState({selectedBucket:data})
        console.log(data)
    }
    //update the filed on change
    updateTaskInput = (data) => {
        this.setState({taskInput:data})
    }
    //add the items to the to do list 
    addTask = ()=>{
        let items  = this.state.items
        items.push({task:this.state.taskInput,isChecked:true,bucket:this.state.selectedBucket})
        this.setState({items:items})
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
                                            select                         type="text"
                                            placeholder="Task"
                                            onChange = {(event)=>{
                                                this.updateTaskInput(event.target.value)
                                            }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect1">
                                        <Form.Label>select Bucket</Form.Label>
                                        <Form.Control as="select" onChange={(event)=>{
                                            this.selectBucket(event.target.value)
                                        }}>
                                            <option>1</option>
                                            <option>2</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="2">
                                        <Button variant="primary" onClick={()=>{this.addTask()}}>Add Items</Button>
                                    </Form.Group>
                                </Form.Row>

                            </div>
                            <div className="todolistGroup">
                                <Items items={this.state.items} />
                            </div>
                        </div>
                    </Container>

                </div>
            </div>

        )
    }
}

export default Home;