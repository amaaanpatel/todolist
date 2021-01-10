import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, InputGroup, FormControl, Button, Form, Badge } from 'react-bootstrap';


const Items = (props) => {
    return (
        <ListGroup>
            {props.items.map((item) => {
                return (
                    <ListGroup.Item>
                        <Row>
                            <Col md='9'>
                                <div className="listInput">
                                    <Form.Control
                                        type="text"
                                        disabled
                                        value={item.task}
                                    />
                                </div>
                            </Col>
                            <Col md="3">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Form.Check type="checkbox" checked={item.isChecked} label="" />
                                    <Badge variant="info" style={{ margin: '5px' }}>{item.bucket}</Badge>
                                    <Badge variant="primary" style={{ margin: '5px' }}>Save</Badge>
                                    <Badge variant="secondary" style={{ margin: '5px' }}>Edit</Badge>
                                    <Badge variant="warning" style={{ margin: '5px' }}>Delete</Badge>
                                </div>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            })
            }
        </ListGroup>

    )
}

export default Items;