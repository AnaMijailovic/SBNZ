import axios from "axios";
import authHeader from './auth-header';

const URL = "http://localhost:8081/hra/diseases";

class DiseasesService {

    async getAll() {
      return await axios.get(URL);
    }

    async getByName(name) {
      return await axios.get(URL + "/" + name);
    }

    deleteDisease(name) {
      return axios.delete(URL + "/" + name, { headers: authHeader() });
    }

    addNewDisease(postData) {
      return axios.post(URL, postData, { headers: authHeader() });
    }

    updateDisease(postData) {
      return axios.put(URL, postData, { headers: authHeader() });
    }
 
  }
  
  export default new DiseasesService();