import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, InputGroup, FormControl, Button, Form, Badge } from 'react-bootstrap';


class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            disableInput : true,
            is_edit:false,
            isChecked:false,
            desc:''
        }
    }
    componentDidMount() {
        console.log(this.props.item)
        this.setState({
            isChecked:this.props.item.isChecked,
            desc:this.props.item.description
        })
    }
    //update the todo task
    updateTask = (data)=>{
        this.setState({
            task:data
        })
    }
    //edit items 
    editItems = ()=> {
        this.setState({
            is_edit:true,
            disableInput:false
        })
    }
    //save the items after update
    saveItems = ()=>{
        this.setState({
            disableInput:true,
            is_edit:false
        })
    }
    //delete items
    deleteItems = ()=>{

    }
    //items complete checked
    itemChecked = (data)=>{
        this.setState({
            isChecked:data
        })
    }
    render() {
        return (
            <ListGroup.Item>
                <Row>
                    <Col md='9'>
                        <div className="listInput">
                            <Form.Control
                                type="text"
                                disabled = {this.state.disableInput}
                                value={this.state.desc}
                                onChange={(event)=>{
                                    this.updateTask(event.target.value)
                                }}  
                            />
                        </div>
                    </Col>
                    <Col md="3">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {this.props.type == 'todolist' ?
                                <>
                                    <Form.Check type="checkbox" 
                                    checked={this.state.isChecked} 
                                    label="Done" 
                                    onChange={(event)=>{this.itemChecked(event.target.checked)}}/>
                                    <Badge variant="info" style={{ margin: '5px' }}>{this.props.item.bucketName}</Badge>
                                </>
                                : null
                            }
                            { this.state.is_edit ?
                            <Badge 
                            variant="primary" 
                            style={{ margin: '5px' }}
                            onClick={()=>{ this.saveItems()}}>Save</Badge>
                            :
                            <Badge 
                            variant="secondary" style={{ margin: '5px' }} 
                            onClick = {()=>{this.editItems()}}>Edit</Badge>
                            }
                            <Badge 
                            variant="warning" 
                            style={{ margin: '5px' }}
                            onClick={()=>{this.deleteItems()}}
                            >Delete</Badge>
                        </div>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}

export default Items;