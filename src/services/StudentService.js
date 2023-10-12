import api from "../lib/axios";

export default {
    list() {
        return api.get('/students');
    },
    add(data) {
        return api.post('/students', data);
    },
    get(id) {
        return api.get('/students/' + id);
    },
    getBySchoolId(id) {
        return api.get('/students/by/school/' + id);
    },
    update(data) {
        return api.put('/students', data);
    },
    delete(id) {
        return api.delete('/students/' + id);
    }
};
