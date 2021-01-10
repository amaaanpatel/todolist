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