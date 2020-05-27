import axios from "axios";

const URL = "http://localhost:8081/hra/deseases";

class DeseasesService {

    async getAll() {
      return await axios.get(URL);
    }
  
 
  }
  
  export default new DeseasesService();