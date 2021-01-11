import axios from 'axios';
export async function getHomePageData() {
    try {
        let resp = await axios.get('http://52.66.134.20:8081/home',{
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
        let resp = await axios.post('http://52.66.134.20:8081/insertlist',{desc:userInput,bucket:selectedBucket,bucketId,bucketId},{
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
        let resp = await axios.post('http://52.66.134.20:8081/deleteitems',{itemId:itemId},{
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
        let resp = await axios.post('http://52.66.134.20:8081/updateitem',{desc:desc,mDone:mDone,itemId:itemId},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

