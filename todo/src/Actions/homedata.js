import axios from 'axios';
export async function getHomePageData() {
    try {
        let resp = await axios.get('http://localhost:5000/home',{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

export async function insertList(userInput,selectedBucket) {
    try {
        let resp = await axios.post('http://localhost:5000/insertlist',{desc:userInput,bucket:selectedBucket},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

export async function deletItem(itemId) {
    try {
        let resp = await axios.post('http://localhost:5000/deleteitems',{itemId:itemId},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}