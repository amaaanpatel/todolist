import axios from 'axios';
export async function getBucket() {
    try {
        let resp = await axios.get('http://52.66.134.20:8081/getbucket',{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

export async function insertBucket(userInput,selectedBucket) {
    try {
        let resp = await axios.post('http://52.66.134.20:8081/insertbucket',{desc:userInput},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

export async function deleteBucket(itemId) {
    try {
        let resp = await axios.post('http://52.66.134.20:8081/deletebucket',{itemId:itemId},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}

export async function updateBucket(desc,itemId) {
    try {
        let resp = await axios.post('http://52.66.134.20:8081/updatebucket',{desc:desc,itemId:itemId},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(resp.data);
        return resp.data
    } catch (error) {

    }
}


