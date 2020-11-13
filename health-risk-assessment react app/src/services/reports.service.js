import axios from "axios";
import authHeader from './auth-header';

const URL = "http://localhost:8081/hra/reports";

class ReportsService {

    async getDiseaseReport(postData) {
      return await axios.get(URL + '/diseaseReport', postData,  { headers: authHeader() });
    }
 
  }
  
  export default new ReportsService();