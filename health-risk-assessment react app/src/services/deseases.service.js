import axios from "axios";
import authHeader from './auth-header';

const URL = "http://localhost:8081/hra/deseases";

class DeseasesService {

    async getAll() {
      return await axios.get(URL);
    }

    async getByName(name) {
      return await axios.get(URL + "/" + name);
    }

    deleteDisease(name) {
      return axios.delete(URL + "/" + name, { headers: authHeader() });
    }

    addNewDesease(postData) {
      return axios.post(URL, postData, { headers: authHeader() });
    }
 
  }
  
  export default new DeseasesService();