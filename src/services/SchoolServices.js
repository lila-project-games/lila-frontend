import api from "../lib/axios";

export default {
    list() {
        return api.get('/schools')
    },
    add(data) {
        return api.post('/schools', data)
    },
    get(id) {
        return api.get('/schools/' + id)
    },
    update(data) {
        return api.post('/schools', data)
    },
    delete(id) {
        return api.delete('/schools/' + id)
    }
}
