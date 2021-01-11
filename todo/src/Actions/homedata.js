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

export async function insertList(userInput,selectedBucket,bucketId) {
    try {
        let resp = await axios.post('http://localhost:5000/insertlist',{desc:userInput,bucket:selectedBucket,bucketId,bucketId},{
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

export async function updateItem(desc,mDone,itemId) {
    try {
        let resp = await axios.post('http://localhost:5000/updateitem',{desc:desc,mDone:mDone,itemId:itemId},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

