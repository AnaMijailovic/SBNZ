import axios from "axios";
import authHeader from './auth-header';

const URL = "http://localhost:8081/hra/risks";

class RisksService {

    async getAll() {
      return await axios.get(URL);
    }

    async getByName(name) {
      return await axios.get(URL + "/" + name);
    }

    async getRiskDiseases(name) {
      return await axios.get(URL + "/" + name + "/diseases");
    }

    async getStressLevel() {
      return await axios.get(URL + "/stressLevel");
    }

    updateRisk(postData) {
      return axios.put(URL, postData, { headers: authHeader() });
    }
 
  }
  
  export default new RisksService();