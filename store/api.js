import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const userAPI = {
  async asyncTest() {
    let {data} = await axios.get(`https://yesno.wtf/api`);
    return {rsData: data};
  }
};
