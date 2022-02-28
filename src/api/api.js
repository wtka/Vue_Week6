import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}`,
  headers: { 'Content-Type': 'application/json' },
});

export default {
  getEvent(path) {
    return instance.get(path);
  },
  postEvent(path, data) {
    return instance.post(path, data);
  },
  deleteEvent(path) {
    return instance.delete(path);
  },
};
