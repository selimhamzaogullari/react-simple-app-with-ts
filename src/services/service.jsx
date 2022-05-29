import axios from "axios"

export default {
    async saveInfos(data) {
        try {
            const res = await axios.post('https://6293ac027aa3e6af1a0f3e69.mockapi.io/api/v1/infos', data)
            return res.status === 201
        }
        catch (e) {
            console.log(e)
        }
    },
}