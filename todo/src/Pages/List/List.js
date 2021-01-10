import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
import InputComp from '../../Components/InputComp/InputComp';
// importing the components from react Bootstrap
import { Container, ListGroup } from 'react-bootstrap';

class List extends Component {
    constructor() {
        super();
        this.state = {
            items: [{desc: "one",type:"bucket",id:1},
            { desc: "two" ,type:"bucket",id:2}],
            taskInput: "",

        }
    }
    //add bucket
    addBucket = (userInput,type) => {
        let bucketItems = this.state.items
        bucketItems.push({desc:userInput,type:"bucket",id:5});
        this.setState({item:bucketItems})
        
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
                                <InputComp 
                                type="bucket"
                                addBucket = {this.addBucket}
                                 />
                            </div>
                            <div className="todolistGroup">
                                <ListGroup>
                                    {
                                        this.state.items.map((item, index) => {
                                            return (
                                                <Items type = "bucket" 
                                                item={item} 
                                                />
                                            )
                                        })
                                    }
                                </ListGroup>
                            </div>
                        </div>
                    </Container>

                </div>
            </div>

        )
    }
}

export default List;

