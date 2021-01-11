import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
import InputComp from '../../Components/InputComp/InputComp';
// importing the components from react Bootstrap
import { Container,ListGroup } from 'react-bootstrap';
import { getHomePageData,insertList ,deletItem,updateItem} from '../../Actions/homedata'
// import css
import './Home.css'



class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            bucket:[],
            taskInput: "",

        }
    }
   async  componentDidMount() {
        let homedata = await getHomePageData();
        if(homedata.status) {
            this.setState({
                items:homedata.data.list,
                bucket:homedata.data.bucket
            })
        }
    }
    //add the items to the to do list 
    addTask = async (userInput,selectedBucket,bucketId,type) => {
        if(selectedBucket == '') {
            alert("please select bucket")
            return
        }
        let resp = await insertList(userInput,selectedBucket,bucketId,type);
        console.log(resp);
        if(resp.status) {
        let items = this.state.items
        items.push({ description: userInput, isChecked: false, 
            bucketName:selectedBucket,
            id:resp.id,
            bucketid:bucketId})
        this.setState({ items: items })
        }
    }

    //delete items
    deleteItems = async (itemId)=>{
        let resp = await deletItem(itemId);
        console.log(resp)
        if(resp.status) {
            let items_array = this.state.items
            let itemindex = "";
            items_array = items_array.filter((data,index)=>{
                if(data.id != itemId) {
                    return true
                }
                return false
            })
            this.setState({ items: items_array })
        }
    }
    updateItems = async(userInput,isChecked,itemId)=>{
        console.log(userInput,isChecked,itemId);
        let resp = await updateItem(userInput,isChecked,itemId);
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
                                    type="todolist"
                                    Bucket={this.selectBucket}
                                    bucketlist={this.state.bucket}
                                    addTask={this.addTask}
                                />
                            </div>
                            <div className="todolistGroup">
                                <ListGroup>
                                    {
                                        this.state.items.map((item,index) => {
                                            return (
                                                <Items 
                                                key={item.id} 
                                                type="todolist" 
                                                item={item}
                                                deleteItems = {this.deleteItems}
                                                updateItems={this.updateItems}
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

export default Home;