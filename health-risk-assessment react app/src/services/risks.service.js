import axios from "axios";

const URL = "http://localhost:8081/hra/risks";

class RisksService {

    async getAll() {
      return await axios.get(URL);
    }

    async getByName(name) {
      return await axios.get(URL + "/" + name);
    }

    async getStressLevel() {
      return await axios.get(URL + "/stressLevel");
    }
 
  }
  
  export default new RisksService();