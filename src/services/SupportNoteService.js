import axios from 'axios';
import equipTypeList from '../data/equipDescList';

class SupportNoteService {

    api = 'http://localhost:1880/supportnote/api/';

    async getAll() {
        try {
            const res = await axios.get(this.api);
            return res.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getById() {

    }

    async create(note) {
        

        const note2 = {...note};
        note2.equipType = equipTypeList.find(x => x.value === note.equipType).name;       
        note2.activityTime = this.time_convert(note.activityTime);       

        try {
            const res = await axios.post(this.api, note2);
            return res.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    time_convert(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return hours + ":" + minutes;
    }


}

export default SupportNoteService;

//
    //  '{{{payload.date}}}'
    // ,'{{{payload.equipType}}}'
    // ,'{{{payload.equipDesc}}}'
    // ,'{{{payload.activityDesc}}}'
    // ,'{{{payload.activityTime}}}'
    // ,'{{{payload.shortTermDesc}}}'
    // ,'{{{payload.correctionResp}}}'
    // ,'{{{payload.correctCallBit}}}'
    // ,'{{{payload.correctCallDesc}}}'
    // ,'{{{payload.areaResp}}}'
