import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
import InputComp from '../../Components/InputComp/InputComp';
// importing the components from react Bootstrap
import { Container, ListGroup } from 'react-bootstrap';
import { getBucket,insertBucket,deleteBucket} from '../../Actions/bucket'

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
    addBucket = async (userInput,type) => {
        let resp = await insertBucket(userInput);
        console.log(resp);
        if (resp.status) {
            let bucketItems = this.state.items
            bucketItems.push({description:userInput,type:"bucket",id:resp.id});
            this.setState({item:bucketItems})
        }        
    }

    //delete items
    deleteItems = async (itemId)=>{
        let resp = await deleteBucket(itemId);
        console.log(resp)
        // if(resp.status) {
        //     let items_array = this.state.items
        //     let itemindex = "";
        //     items_array = items_array.filter((data,index)=>{
        //         if(data.id != itemId) {
        //             return true
        //         }
        //         return false
        //     })
        //     this.setState({ items: items_array })
        // }
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
                                                deleteItems = {this.deleteItems} 
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

