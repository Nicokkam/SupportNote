import axios from 'axios';

class WorkplaceService {

    api = 'http://10.8.66.4/lts/api/workplace/';

    async getAll() {
        try {
            const res = await axios.get(this.api);
            return res.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    // async getById(process) {
    //     try {
    //         const res = await axios.get(this.api + process);
    //         return res.data;
    //     } catch (error) {
    //         console.error(error);
    //         return error;
    //     }
    // }


}

export default WorkplaceService;