import axios from 'axios';

export default {
  // Get all topics
  getAll (conditions = {}) {
    return axios.get('https://7b41b63a-3725-47ce-a8ae-c448767e96df.mock.pstmn.io/topics', conditions);
  }
}