import React, { Component } from "react";
import NavBar from '../../Components/navbar/navbar';
import Items from '../../Components/Items/items';
import InputComp from '../../Components/InputComp/InputComp';
// importing the components from react Bootstrap
import { Container,ListGroup } from 'react-bootstrap';
import { getHomePageData } from '../../Actions/homedata'
// import css
import './Home.css'



class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            taskInput: "",

        }
    }
   async  componentDidMount() {
        let homedata = await getHomePageData();
        this.setState({
            items:homedata
        })
    }
    //add the items to the to do list 
    addTask = (userInput,selectedBucket,type) => {
        let items = this.state.items
        items.push({ desc: userInput, isChecked: false, bucketName:selectedBucket })
        this.setState({ items: items })
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
                                    addTask={this.addTask}
                                />
                            </div>
                            <div className="todolistGroup">
                                <ListGroup>
                                    {
                                        this.state.items.map((item,index) => {
                                            return (
                                                <Items key={index} type="todolist" item={item} />
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