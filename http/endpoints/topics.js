import { http } from '@/http/base'

export default {
  // Get all topics
  getAll (conditions = {}) {
    return http.get('/topics', conditions);
  }
}