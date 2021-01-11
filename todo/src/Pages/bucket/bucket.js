import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
import InputComp from '../../Components/InputComp/InputComp';
// importing the components from react Bootstrap
import { Container, ListGroup } from 'react-bootstrap';
import { getBucket} from '../../Actions/bucket'

class bucket extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            taskInput: "",

        }
    }
    async componentDidMount() {
        let resp =  await getBucket();
        console.log(resp);
        this.setState({items:resp})
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
                                                <Items 
                                                key={item.id}
                                                type = "bucket" 
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

export default bucket;

