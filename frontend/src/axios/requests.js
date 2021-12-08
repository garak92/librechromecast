const axios = require('axios');

export async function playMedia(payload) {
    const config = {
        method: 'post',
        url: 'http://localhost:5000/api/play-media',
        data: { mediaUrl: payload }
    }
    try {
        let res = await axios(config);
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
    }

}