import axios from "axios";
import authHeader from './auth-header';

const URL = "http://localhost:8081/hra/rules";

class RulesService {

    addNewRule(postData) {
      return axios.post(URL, postData, { headers: authHeader() });
    }
 
  }
  
  export default new RulesService();