import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, InputGroup, FormControl, Button, Form, Badge } from 'react-bootstrap';

class InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput:"",
            // type:'todolist',
            selectedBucket:"",
            selectedBucketId:""
        }
    }
    componentDidMount() {
        // this.setState({
        //     type:this.props.type
        // })
    }

    //update the filed on change
    updateUserInput = (data) => {
        this.setState({ userInput: data })
    }

    //select the bucket
    selectBucket = (id,event) => {
        console.log(id,event.target.options[event.target.options.selectedIndex].label)
        this.setState({selectedBucketId: id,selectedBucket:event.target.options[event.target.options.selectedIndex].label})
        console.log(id)
    }
    render() {
        return (
            <Form.Row>
                {this.props.type != 'bucket' ?
                    <>
                        <Form.Group as={Col} md="8" controlId="validationCustom01">
                            <Form.Label>Add Items</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="add items to the list"
                                onChange={(event) => {
                                    this.updateUserInput(event.target.value)
                                }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect1">
                            <Form.Label>select Bucket</Form.Label>
                            <Form.Control as="select"  
                            custom onChange={(event) => {
                                this.selectBucket(event.target.value,event)
                            }}
                            >
                                <option>select Bucket</option>
                                {this.props.bucketlist.map((data,index)=>{
                                    return(<option 
                                        key = {data.id}
                                        value={data.id}
                                        bucketid = {data.id}>
                                        {data.description}
                                        </option>)
                                })
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="2">
                            <Button variant="primary" onClick={() => { this.props.addTask(
                                this.state.userInput,
                                this.state.selectedBucket,
                                this.state.selectedBucketId,
                                this.props.type
                            ) }}>Add Items</Button>
                        </Form.Group>
                    </>
                    :
                    <>
                        <Form.Group as={Col} md="9" controlId="validationCustom01">
                            <Form.Label>Add Buckets</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Add buckets"
                                onChange={(event) => {
                                    this.updateUserInput(event.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Add Bucket</Form.Label>
                            <div>
                                <Button variant="primary" onClick={() => { this.props.addBucket(
                                    this.state.userInput,
                                    this.props.type
                                ) }}>Submit</Button>
                            </div>
                        </Form.Group>
                    </>
                }
            </Form.Row>
        )
    }
}

export default InputComp;